import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Threads post in seconds."
          />
          <meta property="og:site_name" content="digitalthreadsy.com" />
          <meta
            property="og:description"
            content="Generate your next Threads post in seconds."
          />
          <meta property="og:title" content="Threads post Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Threads post Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Threads post in seconds."
          />
          <meta
            property="og:image"
            content="https://digitalthreadsy.com/screenshot.png"
          />
          <meta
            name="twitter:image"
            content="https://digitalthreadsy.com/screenshot.png"
          />
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
