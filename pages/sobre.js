import Head from "next/head";
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import {useAuth} from "../firebase/auth";

export default function sobre() {

    const { user } = useAuth();

    let logado = false;
    if (user){
        logado = true;
    }

    return (
        <>
            <Head>
                <title>LA - Sobre</title>
            </Head>

            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho user={user.uid} />}
        
            <div className="w-full bg-gradient-to-l from-slate-700 via-slate-800 to-slate-700">
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">Sobre</h2>
               </div>
            </div>

            <section className="w-full p-4 bg-gray-300">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-2xl text-center sm:text-4xl font-medium my-4 text-slate-900">Quem é Lourdes Almeida?</h2>

                    <div className="flex flex-wrap sm:pb-4">
                        <div className="px-2 pt-2 mx-auto">
                            <img className="mt-6" src="lourdes-sobre.webp" width="323px" height="402px" />
                        </div>

                        <div className="w-full bg-slate-700 rounded-xl">
                            <p className="text-2xl text-white p-4 text-left">
                            Técnica Contábil CRC/SE e Gestora de RH;<br/> MBA Legislação Trabalhista e Direito Previdenciário;<br/>  Especialista em eSocial, DCTFWEB e Departamento Pessoal;<br/> Consultora Trabalhista, Professora e Palestrante;<br/> Vivência profissional de 19 anos na área trabalhista.<br/><br/>
                            Palestrante do 1º Congresso Nacional e eSocial, realizado em São Paulo.<br/><br/>
                            Palestrante do 1º Congresso Nacional On-line de Departamento Pessoal e eSocial.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Widget />

            <Rodape />
        </>
    );
};