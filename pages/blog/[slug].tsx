import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { initializeApollo } from '../../lib/apolloClient';
import {
  PostDetailDocument,
  PostDetailQuery,
  PostDetailQueryVariables,
  PostSlugsDocument,
  PostSlugsQuery,
} from '../../graphql';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function PostDetail({ post, categories }: Props) {
  return (
    <>
      <header className="max-w-screen-xl text-center pt-8 pb-8 px-3 mx-auto">
        <h1 className="text-4xl text-gray-800 font-semibold">{post!.title}</h1>
        <div className="text-2xl text-gray-600 mt-1">
          {dayjs(post!.date!).format('DD MMMM YYYY')} -{' '}
          {post!.author!.node!.name}
        </div>
      </header>
      <div className="w-full">
        <div className="max-w-screen-xl py-12 mx-auto flex flex-wrap">
          <div className="w-full md:w-2/3 md:pl-3 md:pr-5">
            <div className="bg-white rounded-lg shadow-lg px-4 sm:px-16 py-8">
              <div className="mt-4 flex flex-wrap justify-end">
                <div className="block">
                  <p className="text-left text-sm pb-2 ml-1">Bagikan: </p>
                  <div className="flex flex-wrap pb-4">
                    <div className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6  md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-500"
                        aria-hidden="true"
                        data-icon="facebook-messenger"
                        data-prefix="fab"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 00122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 01-53.91 9.93l-58.08-43.47a15 15 0 00-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0153.91-9.93l58.06 43.46a15 15 0 0018 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
                        ></path>
                      </svg>
                    </div>
                    <div className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6  md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-500"
                        data-icon="twitter-square"
                        data-prefix="fab"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                        ></path>
                      </svg>
                    </div>
                    <div className="bg-transparent px-1 pt-2 pb-2 cursor-pointer hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6  md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-500"
                        data-icon="linkedin"
                        data-prefix="fab"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <article
                className="text-gray-800 prose lg:prose-xl"
                dangerouslySetInnerHTML={{ __html: post!.content! }}
              />
              <div className="mt-4 flex flex-wrap space-x-2">
                {post!.tags!.nodes!.map((tag) => {
                  return (
                    <div
                      key={tag!.id}
                      className="bg-[#b0b8c8] rounded-md px-3 py-1 text-sm font-semibold leading-6 text-gray-800"
                    >
                      #{tag!.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 md:pr-3 md:pl-5">
            <div className="mb-10 first:mt-10">
              <div className="text-gray-600 text-lg text-center">
                Categories
              </div>
              <div className="h-1 w-10 rounded bg-blue-500 my-3 mx-auto" />
              <div className="leading-7 text-gray-600 text-base">
                <ul>
                  {categories!.nodes!.map((category) => {
                    return (
                      <li
                        key={category!.id}
                        className="py-4 border-b border-gray-400 last:border-none"
                      >
                        <Link href={`/category/${category!.slug!}`}>
                          <a className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500">
                            {category!.name!}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let client = initializeApollo();
export const getStaticPaths: GetStaticPaths = async () => {
  let result = await client.query<PostSlugsQuery>({
    query: PostSlugsDocument,
  });
  return {
    paths: result.data.posts!.nodes!.map((node) => {
      return {
        params: { slug: node!.slug! },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<PostDetailQueryVariables>
) => {
  let { params } = context;
  let result = await client.query<PostDetailQuery>({
    query: PostDetailDocument,
    variables: {
      slug: params?.slug,
    },
  });
  return {
    props: {
      post: result.data.post,
      categories: result.data.categories,
    },
  };
};
