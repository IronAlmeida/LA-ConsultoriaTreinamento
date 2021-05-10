import Image from "next/image";

export default function Rodape() {
    return (
        <div className="W-full bg-red-500 mt-4">
            <div className="flex flex-col p-2 text-white text-lg items-center text-center w-3/4 mx-auto">
                <Image src="/LA-Logo.png" width="60" height="60" />
                <p className="mb-2">Copyright © LA - Consultoria e Treinamento 2021</p>
                <p className="mb-2">Todos os direritos Reservados</p>
            </div>
        </div>
    );
};