import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Maybe, MenuItem } from '../lib/graphql';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  siteTitle?: Maybe<string>;
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Header(props: Props) {
  return (
    <>
      <Head>
        <title>{props.siteTitle ?? props.title ?? 'Lanjutkoding.com'}</title>
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
