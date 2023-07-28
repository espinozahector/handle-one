import Head from "next/head";

const defaultTitle = "Threads Handle Notifier";

interface InterfaceHeadTitle {
  title?: string | null;
}

const HeadTitle = ({ title = null }: InterfaceHeadTitle) => {
  const pageTitle = title ? title : defaultTitle;

  return (
    <Head>
      <title>HandleOne - {pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTitle;
