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
      <header className="max-w-screen-xl text-center pt-8 pb-16 px-3 mx-auto">
        <h1 className="text-4xl text-gray-800 font-semibold">{post!.title}</h1>
        <div className="text-2xl text-gray-600 mt-1">
          {dayjs(post!.date!).format('DD MMMM YYYY')}
        </div>
      </header>
      <div className="w-full">
        <div className="max-w-screen-xl py-12 mx-auto flex flex-wrap">
          <div
            className="bg-white rounded-sm shadow-md px-4 sm:px-16 py-3"
            dangerouslySetInnerHTML={{ __html: post!.content }}
          />
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
