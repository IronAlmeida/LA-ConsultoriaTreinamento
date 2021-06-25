import Image from "next/image";
import Link from "next/link";

export default function Rodape() {

    let data = new Date();
    let ano = data.getFullYear();    

    return (
        <div className="w-full bg-red-700 p-1">
            <div className="flex flex-col flex-wrap py-3 text-white text-sm sm:text-base items-center text-center sm:w-3/4 sm:mx-auto">
                <Image src="/LA-Logo.webp" className="py-2" width="60" height="60" />
                <p className="pt-2">Copyright © LA - Consultoria e Treinamento {ano} | <Link href="/politica-de-privacidade"><a className="text-gray-300">Política de privacidade</a></Link></p>
            </div>
        </div>
    );
};