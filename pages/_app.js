import "../styles/globals.css";
import "../styles/slider.css";
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <style jsx global>{`
        body {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <Component {...pageProps} />
    </>
    )
}

export default MyApp
