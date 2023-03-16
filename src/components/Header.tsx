/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo, SiteLinksSearchBoxJsonLd, SocialProfileJsonLd } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { CategoryDetailQuery, HomeQuery, Maybe, MediaDetails, PostDetailQuery } from '../lib/graphql';

type RootSeoType = Pick<HomeQuery, 'seo'>['seo'];
// ref: https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
// More advanced: https://www.reddit.com/r/typescript/comments/c1grsp/how_would_i_extract_this_type_from_this_generated/
// and https://blog.mayflower.de/8860-typescript-graphql-codegen-types.html
type SeoType = NonNullable<PostDetailQuery['post']>['seo'] | NonNullable<CategoryDetailQuery['category']>['seo'];
type MenuItemType = Pick<HomeQuery, 'menuItems'>['menuItems'];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = Partial<{
  siteTitle: Maybe<string>;
  rootSeo: RootSeoType;
  seo: SeoType;
  title: Maybe<string>;
  logo: Maybe<string>;
  siteDesc?: Maybe<string>;
  menuItems: MenuItemType;
}>;
const defaultAuthor = 'Abdul Fattah Ikhsan';
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
export function Header({ siteTitle, rootSeo, seo, title: pageTitle, logo, siteDesc, menuItems }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let additionalMetaProps: { [key: string]: any } = {};
  let siteUrl = removeSubDomain(rootSeo?.schema?.siteUrl) ?? '';
  if (seo?.metaKeywords) {
    additionalMetaProps.additionalMetaTags = [];
    additionalMetaProps.additionalMetaTags.push({
      name: 'keywords',
      content: seo?.metaKeywords,
    });
  }
  const opengraphImage =
    seo?.opengraphImage ?? rootSeo?.openGraph?.frontPage?.image ?? rootSeo?.openGraph?.defaultImage ?? ({} as { mediaDetails: Maybe<MediaDetails> });
  const imageUrl = `${siteUrl}${opengraphImage.mediaDetails?.file?.slice(7) || '/raycast-untitled-32.png'}`;
  let title = `${pageTitle || siteTitle} - ${siteDesc}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        {rootSeo?.webmaster?.googleVerify && <meta name="google-site-verification" content={rootSeo.webmaster.googleVerify} />}
      </Head>
      <NextSeo
        defaultTitle="Lanjutkoding.com - Yuk lanjut kodingnya!"
        title={title}
        description={seo?.metaDesc || siteDesc || seo?.opengraphDescription || rootSeo?.openGraph?.frontPage?.description || 'Yuk lanjut kodingnya!'}
        canonical={removeSubDomain(seo?.canonical) || process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: removeSubDomain(seo?.opengraphUrl) || process.env.NEXT_PUBLIC_SITE_URL,
          title: seo?.opengraphTitle || rootSeo?.openGraph?.frontPage?.title || siteTitle || 'Lanjut Koding',
          description: seo?.opengraphDescription || rootSeo?.openGraph?.frontPage?.description || 'Yuk lanjut kodingnya!',
          images: [
            {
              url: imageUrl,
              alt: seo?.opengraphImage?.altText || rootSeo?.openGraph?.frontPage?.image?.altText || undefined,
            },
          ],
          site_name: seo?.opengraphSiteName || rootSeo?.openGraph?.frontPage?.title || rootSeo?.schema?.siteName || 'lanjutkoding.com',
          type: seo?.opengraphType ?? undefined,
          article: {
            authors: [seo?.opengraphAuthor || defaultAuthor],
            modifiedTime: seo?.opengraphModifiedTime ?? '',
            publishedTime: seo?.opengraphPublishedTime ?? '',
          },
          locale: rootSeo?.schema?.inLanguage ?? process.env.NEXT_PUBLIC_LOCALE,
        }}
        twitter={{
          site: rootSeo?.social?.twitter?.username ?? '@houseofcoder1',
          cardType: rootSeo?.social?.twitter?.cardType ?? 'summary_large_image',
        }}
        nofollow={seo?.metaRobotsNofollow != null && seo?.metaRobotsNofollow !== 'follow'}
        noindex={seo?.metaRobotsNoindex != null && seo.metaRobotsNoindex !== 'index'}
        {...additionalMetaProps}
      />
      {seo && <HeaderJsonLd imageUrl={imageUrl} {...seo} />}
      {rootSeo && <RootSeo siteUrl={siteUrl} {...rootSeo} />}
      <div className="max-w-screen-xl flex flex-wrap justify-between items-baseline py-2 pl-3 mx-auto">
        <div className="font-bold text-lg">
          <Link href="/">
            <a className="text-gray-800">
              <span className="inline">
                {logo && <Image src={getRelativeImage(logo)} layout="intrinsic" width={36} height={36} alt="logo lanjutkoding.com" />}
                <span className="align-text-middle ml-2" translate="no">
                  {siteTitle ?? 'Lanjutkoding.com'}
                </span>
              </span>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center font-extrabold">
            {menuItems?.nodes?.map((menu) => {
              return (
                <li className="mr-3" key={menu?.id}>
                  <Link href={menu!.path!}>
                    <a className="text-gray-800 hover:border-b-2 hover:border-primary-500 align-text-middle">{menu?.label}</a>
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
Header.defaultProps = {
  siteTitle: 'Lanjut Koding',
  siteDesc: 'Yuk lanjut kodingnya!',
};

type JsonLdProps = Partial<NonNullable<SeoType>> & {
  imageUrl: string;
  publisherLogo?: string;
  breadcrumbs: Pick<NonNullable<SeoType>, 'breadcrumbs'>['breadcrumbs'];
};

function HeaderJsonLd(props: JsonLdProps) {
  return (
    <>
      <ArticleJsonLd
        url={removeSubDomain(props.opengraphUrl!)!}
        title={props.title!}
        images={[props.imageUrl]}
        datePublished={props.opengraphPublishedTime!}
        dateModified={props.opengraphModifiedTime!}
        authorName={[props.opengraphAuthor]}
        publisherName={props.opengraphPublisher!}
        publisherLogo={props.publisherLogo!}
        description={props.metaDesc || props.opengraphDescription!}
      />
      {props && props.breadcrumbs?.length && (
        <BreadcrumbJsonLd
          itemListElements={props.breadcrumbs.map((breadcrumb, index) => ({
            position: index + 1,
            name: breadcrumb?.text ?? '',
            item: removeSubDomain(breadcrumb?.url) ?? '',
          }))}
        />
      )}
    </>
  );
}

HeaderJsonLd.defaultProps = {
  opengraphAuthor: defaultAuthor,
  opengraphPublisher: defaultAuthor,
  metaDesc: '',
  opengraphDescription: '',
  opengraphPublishedTime: '',
  opengraphModifiedTime: '',
  publisherLogo: process.env.NEXT_PUBLIC_DEFAULT_GRAVATAR ?? '',
};

function RootSeo(props: Partial<NonNullable<RootSeoType>> & { siteUrl: string }) {
  return (
    <>
      <SiteLinksSearchBoxJsonLd
        url={props.siteUrl}
        potentialActions={[
          {
            target: `${props.siteUrl}/search?q`,
            queryInput: 'search_term_string',
          },
        ]}
      />
      {props.schema && (
        <SocialProfileJsonLd
          type={props.schema.companyOrPerson && props.schema.companyOrPerson === 'company' ? 'Organization' : 'Person'}
          name={
            props.schema.companyOrPerson && props.schema.companyOrPerson === 'company'
              ? props.schema.companyName ?? ''
              : props.schema.personName ?? ''
          }
          url={removeSubDomain(props.schema.siteUrl) || (process.env.NEXT_PUBLIC_SITE_URL as string)}
          sameAs={[props.social!.facebook!.url!, props.social!.instagram!.url!, `https://twitter.com/${props.social!.twitter!.username!}`]}
        />
      )}
    </>
  );
}
