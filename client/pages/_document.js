import { Html, Head, Main, NextScript } from 'next/document'

const metaData = {
  title: "Wingie-Enuygun Study Case",
  description: "Wingie-Enuygun Study Case",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaData.description} />
        <meta name="og:title" content={metaData.title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
