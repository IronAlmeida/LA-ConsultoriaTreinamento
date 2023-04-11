import "../styles/globals.css";
import "../styles/slider.css";
import Head from "next/head";
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <div className={raleway.className}>
        <Component {...pageProps} />
      </div>
    </>
    )
}

export default MyApp
