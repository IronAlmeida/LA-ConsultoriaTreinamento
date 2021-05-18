import firebase from "firebase/app";
import {firebaseClient} from "../../firebase/apifirebase";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Cabecalho(props) {
    firebaseClient();
    const router = useRouter();

    const ToggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    return(
        <div className="w-full bg-red-600 px-4 py-2">
            <div className="flex sm:w-3/4 justify-between m-auto items-center">
                <Link href="/"><a><Image src="/LA-Logo.png" width={70} height={70} /></a></Link>
                
                <nav id="nav" className="flex items-center">
                    <ul id="menu" className="lg:flex gap-2 mr-6">
                        <li className="text-lg text-white"><Link href="/home"><a className="block p-2">Inicio</a></Link></li>
                        <li className="text-lg text-white"><Link href="/cursos"><a className="block p-2">Cursos</a></Link></li>
                        <li className="text-lg text-white"><Link href="#"><a className="block p-2">BPO</a></Link></li>
                        <li className="text-lg text-white"><Link href="#"><a className="block p-2">Suporte</a></Link></li>
                        <li className="text-lg text-white"><Link href="#"><a className="block p-2">Arquivos</a></Link></li>
                        <li className="text-lg text-white"><Link href="#"><a className="block p-2">Sobre</a></Link></li>
                        <li className="text-lg text-white"><Link href="#"><a className="block p-2">Minha Conta</a></Link></li>
                        <li className="block lg:hidden">
                            <button onClick={async () => {
                                await firebase.auth().signOut();
                                router.replace('/login');
                            }} className=" text-lg text-white rounded-full w-16 bg-gray-800">Sair</button>
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
                        }} className=" text-lg text-white rounded-full w-16 p-1 bg-gray-800">Sair</button>
                    </div>
                </nav>
            </div>
        </div>
    );
}