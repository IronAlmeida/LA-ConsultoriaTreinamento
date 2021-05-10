import {firebaseClient} from "../firebase/apifirebase";
import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Cabecalho from "../Components/utils/header";
import Rodape from "../Components/utils/footer";
import Link from "next/link";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {RiRecordCircleLine} from "react-icons/ri";

export default function home({session}) { 
    firebaseClient();

    if (session){
        return (
            <>
                <Cabecalho />
                
                <div className="w-full bg-gray-800 p-2">
                    <div className="w-3/4 m-auto p-4">
                        <h1 className="text-3xl text-white"><HiOutlineDesktopComputer className="inline-block text-white"/> Nossos cursos</h1>
                    </div>
                </div>
                

                <div className="w-full sm:w-3/4 sm:m-auto p-2">
                   <div className="flex flex-col xl:flex-row">
                       
                        <div className="flex flex-wrap w-full p-6 xl:w-1/3 sm:p-10">
                            <div className="w-full h-full shadow border border-gray-300">
                                <Link href="/curso/departamento-pessoal/aula01-p01"><a><img src="/pp.png" className="w-full" /></a></Link>
                                <div className="py-1 px-2.5">
                                    <div className="mt-2">
                                        <p className="text-xl text-center font-medium text-gray-800">Departamento Pessoal</p>
                                    </div>
                                    <div className="my-4">
                                        <p className="text-red-600 text-base text-center"><RiRecordCircleLine className="text-red-600 inline-block text-2xl" /> Curso Gravado Ao Vivo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full text-center">
                                <Link href="/curso/departamento-pessoal/aula01-p01"><a><button className="w-full bg-red-600 text-center p-4 text-base text-white">Acessar</button></a></Link>
                            </div>
                        </div>
                        
                   </div>
                </div>
                
                <Rodape />
            </>
        );
    } else {
        return (
            <div>Redirecionando...</div>
        )
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
        context.res.writeHead(302, { Location: "/" });
        context.res.end();
        return { props: {} };
    };
};