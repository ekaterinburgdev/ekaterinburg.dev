import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://ekaterinburg.dev/";
  const siteDescription = "我们正在创建一个城市的数字生态系统 🚀";
  const ogTitle = "ekaterinburg.dev";
  const ogImage = `${siteUrl}opengraph/cover.jpg`;

  return (
    <Html lang="cn">
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(90436467, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true
              });
            `,
          }}
        />

        <script async src="https://tally.so/widgets/embed.js"></script>
      </body>
    </Html>
  );
}
