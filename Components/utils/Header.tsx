import Link from "next/link";
import Image from "next/image";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Header({style, color}) {

    const ToggleMenu = () => {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    const bgHeader = () => {
        const bg = document.querySelector('[data-bg]')

        bg.classList.toggle("bg-scroll", window.scrollY >= 200);
    }

    if(typeof document !== 'undefined') {
        window.addEventListener('scroll', () => bgHeader())
    }

    return (
        <>
            <div style={{position: style, background: color}} className="w-full fixed top-0 z-10 px-6 py-3 transition duration-500 ease" data-bg>
                <div className="flex sm:w-5/6 lg:w-5/6 justify-between m-auto items-center">
                    <Link href="/"><Image alt="Logo da LA Consultoria" src="/LA-Logo.png" width={80} height={56} /></Link>                   
                     <nav id="nav" className="flex items-center">
                        <ul id="menu" className="lg:flex items-center gap-6 mr-6">
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/" className="block p-2">Inicio</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/cursos" className="block p-2">Cursos</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/servicos" className="block p-2">Serviços</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/arquivos" className="block p-2">Arquivos</Link></li>
                            <li className="text-base text-white hover:text-amber-300 trasition duration-200"><Link href="/sobre" className="block p-2">Sobre</Link></li>
                            <li><Link href="/login">
                                <button className="text-base text-white rounded-full w-24 p-2 bg-rose-700 transform hover:scale-110 transition duration-200 focus:outline-none">Entrar</button>
                            </Link></li>
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