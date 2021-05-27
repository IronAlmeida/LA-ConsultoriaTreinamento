import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Cabecalho from "../Components/utils/header";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Link from "next/link";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {RiRecordCircleLine} from "react-icons/ri";

export default function Cursos({session}) { 
    if (session){
        return (
            <>
                <Cabecalho />
                
                <div className="w-full bg-gray-800 p-2">
                    <div className="w-full sm:w-3/4 m-auto text-center p-4">
                        <h1 className="text-2xl sm:text-3xl text-white"><HiOutlineDesktopComputer className="inline-block text-white"/> Nossos cursos</h1>
                    </div>
                </div>

                <div className="w-full sm:w-3/4 mx-auto p-2">
                    <div className="flex flex-col flex-wrap justify-between items-center text-center my-7 px-2">

                        {/*CARD 1 */}
                        <div className="flex flex-col items-center justify-between text-center w-full md:w-1/2 xl:w-1/3 border border-gray-400 shadow">
                        <div>
                            <img className="w-full" src="/pp.png"/>
                        </div>

                        <div className="mt-4 p-1">
                            <h1 className="text-gray-800 text-lg font-medium">Departamento Pessoal</h1>
                        </div>

                        <div className="mt-4 p-1">
                            <p className="text-red-700 text-base text-center"><RiRecordCircleLine className="text-red-700 inline-block text-2xl" /> Curso Gravado Ao Vivo</p>
                        </div>

                        <div className="w-full mt-4">
                            <Link href="/curso/departamento-pessoal/aula01-p01"><a>
                            <button className="w-full bg-red-700 text-center p-4 text-lg text-white focus:outline-none">Assistir</button></a>
                            </Link>
                        </div>
                        </div>
                        {/*END CARD1 */}

                        <div className="mt-8 pl-2">
                        <h1 className="text-3xl text-gray-800 font-medium text-center">Em breve novos cursos...</h1>
                        </div>

                    </div>
                </div>
                
                <Rodape />
            </>
        );
    } 
    
    if (!session){
        return (
            <>
                <HeaderHome />
                
                <div className="w-full bg-gray-800 p-2">
                    <div className="w-full sm:w-3/4 m-auto text-center p-4">
                        <h1 className="text-2xl sm:text-3xl text-white"><HiOutlineDesktopComputer className="inline-block text-white"/> Nossos cursos</h1>
                    </div>
                </div>

                <div className="w-full sm:w-3/4 mx-auto p-2">
                    <div className="flex flex-col flex-wrap justify-between items-center text-center my-7 px-2">

                        {/*CARD 1 */}
                        <div className="flex flex-col items-center justify-between text-center w-full md:w-1/2 xl:w-1/3 border border-gray-400 shadow">
                        <div>
                            <img className="w-full" src="/pp.png"/>
                        </div>

                        <div className="mt-4 p-1">
                            <h1 className="text-gray-800 text-lg font-medium">Departamento Pessoal</h1>
                        </div>

                        <div className="mt-4 p-1">
                            <p className="text-red-700 text-base text-center"><RiRecordCircleLine className="text-red-700 inline-block text-2xl" /> Curso Gravado Ao Vivo</p>
                        </div>

                        <div className="w-full mt-4">
                            <Link href="/curso/departamento-pessoal/aula01-p01"><a>
                            <button className="w-full bg-red-700 text-center p-4 text-lg text-white focus:outline-none">Assistir</button></a>
                            </Link>
                        </div>
                        </div>
                        {/*END CARD1 */}

                        <div className="mt-8 pl-2">
                        <h1 className="text-3xl text-gray-800 font-medium text-center">Em breve novos cursos...</h1>
                        </div>

                    </div>
                </div>
                
                <Rodape />
            </>
        );
    }
};

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const id = token.uid;
        return {
            props: {session: id},
          };
    } catch(err){
        return { 
            props: {session: false} 
        };
    };
};