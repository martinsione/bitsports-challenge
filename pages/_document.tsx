import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/inter-var-latin.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
