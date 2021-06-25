import firebase from "firebase/app";
import {firebaseClient} from "../../firebase/apifirebase";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


export default function Cabecalho({email}) {
    firebaseClient();
    const router = useRouter();

    const ToggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    return(
        <>
            <section className="w-full bg-red-700 px-6 py-2">
                <div className="flex sm:w-3/4 justify-between m-auto items-center">
                    <Link href="/"><a className="mt-2"><Image src="/LA-Logo.webp" width={70} height={70} /></a></Link>
                    
                    <nav id="nav" className="flex items-center">
                        <ul id="menu" className="lg:flex items-center gap-2 mr-4">
                            <li className="text-base text-white hover:text-gray-800 trasition duration-200"><Link href="/"><a className="block p-2">Inicio</a></Link></li>
                            <li className="text-base text-white hover:text-gray-800 trasition duration-200"><Link href="/cursos"><a className="block p-2">Cursos</a></Link></li>
                            <li className="text-base text-white hover:text-gray-800 trasition duration-200"><Link href="/servicos"><a className="block p-2">Serviços</a></Link></li>
                            <li className="text-base text-white hover:text-gray-800 trasition duration-200"><Link href="/arquivos"><a className="block p-2">Arquivos</a></Link></li>
                            <li className="text-base text-white hover:text-gray-800 trasition duration-200"><Link href="/sobre"><a className="block p-2">Sobre</a></Link></li>
                            <li className=""><Link href="/campus"><a className="block p-2"><button className="text-gray-900 text-base text-center w-24 p-2 bg-gray-100 rounded-full transform hover:scale-105 transition duration-200 focus:outline-none">Campus</button></a></Link></li>
                            <li className="block lg:hidden">
                                <button onClick={async () => {
                                    await firebase.auth().signOut();
                                    router.replace('/login');
                                }} className="text-base text-white rounded-full w-24 p-2 bg-gray-800 transform hover:scale-105 transition duration-200 focus:outline-none">Sair</button>
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
                            }} className="text-lg text-white rounded-full w-24 p-2 bg-gray-800 transform hover:scale-110 transition duration-200 focus:outline-none">Sair</button>
                        </div>
                    </nav>
                </div>
            </section>

            <section className="w-full bg-red-800 px-6 py-1">
                <div className="flex sm:w-3/4 m-auto">
                    <h2 className="text-xs sm:text-base text-white m-auto">Conectado com: {email}</h2>
                </div>
            </section>
        </>
    );
}