import Link from 'next/link';
import Image from 'next/image';
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  NextSeo,
  SiteLinksSearchBoxJsonLd,
  SocialProfileJsonLd,
} from 'next-seo';
import {
  HomeQuery,
  Maybe,
  MediaDetails,
  MediaItem,
  PostTypeSeo,
  SeoPostTypeBreadcrumbs,
  TaxonomySeo,
} from '../lib/graphql';

type RootSeoType = Pick<HomeQuery, 'seo'>['seo'];
type SeoType =
  | Maybe<
      { __typename?: 'PostTypeSEO' } & Pick<
        PostTypeSeo,
        | 'canonical'
        | 'metaKeywords'
        | 'metaDesc'
        | 'metaRobotsNoindex'
        | 'metaRobotsNofollow'
        | 'opengraphAuthor'
        | 'opengraphDescription'
        | 'opengraphModifiedTime'
        | 'opengraphPublishedTime'
        | 'opengraphPublisher'
        | 'opengraphSiteName'
        | 'opengraphTitle'
        | 'opengraphType'
        | 'opengraphUrl'
        | 'readingTime'
        | 'schemaDetails'
        | 'title'
        | 'twitterDescription'
        | 'twitterTitle'
        | 'focuskw'
        | 'cornerstone'
      > & {
          breadcrumbs: Maybe<
            Array<
              Maybe<
                { __typename?: 'SEOPostTypeBreadcrumbs' } & Pick<
                  SeoPostTypeBreadcrumbs,
                  'text' | 'url'
                >
              >
            >
          >;
          opengraphImage: Maybe<
            { __typename?: 'MediaItem' } & Pick<
              MediaItem,
              'sourceUrl' | 'title' | 'uri' | 'altText'
            > & {
                mediaDetails: Maybe<
                  { __typename?: 'MediaDetails' } & Pick<MediaDetails, 'file'>
                >;
              }
          >;
        }
    >
  | Maybe<
      { __typename?: 'TaxonomySEO' } & Pick<
        TaxonomySeo,
        | 'canonical'
        | 'cornerstone'
        | 'focuskw'
        | 'metaDesc'
        | 'metaRobotsNofollow'
        | 'metaKeywords'
        | 'metaRobotsNoindex'
        | 'opengraphAuthor'
        | 'opengraphDescription'
        | 'opengraphModifiedTime'
        | 'opengraphPublishedTime'
        | 'opengraphPublisher'
        | 'opengraphSiteName'
        | 'opengraphTitle'
        | 'opengraphType'
        | 'opengraphUrl'
        | 'title'
        | 'twitterDescription'
        | 'twitterTitle'
      > & {
          breadcrumbs: Maybe<
            Array<
              Maybe<
                { __typename?: 'SEOPostTypeBreadcrumbs' } & Pick<
                  SeoPostTypeBreadcrumbs,
                  'text' | 'url'
                >
              >
            >
          >;
          opengraphImage: Maybe<
            { __typename?: 'MediaItem' } & Pick<
              MediaItem,
              'sourceUrl' | 'title' | 'uri' | 'altText'
            > & {
                mediaDetails: Maybe<
                  { __typename?: 'MediaDetails' } & Pick<MediaDetails, 'file'>
                >;
              }
          >;
        }
    >;
type MenuItemType = Pick<HomeQuery, 'menuItems'>['menuItems'];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  siteTitle?: Maybe<string>;
  rootSeo?: RootSeoType;
  seo?: SeoType;
  title?: Maybe<string>;
  logo?: Maybe<string>;
  siteDesc?: Maybe<string>;
  menuItems?: MenuItemType;
};
function getRelativeImage(targetUrl: string): string {
  try {
    let image = new URL(targetUrl);
    return image.pathname.slice(27);
  } catch (error) {
    return '';
  }
}
export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let additionalMetaProps: { [key: string]: any } = {};
  if (props.seo?.metaKeywords) {
    additionalMetaProps.additionalMetaTags = [];
    additionalMetaProps.additionalMetaTags.push({
      name: 'keywords',
      content: props.seo?.metaKeywords,
    });
  }
  let imageUrl =
    'https://' +
      props.siteTitle?.toLowerCase() +
      props.seo?.opengraphImage?.mediaDetails?.file?.slice(7) ||
    props.rootSeo?.openGraph?.frontPage?.image?.mediaDetails?.file?.slice(7) ||
    '/raycast-untitled-32.png';
  return (
    <>
      <NextSeo
        defaultTitle="Lanjutkoding.com - Yuk lanjut kodingnya!"
        title={`${props.siteTitle || props.title || 'Lanjutkoding.com'} - ${
          props.siteDesc || 'Yuk lanjut kodingnya!'
        }`}
        description={
          props.seo?.metaDesc || props.siteDesc || 'Yuk lanjut kodingnya!'
        }
        canonical={props.seo?.canonical || process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: props.seo?.opengraphUrl || process.env.NEXT_PUBLIC_SITE_URL,
          title:
            props.seo?.opengraphTitle ||
            props.rootSeo?.openGraph?.frontPage?.title ||
            props.siteTitle ||
            'Lanjutkoding.com',
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
            props.siteTitle ||
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
          url={props.seo.opengraphUrl!}
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
            item: breadcrumb?.url ?? '',
          }))}
        />
      )}
      {props.rootSeo && (
        <SiteLinksSearchBoxJsonLd
          url={'https://' + props.siteTitle?.toLowerCase()}
          potentialActions={[
            {
              target: 'https://' + props.siteTitle?.toLowerCase() + '/search?q',
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
            props.rootSeo.schema.siteUrl &&
            props.rootSeo.schema.siteUrl.includes('yuk')
              ? props.rootSeo.schema.siteUrl.replace(/yuk./, '')
              : (process.env.NEXT_PUBLIC_SITE_URL as string)
          }
          sameAs={[
            props.rootSeo.social!.facebook!.url!,
            props.rootSeo.social!.instagram!.url!,
            'https://twitter.com/' + props.rootSeo.social!.twitter!.username!,
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
                    width={29}
                    height={29}
                  />
                )}
                {/* ideally vertical-align: 0.7rem, but I don't know how to do it in tailwind */}
                <span className="align-top ml-2">
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
                    <a className="text-gray-800 hover:border-b-2 hover:border-primary-500">
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
