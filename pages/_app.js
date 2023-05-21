import "../styles/globals.css";
import "../styles/slider.css";
import Head from "next/head";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
    )
}

export default MyApp
