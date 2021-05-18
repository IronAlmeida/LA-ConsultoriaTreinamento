import Image from "next/image";

export default function Rodape() {
    return (
        <div className="w-full bg-red-600">
            <div className="flex flex-col py-3 text-white text-sm sm:text-lg items-center text-center w-3/4 mx-auto">
                <Image src="/LA-Logo.png" width="60" height="60" />
                <p className="mb-2">Copyright © LA - Consultoria e Treinamento 2021</p>
            </div>
        </div>
    );
};