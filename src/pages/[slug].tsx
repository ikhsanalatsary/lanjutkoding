/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import Prism from 'prismjs';
import cheerio from 'cheerio';
import { initializeApollo } from '../lib/apolloClient';
import { PostDetailDocument, PostDetailQuery, PostDetailQueryVariables, PostSlugsDocument, PostSlugsQuery } from '../lib/graphql';
import { Header, removeSubDomain } from '../components/Header';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../components/Icon';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import initializeSupabase from '../lib/supa';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function PostDetail({ post, categories, header, menuItems, rootSeo, footer, affiliates }: Props) {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);
  useEffect(() => {
    import('smooth-scroll').then(({ default: SmoothScroll }) => {
      // eslint-disable-next-line no-new
      new SmoothScroll('a[href*="#"]', {
        speed: 500,
        // speedAsDuration: true,
        easing: 'easeOutCubic',
      });
    });
  }, []);
  const url = encodeURI(removeSubDomain(post?.link) ?? window.location.href);
  const shareText = encodeURI(post!.title!);
  const facebookShareUrl = `https://facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${shareText}&summary=${shareText}&source=${url}`;
  return (
    <>
      <Header siteTitle={header?.siteTitle} title={post!.title} logo={header?.siteLogoUrl} menuItems={menuItems} seo={post?.seo} rootSeo={rootSeo} />
      <header className="max-w-screen-xl text-center pt-8 pb-8 px-3 mx-auto">
        <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">{post!.title}</h1>
        <div className="text-xl md:text-2xl text-gray-600 mt-1">
          {dayjs(post!.date!).format('DD MMMM YYYY')} - {post!.author!.node!.name}
        </div>
      </header>
      <div className="w-full">
        <div className="max-w-screen-xl py-12 mx-auto flex flex-wrap">
          <div className="w-full md:w-2/3 md:pl-3 md:pr-5">
            <div className="bg-white md:rounded-lg md:shadow-lg px-4 sm:px-16 py-8">
              <div className="mt-4 flex flex-wrap justify-end">
                <div className="block">
                  <p className="text-left text-sm pb-2 ml-1">Bagikan: </p>
                  <div className="flex flex-wrap pb-4">
                    <a
                      aria-label="Bagikan ke Facebook"
                      href={facebookShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      aria-label="Bagikan ke Twitter"
                      href={twitterShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      aria-label="Bagikan ke LinkedIn"
                      href={linkedInShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent px-1 pt-2 pb-2 cursor-pointer hover:bg-blue-200"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <article className="text-gray-800 prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: post!.content! }} />
              <div className="mt-4 flex flex-wrap space-x-2 space-y-1">
                {post!.tags!.nodes!.map((tag) => {
                  return (
                    <div key={tag!.id} className="bg-[#b0b8c8] rounded-md px-3 py-1 text-sm font-semibold leading-6 text-gray-800">
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
              {affiliates!.map((aff) => (
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

export const getStaticProps = async (context: GetStaticPropsContext<PostDetailQueryVariables>) => {
  let { params } = context;
  let result = await client.query<PostDetailQuery>({
    query: PostDetailDocument,
    variables: {
      slug: params?.slug,
    },
  });
  if (result.data.post?.content) {
    // @ts-ignore
    const $ = cheerio.load(result.data.post.content, null, false);
    $('pre').each((i, el) => {
      let lang = $(el).attr('class')?.split(' ')[1].slice(9) ?? 'javascript';
      let code = $(el).find('code');
      code.replaceWith(Prism.highlight(code.text(), Prism.languages[lang], lang));
    });
    result = {
      ...result,
      data: {
        ...result.data,
        post: {
          ...result.data.post,
          content: $.html(),
        },
      },
    };
  }
  let supabase = initializeSupabase();
  const { data, error } = await supabase.from('affiliate_links').select('name, image, link, id').order('id', { ascending: true }).limit(7);
  return {
    props: {
      post: result.data.post,
      categories: result.data.categories,
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      rootSeo: result.data.seo,
      footer: result.data.getFooter,
      affiliates: data,
    },
    revalidate: 1,
  };
};
