import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { initializeApollo } from '../lib/apolloClient';
import { HomeDocument, HomeQuery } from '../lib/graphql';
import { Header } from '../components/Header';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function Home({ posts, header, menuItems, seo }: Props) {
  return (
    <>
      <Header
        siteTitle={header?.siteTitle}
        siteDesc={header?.siteTagLine}
        rootSeo={seo}
        logo={header?.siteLogoUrl}
        menuItems={menuItems}
      />
      <header className="max-w-screen-xl text-center pt-4 pb-4 px-3 mx-auto">
        <h1 className="text-4xl text-gray-800 font-semibold">
          Lanjutkoding.com
        </h1>
      </header>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 py-8">
        {posts!.edges!.map((post) => {
          return (
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
              key={post!.cursor}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <Link href={`/${post!.node!.slug!}`}>
                  <a>
                    <Image
                      alt={
                        post!.node!.featuredImage!.node!.altText ??
                        post!.node!.title!
                      }
                      className="block h-auto w-full"
                      src={post!.node!.featuredImage!.node!.sourceUrl!}
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
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps = async (_context: GetStaticPropsContext) => {
  let client = initializeApollo();
  let result = await client.query<HomeQuery>({
    query: HomeDocument,
  });

  return {
    props: {
      posts: result.data.posts,
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      seo: result.data.seo,
    },
    revalidate: 1,
  };
};
