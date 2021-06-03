import Head from "next/head";
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {RiRecordCircleLine} from "react-icons/ri";
import {BsCameraVideo} from "react-icons/bs";
import {useAuth} from "../firebase/auth";


export default function Cursos() { 

    const { user } = useAuth();

    let logado = false;
    if(user){
        logado = true;
    }

    return (
        <>
            <Head>
                <title>LA - Cursos</title>
            </Head>

            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho email={user.email} />}
            
            <div className="w-full bg-gray-800">
                <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                        <h2 className="text-4xl font-light text-white text-center">Cursos</h2>
                </div>
            </div>

            <section className="w-full p-4 bg-gray-300">
                <div className="w-full sm:w-3/4 mx-auto">
                    <p className="text-2xl sm:text-3xl text-gray-900"><HiOutlineDesktopComputer className="inline-block text-red-700"/> Todos os cursos</p>
                    <div className="bg-gray-200 rounded-xl shadow-xl py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center my-7">

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Analista Departamento Pessoal</h1>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">eSocial e DCTFWeb</h1>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Folha de Pagamento e Encargos</h1>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Cálculos Trabalhistas – Rescisões</h1>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Parcelamento de FGTS</h1>
                            </div>
                        </div>

                        
                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Tipos de Jornadas/Horários e Cálculos</h1>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="my-4 p-2">
                                <h1 className="text-gray-800 text-lg font-medium">Declarações: GFIP, RAIS  e DISO.</h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-2xl sm:text-3xl text-gray-900"><RiRecordCircleLine className="text-red-700 inline-block text-2xl" /> Cursos Ao-vivo</p>
                    <div className="bg-gray-200 rounded-xl shadow-xl py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center text-center my-7">

                        {/*CARD 1 */}
                        <div className="flex flex-col m-auto mt-6 items-center justify-between text-center border border-gray-400 shadow">
                            <div>
                                <img className="w-full" width="300px" height="300px" src="/analista-dp.png"/>
                            </div>

                            <div className="w-full border-t-2 border-gray-300">
                                <a href="https://api.whatsapp.com/send?phone=5579999839846" target="_blank" rel="noopener noreferrer"><button className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-center p-4 text-lg text-white focus:outline-none">Mais informações</button></a>
                            </div>
                        </div>
                        {/*END CARD1 */}

                        {/*CARD 2 */}
                        <div className="flex flex-col m-auto mt-6 items-center justify-between text-center border border-gray-400 shadow">
                            <div>
                                <img className="w-full" width="300px" height="300px" src="/eSocial0506.png"/>
                            </div>

                            <div className="w-full border-t-2 border-gray-300">
                                <a href="https://api.whatsapp.com/send?phone=5579999839846" target="_blank" rel="noopener noreferrer"><button className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-center p-4 text-lg text-white focus:outline-none">Mais informações</button></a>
                            </div>
                        </div>
                        {/*END CARD 2 */}
                            
                        <div className="w-full sm:w-4/6 mx-auto mt-12 pl-2">
                            <h1 className="text-3xl text-gray-800 font-medium text-center">Vagas para outros cursos em breve...</h1>
                        </div>

                    </div>
                
                    <p className="text-2xl sm:text-3xl text-gray-900"><BsCameraVideo className="text-red-700 inline-block text-2xl" /> Cursos Gravados</p>
                    <div className="bg-gray-200 rounded-xl shadow-xl py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center text-center my-7">
                        <div className="flex m-auto">
                            <div className="w-full p-4">
                                <h1 className="text-3xl text-gray-800 font-medium text-center">Cursos sendo gravados com maior carinho e dedicação. <br/>Em breve serão lançados ;)</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Widget />

            <Rodape />
        </>
    );
};