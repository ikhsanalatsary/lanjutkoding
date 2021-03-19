import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { initializeApollo } from '../../lib/apolloClient';
import {
  CategoryDetailDocument,
  CategoryDetailQuery,
  CategoryDetailQueryVariables,
  CategorySlugsDocument,
  CategorySlugsQuery,
} from '../../lib/graphql';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function CategoryList({ posts, category }: Props) {
  return (
    <>
      <Head>
        <title>{category!.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-screen-xl text-center pt-8 pb-8 px-3 mx-auto">
        <h1 className="text-4xl text-gray-800 font-semibold">
          {category!.name}
        </h1>
      </header>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 py-12">
        {posts!.edges!.map((post) => {
          return (
            <div
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 "
              key={post!.cursor}
            >
              <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                <Link href={`/blog/${post!.node!.slug!}`}>
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
                  <a
                    className="no-underline hover:text-red-dark text-gray-500"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
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
  context: GetStaticPropsContext<CategoryDetailQueryVariables>
) => {
  let { params } = context;
  let result = await client.query<CategoryDetailQuery>({
    query: CategoryDetailDocument,
    variables: {
      slug: params?.slug,
    },
  });

  return {
    props: {
      posts: result.data.posts,
      category: result.data.categories!.nodes![0],
    },
    revalidate: 1,
  };
};
