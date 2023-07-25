import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Find the perfect social media handle for your lifestyle, brand, or just for you! Our lightning speed tool will  notify you as soon as your perfect handle becomes available!"
          />
          <meta property="og:site_name" content="HandleOne" />
          <meta
            property="og:description"
            content="Find the perfect social media handle for your lifestyle, brand, or just for you! Our lightning speed tool will  notify you as soon as your perfect handle becomes available!"
          />
          <meta
            property="og:title"
            content="Social Media handler finder for Threads, Instagram, and many more!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Social Media handler finder for Threads, Instagram, and many more!"
          />
          <meta
            name="twitter:description"
            content="Find the perfect social media handle for your lifestyle, brand, or just for you! Our lightning speed tool will  notify you as soon as your perfect handle becomes available!"
          />
          <meta
            property="og:image"
            content="https://handle-one.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://handle-one.vercel.app/og-image.png"
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
