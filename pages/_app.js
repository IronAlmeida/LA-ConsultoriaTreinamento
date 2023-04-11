import "../styles/globals.css";
import "../styles/slider.css";
import Head from "next/head";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
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
