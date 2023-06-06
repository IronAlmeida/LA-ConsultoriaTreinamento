import Image from "next/image";
import Link from "next/link";

export default function Rodape() {

    let data = new Date();
    let ano = data.getFullYear();    

    return (
        <div className="w-full bg-[#0F172A] px-4 py-2">
            <div className="flex flex-col flex-wrap py-3 text-white text-sm sm:text-base items-center text-center sm:w-3/4 sm:mx-auto">
                <Image src="/LA-Logo.png" alt="Logo LA consultoria" className="py-2" width={150} height={93} />
                <p className="pt-2">Copyright © LA - Consultoria e Treinamento {ano} | <Link href="/politica-de-privacidade" className="text-white">Política de Privacidade</Link></p>
            </div>
        </div>
    );
};