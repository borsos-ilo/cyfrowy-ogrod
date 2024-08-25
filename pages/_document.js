import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Inconsolata&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
