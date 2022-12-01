import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href={`${process.env.RexfontAPI}/font/all.css`} />
        <link rel="stylesheet" href={`/font/brands.min.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}