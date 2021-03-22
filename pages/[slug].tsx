import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { initializeApollo } from '../lib/apolloClient';
import {
  PostDetailDocument,
  PostDetailQuery,
  PostDetailQueryVariables,
  PostSlugsDocument,
  PostSlugsQuery,
} from '../lib/graphql';
import { Header } from '../components/Header';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../components/Icon';
import { Footer } from '../components/Footer';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function PostDetail({
  post,
  categories,
  header,
  menuItems,
  rootSeo,
  footer,
}: Props) {
  return (
    <>
      <Header
        siteTitle={header?.siteTitle}
        title={post!.title}
        logo={header?.siteLogoUrl}
        menuItems={menuItems}
        seo={post?.seo}
        rootSeo={rootSeo}
      />
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
                      <FacebookIcon />
                    </div>
                    <div className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200">
                      <TwitterIcon />
                    </div>
                    <div className="bg-transparent px-1 pt-2 pb-2 cursor-pointer hover:bg-blue-200">
                      <LinkedInIcon />
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
              <div className="text-gray-600 text-lg text-center">Topik</div>
              <div className="h-1 w-10 rounded bg-blue-500 my-3 mx-auto" />
              <div className="leading-7 text-gray-600 text-base">
                <ul>
                  {categories!.nodes!.map((category) => {
                    return (
                      <li
                        key={category!.id}
                        className="py-4 border-b border-gray-400 last:border-none"
                      >
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
            </div>
          </div>
        </div>
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
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      rootSeo: result.data.seo,
      footer: result.data.getFooter,
    },
  };
};