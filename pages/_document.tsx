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
      <body className="dark:bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
