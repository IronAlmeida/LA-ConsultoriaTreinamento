import Head from "next/head";

export default function Home(){
  return(
    <div>
      <Head>
        <title>LA - Login</title>
        <meta name="robots" content="index/follow"/>
        <meta name="description" content="Lourdes Almeida - Consultoria e Treinamentos"/>
      </Head>
      
      <div className="h-20 w-full bg-red-700">
        <div className="flex items-center justify-between w-5/6 h-full m-auto">
          <div className="w-16 h-16 bg-green-200">
            <img src="../imgs/LA-Logo.svg"/>
          </div>
    
          <div className="w-36 h-16 bg-yellow-300">
            MENU AQUI
          </div>
        </div>
      </div>

    </div>
  );
};


