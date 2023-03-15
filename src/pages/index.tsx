/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import dayjs from 'dayjs';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { initializeApollo } from '../lib/apolloClient';
import { HomeDocument, HomeQuery } from '../lib/graphql';
import initializeSupabase from '../lib/supa';
import { generateCopyRight } from '../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function Home({ posts, header, menuItems, seo, footer, categories, affiliates }: Props) {
  return (
    <>
      <Header siteTitle={header?.siteTitle} siteDesc={header?.siteTagLine} rootSeo={seo} logo={header?.siteLogoUrl} menuItems={menuItems} />
      <header className="max-w-screen-xl text-center pt-4 pb-4 px-3 mx-auto">
        <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold" translate="no">
          {header?.siteTitle}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-1">{header?.siteTagLine}</h2>
      </header>
      <div className="container flex flex-wrap mx-auto mb-8">
        <div className="max-w-screen-xl py-12 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:w-3/4 md:pl-3 md:pr-5">
            {posts!.edges!.map((post) => {
              return (
                <div className="my-2 md:my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={post!.cursor}>
                  <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <Link href={post!.node!.uri}>
                      <a>
                        <Image
                          alt={post?.node?.featuredImage?.node?.altText ?? post!.node!.title!}
                          className="w-full"
                          src={
                            post?.node?.featuredImage?.node?.mediaDetails?.file?.slice(7) ??
                            (seo!.openGraph!.frontPage!.image!.mediaDetails!.file!.slice(7) ||
                              seo!.openGraph!.defaultImage!.mediaDetails!.file!.slice(7))
                          }
                          layout="responsive"
                          width={600}
                          height={400}
                        />
                      </a>
                    </Link>

                    <header className="leading-tight p-2 md:p-4">
                      <h3 className="text-base lg:text-lg break-words mb-2">
                        <Link href={post!.node!.uri}>
                          <a className="no-underline hover:underline text-black">{post!.node!.title}</a>
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 py-2">{dayjs(post!.node!.date!).format('DD/MM/YYYY')}</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-gray-500"
                        href="https://bio.link/ikhsaan"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          alt={post!.node!.author!.node!.name!}
                          className="block rounded-full"
                          layout="intrinsic"
                          src={post!.node!.author!.node!.avatar!.url!}
                          width={32}
                          height={32}
                        />
                        <p className="ml-2 text-sm">{post!.node!.author!.node!.name!}</p>
                      </a>
                    </footer>
                  </article>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-56 px-3 md:pr-3 md:pl-5">
            <div className="mb-10 first:mt-10">
              <div className="text-gray-600 text-lg text-center">Topik</div>
              <div className="h-1 w-10 rounded bg-blue-500 my-3 mx-auto" />
              <div className="leading-7 text-gray-600 text-base">
                <ul>
                  {categories!
                    .nodes!.filter((item) => item.name !== 'Uncategorized')
                    .map((category) => {
                      return (
                        <li key={category!.id} className="py-4 border-b border-gray-400 last:border-none">
                          <Link href={category!.uri}>
                            <a className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500">
                              {category!.name!}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="text-gray-600 text-lg text-center">Ads</div>
              <div className="h-1 w-10 rounded bg-blue-500 my-3 mx-auto" />
              {affiliates?.map((aff) => (
                <a
                  key={aff.id}
                  href={aff.link}
                  className="my-2 md:my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                  target="_blank"
                  rel="noopener sponsored"
                >
                  <span className="overflow-hidden rounded-lg shadow-lg bg-white">
                    <Image alt="" className="w-full" src={aff.image} layout="responsive" width={300} height={300} />
                    <p className="text-sm text-gray-500 py-2">{aff.name}</p>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer copyRightText={`${footer!.copyrightText!} ${header!.siteTitle!}`} socialLinks={footer!.socialLinks!} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps = async (_context: GetStaticPropsContext) => {
  let client = initializeApollo();
  let result = await client.query<HomeQuery>({
    query: HomeDocument,
  });
  let supabase = initializeSupabase();
  const { data, error } = await supabase.from('affiliate_links').select('name, image, link, id').order('name', { ascending: false }).limit(2);

  return {
    props: {
      posts: result.data.posts,
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      seo: result.data.seo,
      categories: result.data.categories,
      affiliates: data,
      footer: {
        ...result.data.getFooter,
        copyrightText: generateCopyRight(result.data.getFooter?.copyrightText),
      },
    },
    revalidate: 1,
  };
};
