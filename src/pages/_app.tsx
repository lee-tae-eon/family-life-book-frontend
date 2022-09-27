import "../styles/global.css";

import type { AppProps } from "next/app";

import Footer from "components/footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
