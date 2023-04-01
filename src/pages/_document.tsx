import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://ekaterinburg.dev/";
  const siteDescription = "🤫";
  const ogTitle = "Код Екатеринбурга";
  const ogImage = `${siteUrl}og-preview.jpg`;

  return (
    <Html lang="ru">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={siteDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={ogImage} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="dns-prefetch" href="https://mc.yandex.ru/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
