import "@/styles/globals.css";
import "../../public/fonts/index.css";
import "../../public/font-jetbrains-mono/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
