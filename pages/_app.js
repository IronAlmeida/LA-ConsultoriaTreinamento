import '../styles/globals.css';
import "../styles/slider.css";
import {AuthProvider} from "../firebase/auth";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
    )
}

export default MyApp
