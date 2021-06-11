import Head from "next/head";
import HeaderHome from "../Components/utils/headerHome";
import Cabecalho from "../Components/utils/cabecalho";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import SliderMain from "../Components/utils/sliderMain";
import SliderClients from "../Components/utils/sliderClients";
import {BsBullseye} from "react-icons/bs";
import {AiFillEye} from "react-icons/ai";
import {FaHandshake} from "react-icons/fa";
import { useAuth } from "../firebase/auth";
import Link from "next/link";

export default function home() {

    function cookiesAcept(){
        const add = document.getElementById('acept')
        add.classList.add('hide');
      }

    const { user } = useAuth();

    let logado = false;
    if (user){
        logado = true;
    }

    return (
        <>
            <Head>
                <title>LA - Consultoria e Treinamento</title>
                <meta name="robots" content="index/follow"/>
                <meta name="description" content="Lourdes Almeida - Consultoria e Treinamento"/>
            </Head>

            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho email={user.email} />}
            
            <SliderMain />

            <section className="w-full sm:p-4">
                <div className="bg-gray-300 w-full lg:w-3/4 lg:rounded-2xl m-auto p-4">
                    <div>
                        <h2 className="text-gray-900 text-4xl font-medium text-center my-2">A empresa</h2>
                        <p className="text-gray-900 text-xl font-normal text-center my-4">A LA Consultoria e Treinamento foi fundada em 2018 com o objetivo de ajudar as empresas e profissionais do Departamento Pessoal a lidar com as demandas da área, além de capacitar novos profissionais e atualizar aqueles que já têm experiência com as mudanças que ocorrem ao longo do tempo.</p>
                    </div>
                </div>
            </section>
            
            <section className="w-full p-4">
                <div className="w-full lg:w-3/4 m-auto">
                    <div className="flex justify-between flex-wrap">
                        <div className="w-full lg:w-2/5 sm:mr-2 rounded-xl flex flex-col items-center text-center p-4">
                            <BsBullseye className="text-center text-6xl text-red-700" />
                            <div className="w-full">
                                <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Missão</h2>
                                <p className="text-gray-900 text-xl font-normal text-center my-4">Oferecer capacitação  profissional na área de  Departamento Pessoal
                                com treinamentos e orientação, com ênfase na  resolução de problemas  corporativos.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 sm:mr-2 rounded-xl flex flex-col items-center text-center p-4">
                            <AiFillEye className="text-center text-6xl text-red-700" />
                            <div className="w-full">
                                <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Visão</h2>
                                <p className="text-gray-900 text-xl font-normal text-center my-4">Sermos autoridade na  prestação de serviços para  as área de Departamento  Pessoal, oferecendo  resultados para  profissionais e resultado  para empresas.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 m-auto rounded-xl  flex flex-col items-center text-center p-4">
                            <FaHandshake className="text-center text-6xl text-red-700" />
                            <div className="w-full">
                                <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Valores</h2>
                                <p className="text-gray-900 text-xl font-normal text-center my-4">Gratidão, integridade,  inteligência, inspiração,  flexibilidade, valorização do  ser humano,  responsabilidade social e interesse pelo  conhecimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <SliderClients />

            <section className="w-full p-4">

                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-gray-900 text-4xl font-medium text-center my-2">Depoimentos</h2>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto mt-6 flex flex-col justify-between bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl p-4">
                        <div>
                            <p className="text-gray-900 text-xl">"Lourdes é uma profissional altamente capacitada, está sempre atualizada, e tem uma didática incrível. Nos responde com atenção, agilidade e competência. Ter a consultoria da Lourdes em nosso escritório faz toda a diferença."</p>
                        </div>
                        <div className="mt-10">
                            <h4 className="text-lg text-gray-900">Alice Sousa</h4>
                            <p className="text-base text-gray-700">Giro Contabilidade</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto mt-6 flex flex-col justify-between bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl p-4">
                        <div>
                            <p className="text-gray-900 text-xl">"Lourdes Almeida excelente profissional com uma bagagem riquíssima na área de DP e E-social, sua forma de transmitir o conteúdo bastante clara e objetiva. Super atenciosa e dedicada e está sempre disponível par nos ajudar."</p>
                        </div>
                        <div className="mt-10">
                            <h4 className="text-lg text-gray-900">Juceli</h4>
                            <p className="text-base text-gray-700">MB Motos</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto mt-6 flex flex-col justify-between bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl p-4">
                        <div className="m-auto">
                            <p className="text-gray-900 text-xl">"Nunca tinha trabalhado de home office e o grupo de DP da Lourdes foi fundamental para ter segurança no que estava fazendo. Ela sempre esclarecia a legislação e isso nos deixava mais tranquilos. Além dos cursos onde aprendemos de verdade e sempre na prática."</p>
                        </div>
                        <div className="mt-10">
                            <h4 className="text-lg text-gray-900">Sheila Santos</h4>
                            <p className="text-base text-gray-700">Aluna da LA</p>
                        </div>
                    </div>
                </div>
            </section>

            <Widget />

            <Rodape />

            <div className="fixed flex flex-col w-3/4 lg:w-1/2 xl:w-1/4 bottom-2 left-2 bg-gray-900 p-2 rounded-xl"> 
                <div className="p-2"><h2 className="text-base text-white">Nosso site utiliza cookies para melhorar a navegação, ao aceitar você estará de acordo com os nossos termos de política de privacidade e cookies.</h2></div>
                <div className="flex">
                    <div className="p-2"><Link href="/politica-de-privacidade"><button className="bg-white p-2 focus:outline-none">Saiba mais</button></Link></div>
                    <div className="p-2"><button className="bg-red-700 text-white p-2 focus:outline-none" onClick={cookiesAcept}>Ok, entendi!</button></div>
                </div>
            </div>
        </>
    );
};