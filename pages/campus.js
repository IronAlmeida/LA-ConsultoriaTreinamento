import firebase from "firebase/app";
import {firebaseClient} from "../firebase/apifirebase";
import { verifyIdToken } from "../firebase/firebase-admin";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import nookies from "nookies";
import Cabecalho from "../Components/utils/cabecalho";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import { useEffect, useState } from "react";
import {BiMedal} from "react-icons/bi";

export async function getServerSideProps(context) {
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const uid = token.uid;
        const email = token.email;
    
        return {
          props: {
            user: uid,
            email
          }
        }
      } catch{
        return {
          props: {user: null}
        }
      }
}

export default function campus({user, email}) {
    firebaseClient();
    const[acesso, setAcesso] = useState(null);
    const[nome, setNome] = useState('');
    const[assistido, setAssistido] = useState(0);

    function aviso() {
        alert('Você deve concluir o curso antes de emitir o certificado');
    }

    useEffect(() => {
        if(user){
            setAcesso(true);
            const db = firebase.firestore();
            const docs = db.collection('users').doc(user);

            docs.get().then(doc => {
                const value = doc.get('nome');
                setNome(value);
            })

            docs.get().then(doc => {
                const value = doc.get('dp-assistidos');
                setAssistido(value);
            })
        } else{
            setAcesso(false);
        }
    }, [])

    const splitNome = nome.split(" ");
    const firstNome = splitNome[0];

    let porcentagem = ((assistido * 100) / 3/*Total de aulas do cursos*/).toFixed(0)
    let cont = assistido + 1;
    if(cont === 4 /*Total de aulas do curso + 1*/){
        cont = cont - 1;
    }
    let barra = {
        width: porcentagem +"%"
    }

    if(acesso === true){
        return (
            <>
                <Head>
                    <title>LA - Campus</title>
                </Head>

                <Cabecalho email={email} />

                <section className="w-full bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center w-full sm:w-3/4 m-auto py-4 px-2">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-light text-white">Olá, <strong>{firstNome}!</strong></h2>
                            <p className="text-base font-light text-white">Esta é a sua área de acesso aos cursos.</p>
                        </div>
                    </div>
                </section>

                <section className="w-full sm:w-3/4 m-auto p-4">
                    <p className="text-2xl sm:text-2xl text-gray-700 font-medium">Cursos adquiridos</p>
                    <div className="bg-gray-200 rounded-xl shadow-xl px-2 sm:px-6 flex flex-wrap justify-between items-center text-center my-2">
                        <div className="flex">
                            <div className="w-full p-2 sm:p-4">
                                {/*CARD*/}
                                <div className="flex flex-col m-auto items-center justify-between text-center border border-gray-400 shadow">
                                    <div>
                                        <img width="350px" height="350px" src="/analista-dp.png"/>
                                    </div>
                                    <div className="flex flex-col pt-4 sm:px-3.5">
                                        <p className="text-xl font-light text-gray-800">Curso</p>
                                        <p className="text-xl font-medium text-gray-800">Analista Departamento Pessoal</p>
                                    </div>
                                    {assistido < 3 && (
                                        <div className="w-full py-3 px-2">
                                            <button className="flex border border-gray-400 rounded-full text-gray-800 m-auto items-center p-2 focus:outline-none" onClick={aviso}><BiMedal className="text-gray-800 text-xl"/> Gerar certificado</button>
                                        </div>
                                    )}
                                    {assistido === 3 && (
                                        <div className="w-full py-3 px-2">
                                            <button className="flex border border-gray-400 rounded-full text-gray-800 m-auto items-center p-2 focus:outline-none"><BiMedal className="text-gray-800 text-xl" /> Gerar certificado</button>
                                        </div>
                                    )}
                                    <div className="relative w-72 h-full my-2 bg-gray-400 m-auto rounded-lg">
                                        <div className="bg-green-600 h-full p-4 rounded-lg" style={barra}></div>
                                        <span className="absolute text-white top-1/2 left-1 transform -translate-y-1/2">{porcentagem}%</span>
                                    </div>

                                    <div className="w-full">
                                        <Link href="http://localhost:3000/cursos/dp/[id]" as={"/cursos/dp/" + cont.toString()}><a><button className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-center p-2 text-lg text-white focus:outline-none">Acessar</button></a></Link>
                                    </div>
                                </div>
                                {/*END CARD*/}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full sm:w-3/4 m-auto p-4">
                    <p className="text-2xl sm:text-2xl text-gray-700 font-medium">Outros cursos</p>
                    <div className="bg-gray-200 rounded-xl shadow-xl py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center text-center my-2">
                        <div className="flex m-auto">
                            <div className="w-full p-4">
                                <h1 className="text-3xl text-gray-800 font-medium text-center">Cursos sendo gravados com maior carinho e dedicação. <br/>Em breve serão lançados ;)</h1>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Widget />

                <Rodape />
            </>
        );
    } 
    
    if(acesso === null){
        return(
            <>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:p-4 animate-pulse">
                <div className="flex flex-col items-center">
                    <img src="/logo-colorida.png" width="800px" height="306px" />
                    <p className="mt-4 text-xl text-black">Carregando...</p>
                </div>
                </div>
            </>
        )
    }  

    if(acesso === false){
        const router = useRouter()
        router.replace('/login');

        return(
            <h1>redirecionando...</h1>
        )
    }
};