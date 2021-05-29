import Image from "next/image";

export default function Rodape() {

    let data = new Date();
    let ano = data.getFullYear();    

    return (
        <div className="w-full bg-red-700">
            <div className="flex flex-col py-3 text-white text-sm sm:text-lg items-center text-center w-3/4 mx-auto">
                <Image src="/LA-Logo.webp" className="py-2" width="60" height="60" />
                <p className="py-2">Copyright © LA - Consultoria e Treinamento {ano}</p>
            </div>
        </div>
    );
};