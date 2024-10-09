import "../styles/globals.css";
import "../styles/slider.css";
import "../styles/dp.css";
import { AuthProvider } from "../firebase/auth";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <meta
          name="adopt-website-id"
          content="b6597f8e-52c9-421f-8f11-55fe4a1dfcc9"
        />
      </Head>

      <Script
        src="//tag.goadopt.io/injector.js?website_code=b6597f8e-52c9-421f-8f11-55fe4a1dfcc9"
        className="adopt-injector"
      ></Script>
      <Script>window.adoptHideAfterConsent = true;</Script>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
