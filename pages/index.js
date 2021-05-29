import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import SliderMain from "../Components/utils/sliderMain";
import SliderClients from "../Components/utils/sliderClients";
import {BsBullseye} from "react-icons/bs";
import {AiFillEye} from "react-icons/ai";
import {FaHandshake} from "react-icons/fa";

export default function homePublic() {

    return (
        <>
            <HeaderHome />
            
            <SliderMain />

            <section className="bg-gray-300 w-full lg:w-3/4 lg:rounded-2xl m-auto mt-2 p-4">
                <div>
                    <h2 className="text-gray-900 text-4xl font-medium text-center my-2">A empresa</h2>
                    <p className="text-gray-900 text-xl font-normal text-center my-4">A LA Consultoria e Treinamento foi fundada em 2018 com o objetivo de ajudar as empresas e profissionais do Departamento Pessoal a lidar com as demandas da área, além de capacitar novos profissionais e atualizar aqueles que já têm experiência com as mudanças que ocorrem ao longo do tempo.</p>
                </div>
            </section>

            <section className="w-full lg:w-3/4 m-auto p-4">
                <div className="flex justify-between flex-wrap">
                    <div className="w-full lg:w-1/4 rounded-xl  flex flex-col items-center text-center p-4">
                        <BsBullseye className="text-center text-6xl text-red-700" />
                        <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Missão</h2>
                        <p className="text-gray-900 text-xl font-normal text-center my-4">Oferecer capacitação  profissional na área de  Departamento Pessoal
                        com treinamentos e orientação, com ênfase na  resolução de problemas  corporativos.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/4 rounded-xl flex flex-col items-center text-center p-4">
                        <AiFillEye className="text-center text-6xl text-red-700" />
                        <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Visão</h2>
                        <p className="text-gray-900 text-xl font-normal text-center my-4">Sermos autoridade na  prestação de serviços para  as área de Departamento  Pessoal, oferecendo  resultados para  profissionais e resultado  para empresas.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/4 rounded-xl  flex flex-col items-center text-center p-4">
                        <FaHandshake className="text-center text-6xl text-red-700" />
                        <h2 className="text-gray-900 text-3xl font-medium text-center my-4">Valores</h2>
                        <p className="text-gray-900 text-xl font-normal text-center my-4">Gratidão, integridade,  inteligência, inspiração,  flexibilidade, valorização do  ser humano,  responsabilidade social e interesse pelo  conhecimento.
                        </p>
                    </div>
                </div>
            </section>

            <SliderClients />

            <Widget />

            <Rodape />
        </>
    );
};