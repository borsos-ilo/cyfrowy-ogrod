import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Inconsolata&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-5SRHFCRBSY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5SRHFCRBSY');
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}