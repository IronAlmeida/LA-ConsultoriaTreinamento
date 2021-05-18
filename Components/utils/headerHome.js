import Link from "next/link";
import Image from "next/image";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function HeaderHome() {

    const ToggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    return (
        <>
            <div className="w-full bg-red-600 px-4 py-2">
                <div className="flex sm:w-3/4 justify-between m-auto items-center">
                    <Link href="/"><a><Image src="/LA-Logo.png" width={70} height={70} /></a></Link>
            
                    <nav id="nav" className="flex items-center">
                        <ul id="menu" className="lg:flex items-center gap-2 mr-6">
                            <li className="text-lg text-white"><Link href="/"><a className="block p-2">Inicio</a></Link></li>
                            <li className="text-lg text-white"><Link href="/cursos"><a className="block p-2">Cursos</a></Link></li>
                            <li className="text-lg text-white"><Link href="#"><a className="block p-2">BPO</a></Link></li>
                            <li className="text-lg text-white"><Link href="#"><a className="block p-2">Suporte</a></Link></li>
                            <li className="text-lg text-white"><Link href="#"><a className="block p-2">Sobre</a></Link></li>
                            <li><Link href="/login"><a>
                                <button className="text-lg text-white rounded-full w-24 p-2 bg-gray-800">Entrar</button>
                            </a></Link></li>
                        </ul>

                        <div id="btn" className="lg:hidden mr-6">
                            <AiOutlineMenu onClick={ToggleMenu} id="burger" className="text-3xl text-white cursor-pointer" />
                            <AiOutlineClose onClick={ToggleMenu} id="close" className="text-3xl text-white cursor-pointer hidden"/>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}