import { gql } from '@apollo/client';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import dayjs from 'dayjs';
import { RootQuery } from '../../generated/graphql';
import { initializeApollo } from '../../lib/apolloClient';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function PostDetail({ post }: Props) {
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
            <div
              className="bg-white rounded-lg shadow-lg px-4 sm:px-16 py-8 text-gray-800"
              dangerouslySetInnerHTML={{ __html: post!.content }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 md:pr-3 md:pl-5">
            <div className="mb-10 first:mt-10">
              <div className="text-gray-600 text-lg text-center">
                You may also like
              </div>
              <div className="h-1 w-10 rounded bg-blue-500 my-3 mx-auto" />
              <div className="leading-7 text-gray-600 text-base">
                <ul>
                  <li className="my-4">
                    <a
                      className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500"
                      href="#"
                    >
                      Hello World 2
                    </a>
                  </li>
                  <li className="my-4">
                    <a
                      className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500"
                      href="#"
                    >
                      Love this design alot
                    </a>
                  </li>
                  <li className="my-4">
                    <a
                      className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500"
                      href="#"
                    >
                      Become Expert in few minutes
                    </a>
                  </li>
                  <li className="my-4">
                    <a
                      className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500"
                      href="#"
                    >
                      Maybe Next Journey
                    </a>
                  </li>
                  <li className="my-4">
                    <a
                      className="text-gray-600 border-b-2 border-blue-200 leading-6 hover:text-gray-800 hover:border-b-2 hover:border-primary-500"
                      href="#"
                    >
                      Done is better than Perfect
                    </a>
                  </li>
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
  let result = await client.query<RootQuery>({
    query: gql`
      query GetAllPostSlugs {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
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
  context: GetStaticPropsContext<{ slug: string }>
) => {
  let { params } = context;
  let result = await client.query<RootQuery>({
    query: gql`
      query GetPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          content
          date
          author {
            node {
              slug
              name
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              id
              name
            }
          }
          categories {
            nodes {
              id
              slug
              name
            }
          }
        }
      }
    `,
    variables: {
      slug: params?.slug,
    },
  });
  return {
    props: { post: result.data.post },
  };
};
