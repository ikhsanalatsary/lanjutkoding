/* eslint-disable react/destructuring-assignment */
import React from 'react';

import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  NextSeo,
  SiteLinksSearchBoxJsonLd,
  SocialProfileJsonLd,
} from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  CategoryDetailQuery,
  HomeQuery,
  Maybe,
  PostDetailQuery,
} from '../lib/graphql';

type RootSeoType = Pick<HomeQuery, 'seo'>['seo'];
// ref: https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
// More advanced: https://www.reddit.com/r/typescript/comments/c1grsp/how_would_i_extract_this_type_from_this_generated/
// and https://blog.mayflower.de/8860-typescript-graphql-codegen-types.html
type SeoType =
  | NonNullable<PostDetailQuery['post']>['seo']
  | NonNullable<CategoryDetailQuery['category']>['seo'];
type MenuItemType = Pick<HomeQuery, 'menuItems'>['menuItems'];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  siteTitle: Maybe<string>;
  rootSeo: RootSeoType;
  seo: SeoType;
  title: Maybe<string>;
  logo: Maybe<string>;
  siteDesc?: Maybe<string>;
  menuItems: MenuItemType;
};
function getRelativeImage(targetUrl: string): string {
  try {
    let image = new URL(targetUrl);
    return image.pathname.slice(27);
  } catch (error) {
    return '';
  }
}
export function removeSubDomain(target?: Maybe<string>) {
  return target?.includes('yuk') ? target?.replace(/yuk./, '') : target;
}
export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let additionalMetaProps: { [key: string]: any } = {};
  let siteUrl = removeSubDomain(props.rootSeo!.schema!.siteUrl!)!;
  if (props.seo?.metaKeywords) {
    additionalMetaProps.additionalMetaTags = [];
    additionalMetaProps.additionalMetaTags.push({
      name: 'keywords',
      content: props.seo?.metaKeywords,
    });
  }
  let imageUrl = `${siteUrl}${
    props.seo?.opengraphImage?.mediaDetails?.file?.slice(7) ||
    props.rootSeo?.openGraph?.frontPage?.image?.mediaDetails?.file?.slice(7) ||
    props.rootSeo?.openGraph?.defaultImage?.mediaDetails?.file?.slice(7) ||
    '/raycast-untitled-32.png'
  }`;
  let title = `${props.title || props.siteTitle || 'Lanjut Koding'} - ${
    props.siteDesc || 'Yuk lanjut kodingnya!'
  }`;
  return (
    <>
      <Head>
        <title>{title}</title>
        {props.rootSeo?.webmaster?.googleVerify && (
          <meta
            name="google-site-verification"
            content={props.rootSeo.webmaster.googleVerify}
          />
        )}
      </Head>
      <NextSeo
        defaultTitle="Lanjutkoding.com - Yuk lanjut kodingnya!"
        title={title}
        description={
          props.seo?.metaDesc ||
          props.siteDesc ||
          props.seo?.opengraphDescription ||
          props.rootSeo?.openGraph?.frontPage?.description ||
          'Yuk lanjut kodingnya!'
        }
        canonical={
          removeSubDomain(props.seo?.canonical) ||
          process.env.NEXT_PUBLIC_SITE_URL
        }
        openGraph={{
          url:
            removeSubDomain(props.seo?.opengraphUrl) ||
            process.env.NEXT_PUBLIC_SITE_URL,
          title:
            props.seo?.opengraphTitle ||
            props.rootSeo?.openGraph?.frontPage?.title ||
            props.siteTitle ||
            'Lanjut Koding',
          description:
            props.seo?.opengraphDescription ||
            props.rootSeo?.openGraph?.frontPage?.description ||
            'Yuk lanjut kodingnya!',
          images: [
            {
              url: imageUrl,
              alt:
                props.seo?.opengraphImage?.altText ||
                props.rootSeo?.openGraph?.frontPage?.image?.altText ||
                undefined,
            },
          ],
          site_name:
            props.seo?.opengraphSiteName ||
            props.rootSeo?.openGraph?.frontPage?.title ||
            props.rootSeo?.schema?.siteName ||
            'lanjutkoding.com',
          type: props.seo?.opengraphType ?? undefined,
          article: {
            authors: [props.seo?.opengraphAuthor || 'Abdul Fattah Ikhsan'],
            modifiedTime: props.seo?.opengraphModifiedTime ?? '',
            publishedTime: props.seo?.opengraphPublishedTime ?? '',
          },
          locale:
            props.rootSeo?.schema?.inLanguage ?? process.env.NEXT_PUBLIC_LOCALE,
        }}
        twitter={{
          site: props.rootSeo?.social?.twitter?.username ?? '@houseofcoder1',
          cardType:
            props.rootSeo?.social?.twitter?.cardType ?? 'summary_large_image',
        }}
        nofollow={
          props.seo?.metaRobotsNofollow != null &&
          props.seo?.metaRobotsNofollow !== 'follow'
        }
        noindex={
          props.seo?.metaRobotsNoindex != null &&
          props.seo.metaRobotsNoindex !== 'index'
        }
        {...additionalMetaProps}
      />
      {props.seo && (
        <ArticleJsonLd
          url={removeSubDomain(props.seo.opengraphUrl!)!}
          title={props.seo.title!}
          images={[imageUrl]}
          datePublished={props.seo.opengraphPublishedTime ?? ''}
          dateModified={props.seo.opengraphModifiedTime ?? ''}
          authorName={[props.seo.opengraphAuthor || 'Abdul Fattah Ikhsan']}
          publisherName={props.seo.opengraphPublisher || 'Abdul Fattah Ikhsan'}
          publisherLogo={process.env.NEXT_PUBLIC_DEFAULT_GRAVATAR ?? ''}
          description={
            (props.seo.metaDesc || props.seo.opengraphDescription) ?? ''
          }
        />
      )}
      {props.seo && props.seo.breadcrumbs?.length && (
        <BreadcrumbJsonLd
          itemListElements={props.seo.breadcrumbs.map((breadcrumb, index) => ({
            position: index + 1,
            name: breadcrumb?.text ?? '',
            item: removeSubDomain(breadcrumb?.url) ?? '',
          }))}
        />
      )}
      {props.rootSeo && (
        <SiteLinksSearchBoxJsonLd
          url={siteUrl}
          potentialActions={[
            {
              target: `${siteUrl}/search?q`,
              queryInput: 'search_term_string',
            },
          ]}
        />
      )}
      {props.rootSeo?.schema && (
        <SocialProfileJsonLd
          type={
            props.rootSeo.schema.companyOrPerson &&
            props.rootSeo.schema.companyOrPerson === 'company'
              ? 'Organization'
              : 'Person'
          }
          name={
            props.rootSeo.schema.companyOrPerson &&
            props.rootSeo.schema.companyOrPerson === 'company'
              ? props.rootSeo.schema.companyName ?? ''
              : props.rootSeo.schema.personName ?? ''
          }
          url={
            removeSubDomain(props.rootSeo.schema.siteUrl) ||
            (process.env.NEXT_PUBLIC_SITE_URL as string)
          }
          sameAs={[
            props.rootSeo.social!.facebook!.url!,
            props.rootSeo.social!.instagram!.url!,
            `https://twitter.com/${props.rootSeo.social!.twitter!.username!}`,
          ]}
        />
      )}
      <div className="max-w-screen-xl flex flex-wrap justify-between items-baseline py-2 pl-3 mx-auto">
        <div className="font-bold text-lg">
          <Link href="/">
            <a className="text-gray-800">
              <span className="inline">
                {props.logo && (
                  <Image
                    src={getRelativeImage(props.logo)}
                    layout="intrinsic"
                    width={36}
                    height={36}
                    alt="logo lanjutkoding.com"
                  />
                )}
                <span className="align-text-middle ml-2">
                  {props.siteTitle ?? 'Lanjutkoding.com'}
                </span>
              </span>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center font-extrabold">
            {props.menuItems?.nodes?.map((menu) => {
              return (
                <li className="mr-3" key={menu?.id}>
                  <Link href={menu!.path!}>
                    <a className="text-gray-800 hover:border-b-2 hover:border-primary-500 align-text-middle">
                      {menu?.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
