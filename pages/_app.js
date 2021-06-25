import "../styles/globals.css";
import "../styles/slider.css";
import "../styles/dp.css";
import {AuthProvider} from "../firebase/auth";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        {/*
        <meta name="adopt-website-id" content="b6597f8e-52c9-421f-8f11-55fe4a1dfcc9" />
        <script src="//tag.goadopt.io/injector.js?website_code=b6597f8e-52c9-421f-8f11-55fe4a1dfcc9" className="adopt-injector"></script>
        <script>window.adoptHideAfterConsent = true;</script>

        REMOVE COMENTÁRIO APÓS LEVAR PARA A MAIN
         */}
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
    )
}

export default MyApp
