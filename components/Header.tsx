import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Maybe, MenuItem, SeoConfig } from '../lib/graphql';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  siteTitle?: Maybe<string>;
  siteDesc?: Maybe<string>;
  seo?: SeoConfig;
  title?: Maybe<string>;
  logo?: Maybe<string>;
  menuItems?: Maybe<
    Array<
      Maybe<
        { __typename?: 'MenuItem' } & Pick<MenuItem, 'id' | 'label' | 'path'>
      >
    >
  >;
};
export function Header(props: Props) {
  return (
    <>
      <Head>
        <NextSeo
          title={`${props.siteTitle ?? props.title ?? 'Lanjutkoding.com'} - ${
            props.siteDesc ?? 'Yuk lanjut kodingnya!'
          }`}
          description={props.siteDesc ?? 'Yuk lanjut kodingnya!'}
          canonical={process.env.NEXT_PUBLIC_SITE_URL}
          openGraph={{
            url: process.env.NEXT_PUBLIC_SITE_URL,
            title: props.siteTitle ?? 'Lanjutkoding.com',
            description:
              props.seo?.openGraph?.frontPage?.description ??
              'Yuk lanjut kodingnya!',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
            site_name: props.siteTitle ?? 'lanjutkoding.com',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <title>{props.siteTitle ?? props.title ?? 'Lanjutkoding.com'}</title>
        <meta name="description" content="Yuk lanjut kodingnya!" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="http://yuk.lanjutkoding.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lanjutkoding.com" />
        <meta property="og:description" content="Yuk lanjut kodingnya!" />
        <meta property="og:url" content="http://yuk.lanjutkoding.com/" />
        <meta property="og:site_name" content="lanjutkoding.com" />
        <meta
          property="og:image"
          content="http://yuk.lanjutkoding.com/wp-content/uploads/2021/03/raycast-untitled-32.png"
        />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="368" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@houseofcoder1" />
      </Head>
      <div className="max-w-screen-xl flex flex-wrap justify-between items-baseline py-2 pl-3 mx-auto">
        <div className="font-bold text-lg">
          <Link href="/">
            <a className="text-gray-800">
              <span className="inline">
                {props.logo && (
                  <Image
                    className="align-bottom"
                    src={props.logo}
                    layout="intrinsic"
                    width={36}
                    height={36}
                  />
                )}
                <span className="align-top ml-2">
                  {props.siteTitle ?? 'Lanjutkoding.com'}
                </span>
              </span>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center font-extrabold">
            {props.menuItems?.map((menu) => {
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
