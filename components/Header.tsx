import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { HomeQuery, Maybe, MediaItem, PostTypeSeo } from '../lib/graphql';

type RootSeoType = Pick<HomeQuery, 'seo'>['seo'];
type SeoType = Maybe<
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
      opengraphImage: Maybe<
        { __typename?: 'MediaItem' } & Pick<
          MediaItem,
          'sourceUrl' | 'title' | 'uri' | 'altText'
        >
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
export function Header(props: Props) {
  let additionalMetaProps: { [key: string]: any } = {};
  if (props.seo?.metaKeywords) {
    additionalMetaProps.additionalMetaTags = [];
    additionalMetaProps.additionalMetaTags.push({
      name: 'keywords',
      content: props.seo?.metaKeywords,
    });
  }
  return (
    <>
      {/* <Head> */}
      <NextSeo
        defaultTitle={'Lanjutkoding.com - Yuk lanjut kodingnya!'}
        title={`${props.siteTitle ?? props.title ?? 'Lanjutkoding.com'} - ${
          props.siteDesc ?? 'Yuk lanjut kodingnya!'
        }`}
        description={
          props.seo?.metaDesc ?? props.siteDesc ?? 'Yuk lanjut kodingnya!'
        }
        canonical={props.seo?.canonical ?? process.env.NEXT_PUBLIC_SITE_URL}
        openGraph={{
          url: props.seo?.opengraphUrl ?? process.env.NEXT_PUBLIC_SITE_URL,
          title:
            props.seo?.opengraphTitle ??
            props.rootSeo?.openGraph?.frontPage?.title ??
            props.siteTitle ??
            'Lanjutkoding.com',
          description:
            props.seo?.opengraphDescription ??
            props.rootSeo?.openGraph?.frontPage?.description ??
            'Yuk lanjut kodingnya!',
          images: [
            {
              url:
                props.seo?.opengraphImage?.sourceUrl ??
                props.rootSeo?.openGraph?.frontPage?.image?.uri ??
                '/raycast-untitled-32.png',
              alt:
                props.seo?.opengraphImage?.altText ??
                props.rootSeo?.openGraph?.frontPage?.image?.altText ??
                undefined,
            },
          ],
          site_name:
            props.seo?.opengraphSiteName ??
            props.rootSeo?.openGraph?.frontPage?.title ??
            props.siteTitle ??
            'lanjutkoding.com',
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
      {/* <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="368" /> */}
      {/* </Head> */}
      <div className="max-w-screen-xl flex flex-wrap justify-between items-baseline py-2 pl-3 mx-auto">
        <div className="font-bold text-lg">
          <Link href="/">
            <a className="text-gray-800">
              <span className="inline">
                {props.logo && (
                  <Image
                    src={props.logo}
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
