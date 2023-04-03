import { NextIntlProvider } from "next-intl";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "../../public/fonts/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
