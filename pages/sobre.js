import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";

export default function sobre({session}) {

    let logado = false;
    if (session){
        logado = true;
    }

    return (
        <>
            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho email={session} />}
            
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-cover bg-center">
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">Sobre</h2>
               </div>
            </div>

            <section className="w-full p-4 bg-gradient-to-r from-gray-300 to-gray-500">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-2xl text-center sm:text-4xl font-medium text-gray-700 mb-4">Quem é Lourdes Almeida?</h2>

                    <div className="flex flex-wrap justify-between sm:p-4">
                        <div className=" shadow-2xl px-2 pt-2 mb-4 mx-auto">
                            <img className="mt-20" src="lourdes-sobre.png" width="323px" height="402px" />
                        </div>

                        <div className="w-full xl:w-3/5 bg-gradient-to-tl from-gray-700 via-gray-800 to-gray-900 rounded-xl">
                            <p className="text-2xl text-white p-4">
                            Técnica Contábil CRC/SE; Gestora de RH; MBA Legislação Trabalhista e  Direito Previdenciário; Especialista em eSocial, DCTFWEB e Departamento Pessoal; Consultora Trabalhista; Professora e Palestrante; Vivência profissional de 19 anos na área trabalhista.<br/><br/>
                            Palestrante do 1º Congresso Nacional e eSocial, realizado em São Paulo, no dia 10 de dezembro de 2018.<br/><br/>
                            Palestrante do 1º Congresso Nacional On-line de Departamento Pessoal e eSocial, no período de 10 a 15 de outubro de 2020.
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

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const email = token.email;
        return {
            props: {session: email},
          };
    } catch(err){
        context.res.statusCode = 302;
        return { props: {} };
    };
};