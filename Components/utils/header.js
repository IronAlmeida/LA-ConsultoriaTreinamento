import Image from "next/image";
import Link from "next/link";

export function Cabecalho() {
    return(
        <div className="w-full bg-red-600 px-4 py-2">
            <div className="flex sm:w-3/4 justify-between m-auto">
                <Image src="/LA-Logo.png" width={70} height={70} />
                <div className="hidden sm:block">
                    <ul>
                        <Link href="#">
                            <a><li className="inline-block mr-1">Inicio</li></a>
                        </Link>

                        <Link href="#">
                            <a><li  className="inline-block mr-1">Cursos</li></a>
                        </Link>

                        <Link href="#">
                            <a><li  className="inline-block mr-1">Consultoria</li></a>
                        </Link>

                        <Link href="#">
                            <a><li  className="inline-block mr-1">Sobre</li></a>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}