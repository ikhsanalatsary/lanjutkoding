import { InferGetStaticPropsType } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { AboutDocument, AboutQuery } from '../lib/graphql';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '../components/Icon';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function About({
  about,
  header,
  menuItems,
  rootSeo,
  footer,
}: Props) {
  const url = encodeURI(
    about?.link ?? process.env.NEXT_PUBLIC_SITE_URL! + 'about'
  );
  const shareText = encodeURI(about!.title!);
  const facebookShareUrl = `https://facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet/?text=${shareText}&url=${url}`;
  const linkedInShareUrl =
    'https://www.linkedin.com/shareArticle?mini=true&url=' +
    url +
    '&title=' +
    shareText +
    '&summary=' +
    shareText +
    '&source=' +
    url;
  return (
    <>
      <Header
        siteTitle={header?.siteTitle}
        title={about!.title}
        logo={header?.siteLogoUrl}
        menuItems={menuItems}
        seo={about?.seo}
        rootSeo={rootSeo}
      />
      <header className="max-w-screen-xl text-center pt-8 pb-8 px-3 mx-auto">
        <h1 className="text-4xl text-gray-800 font-semibold">{about!.title}</h1>
      </header>
      <div className="w-full">
        <div className="max-w-screen-xl py-12 mx-auto flex flex-wrap justify-center">
          <div className="bg-white rounded-lg shadow-lg px-4 sm:px-16 py-8">
            <div className="mt-2 flex flex-wrap justify-end">
              <div className="block">
                <p className="text-left text-sm pb-2 ml-1">Bagikan: </p>
                <div className="flex flex-wrap pb-4">
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent px-2 pt-2 pb-2 cursor-pointer hover:bg-blue-200"
                  >
                    <TwitterIcon />
                  </a>
                  <a
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
            <article
              className="text-gray-800 prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: about!.content! }}
            />
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

export const getStaticProps = async () => {
  let client = initializeApollo();
  let result = await client.query<AboutQuery>({
    query: AboutDocument,
  });
  return {
    props: {
      about: result.data.pages!.nodes![0],
      header: result.data.getHeader,
      menuItems: result.data.menuItems,
      rootSeo: result.data.seo,
      footer: result.data.getFooter,
    },
  };
};
