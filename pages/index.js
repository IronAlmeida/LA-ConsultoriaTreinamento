import Head from "next/head";

export default function Home(){
  return(
    <div>
      <Head>
        <title>LA - Inicial</title>
        <meta name="robots" content="index/follow"/>
        <meta name="description" content="Site sobre Consultoria de RH"/>
      </Head>
      <h1 className="text-5xl text-green-500">Bem Vindo <span className="text-red-300">Iron</span></h1>
    </div>
  );
};