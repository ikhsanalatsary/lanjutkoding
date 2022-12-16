import React from 'react';

import dayjs from 'dayjs';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { initializeApollo } from '../../lib/apolloClient';
import {
  CategoryDetailDocument,
  CategoryDetailQuery,
  CategorySlugsDocument,
  CategorySlugsQuery,
} from '../../lib/graphql';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function CategoryList({
  posts,
  category,
  header,
  menuItems,
  rootSeo,
  footer,
}: Props) {
  return (
    <>
      <Header
        siteTitle={header?.siteTitle}
        siteDesc={header?.siteTagLine}
        title={category?.name}
        logo={header?.siteLogoUrl}
        menuItems={menuItems}
        seo={category?.seo}
        rootSeo={rootSeo}
      />
      <header className="max-w-screen-xl text-center pt-8 pb-8 px-3 mx-auto">
        <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">
          {category!.name}
        </h1>
      </header>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 py-12 px-4">
        {posts!.edges!.map((post) => {
          return (
            <div
              className="my-2 md:py-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
              key={post!.cursor}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <Link href={post!.node!.uri}>
                  <a>
                    <Image
                      alt={
                        post?.node?.featuredImage?.node?.altText ??
                        post!.node!.title!
                      }
                      className="block h-auto w-full"
                      src={
                        post?.node?.featuredImage?.node?.mediaDetails?.file?.slice(
                          7
                        ) ??
                        rootSeo!.openGraph!.frontPage!.image!.mediaDetails!.file!.slice(
                          7
                        )
                      }
                      width={600}
                      height={400}
                    />
                  </a>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <Link href={`/blog/${post!.node!.slug!}`}>
                      <a className="no-underline hover:underline text-black">
                        {post!.node!.title}
                      </a>
                    </Link>
                  </h1>
                  <p className=" text-sm text-gray-500">
                    {dayjs(post!.node!.date!).format('DD/MM/YYYY')}
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-gray-500"
                    href="#"
                  >
                    <Image
                      alt={post!.node!.author!.node!.name!}
                      className="block rounded-full"
                      src={post!.node!.author!.node!.avatar!.url!}
                      width={32}
                      height={32}
                    />
                    <p className="ml-2 text-sm">
                      {post!.node!.author!.node!.name!}
                    </p>
                  </a>
                </footer>
              </article>
            </div>
          );
        })}
      </div>
      <Footer
        copyRightText={`${footer!.copyrightText!} ${header!.siteTitle!}`}
        socialLinks={footer!.socialLinks!}
      />
    </>
  );
}

let client = initializeApollo();
export const getStaticPaths: GetStaticPaths = async () => {
  let result = await client.query<CategorySlugsQuery>({
    query: CategorySlugsDocument,
  });
  return {
    paths: result.data.categories!.nodes!.map((node) => {
      return {
        params: { slug: node!.slug! },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>
) => {
  let { params } = context;
  let result = await client.query<CategoryDetailQuery>({
    query: CategoryDetailDocument,
    variables: {
      categorySlug: params?.slug,
      categoryId: params?.slug,
    },
  });

  return {
    props: {
      posts: result.data.posts,
      category: result.data.category,
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      rootSeo: result.data.seo,
      footer: result.data.getFooter,
    },
    revalidate: 1,
  };
};
