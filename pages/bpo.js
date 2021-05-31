import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import SuperForm from "../Components/utils/superForm";
import {GiCardExchange} from "react-icons/gi";
import Cabecalho from "../Components/utils/cabecalho";

export default function Bpo({session}) {

    let logado = false;
    if (session){
        logado = true;
    }

    return (
        <>
            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho email={session} />}

            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-cover bg-center" style={{backgroundImage: 'url(/bpo-bg.webp)'}}>
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">BPO - Terceirização de Departamento Pessoal</h2>
               </div>
            </div>
            
            <section className="w-full p-4 bg-gradient-to-b from-gray-300 to-gray-200">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-gray-900 text-2xl font-medium text-center my-4">O que é BPO?</h2>

                    <div className="flex flex-col items-center">
                        <GiCardExchange className="text-center text-9xl text-red-700"/>
                    </div>

                    <p className="text-gray-900 text-xl text-center my-4"><em>Business Process Outsourcing</em>  é a terceirização de processos de negócios. Esse tipo de terceirização, representa a transferência do Departamento Pessoal para uma empresa especializada na área, com as atividades que envolvem a folha de pagamento, eSocial, GFIP, RAIS, DIRF, entre outras.
                    </p>
                    
                    
                </div>
            </section>

            <section className="bg-gray-200 w-full p-4">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-gray-900 text-2xl sm:text-center font-medium my-8">Porque terceirizar os processos de Departamento Pessoal?</h2>
                    
                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Padronização do Processos (eficiência operacional)</span>
                    </div>
                    
                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Baixo investimento comparado a mão de obra interna e suas qualificações</span> 
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Segurança de dados</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Atualização e capacitação constante.</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Baixa rotatividade e absenteísmo. </span>
                    </div>

                    <div className="flex items-center mt-4">
                    <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Serviços executados por profissionais especificamente treinados.</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Prazo de 48H para execução de atividades.</span>
                    </div>
                </div>
            </section>

            <SuperForm titulo="Solicite seu orçamento" nomeBtn="SOLICITAR ORÇAMENTO" />

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