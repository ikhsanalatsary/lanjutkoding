import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { gql } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import { Maybe, Settings } from '../lib/graphql';

type GeneralLanguageType = {
  allSettings: Maybe<Pick<Settings, 'generalSettingsLanguage'>>;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    let query = gql`
      query GeneralLanguageSettings {
        allSettings {
          generalSettingsLanguage
        }
      }
    `;
    let client = initializeApollo();
    let result = await client.query<GeneralLanguageType>({ query });
    return {
      ...initialProps,
      locale: result.data.allSettings?.generalSettingsLanguage?.length
        ? result.data.allSettings.generalSettingsLanguage.replace('_', '-')
        : 'en-US',
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          {process.env.NODE_ENV === 'production' && (
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "15a270292cfc4f5684025d07ab4fc1ab"}'
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
