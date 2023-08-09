import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale} className='scroll-smooth'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap" rel="stylesheet" />

        </Head>
        <body className="bg-lightgray text-tan relative" >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
