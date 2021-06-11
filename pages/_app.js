import '../styles/globals.css';
import "../styles/slider.css";
import {AuthProvider} from "../firebase/auth";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {

  function cookiesAcept(){
    const add = document.getElementById('acept')
    add.classList.add('hide');
  }

  return ( 
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
        <div className="fixed flex flex-col w-3/4 lg:w-1/2 xl:w-1/4 bottom-2 left-2 bg-gray-900 p-2 rounded-xl"> 
                <div className="p-2"><h2 className="text-base text-white">Nosso site utiliza cookies para melhorar a navegação, ao aceitar você estará de acordo com os nossos termos de política de privacidade e cookies.</h2></div>
                <div className="flex">
                    <div className="p-2"><Link href="/politica-de-privacidade"><button className="bg-white p-2 focus:outline-none">Saiba mais</button></Link></div>
                    <div className="p-2"><button className="bg-red-700 text-white p-2 focus:outline-none" onClick={cookiesAcept}>Ok, entendi!</button></div>
                </div>
            </div>
      </AuthProvider>
    </>
    )
}

export default MyApp
