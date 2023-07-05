import Head from "next/head";

const metaData = {
  title: "Wingie-Enuygun Study Case",
  description: "Wingie-Enuygun Study Case",
};

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaData.description} />
        <meta name="og:title" content={metaData.title} />
      </Head>
      <main>{children}</main>
    </div>
  );
}