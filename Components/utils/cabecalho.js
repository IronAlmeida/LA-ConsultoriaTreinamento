import firebase from "firebase/app";
import {firebaseClient} from "../../firebase/apifirebase";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Cabecalho({user}) {
    firebaseClient();
    const[nome, setNome] = useState('');

    const router = useRouter();

    const ToggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    useEffect(() => {
        if(user){
            const db = firebase.firestore();
            const docs = db.collection('users').doc(user);

            docs.get().then(doc => {
                const value = doc.get('nome');
                setNome(value);
            })
        }
    }, [])

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    const splitNome = nome.split(" ");
    const firstNome = splitNome[0];
    const capFirstNome = capitalize(firstNome)

    return(
        <>
            <section className="w-full fixed z-10 bg-slate-900 px-6 py-3">
                <div className="flex sm:w-5/6 justify-between m-auto items-center">
                    <Link href="/"><Image src="/LA-Logo.webp" alt="Logo da LA" width={80} height={56} /></Link>

                    <h2 className="text-lg sm:text-xl font-light text-white">Bem-vindo(a), <strong>{capFirstNome}!</strong></h2>
                    
                    <nav id="nav" className="flex items-center">
                        <ul id="menu" className="lg:flex items-center gap-2 mr-4">
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/" className="block p-2">Inicio</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/cursos" className="block p-2">Cursos</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/servicos" className="block p-2">Serviços</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/arquivos" className="block p-2">Arquivos</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/galeria" className="block p-2">Galeria</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/sobre" className="block p-2">Sobre</Link></li>
                            {/*<li className=""><Link href="/campus" className="block p-2"><button className="text-gray-900 text-base text-center w-24 p-2 bg-gray-100 rounded-full transform hover:scale-105 transition duration-200 focus:outline-none">Campus</button></Link></li>*/}
                            <li className="block lg:hidden">
                                <button onClick={async () => {
                                    await firebase.auth().signOut();
                                    router.replace('/login');
                                }} className="text-base text-white rounded-full w-24 p-2 bg-rose-700 transform hover:scale-105 transition duration-200 focus:outline-none">Sair</button>
                            </li>
                        </ul>

                        <div id="btn" className="lg:hidden mr-6">
                            <AiOutlineMenu onClick={ToggleMenu} id="burger" className="text-3xl text-white cursor-pointer" />
                            <AiOutlineClose onClick={ToggleMenu} id="close" className="text-3xl text-white cursor-pointer hidden"/>
                        </div>

                        <div className="hidden lg:flex">
                            <button onClick={async () => {
                                await firebase.auth().signOut();
                                router.replace('/login');
                            }} className="text-lg text-white rounded-full w-24 p-2 bg-rose-700 transform hover:scale-110 transition duration-200 focus:outline-none">Sair</button>
                        </div>
                    </nav>
                </div>
            </section>

            <div className="=w-full h-20 px-6 py-2"></div>            
        </>
    );
}