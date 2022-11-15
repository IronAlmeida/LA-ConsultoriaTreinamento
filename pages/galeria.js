import Head from "next/head"
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Widget from "../Components/utils/widget";
import Rodape from "../Components/utils/footer";
import Image from "next/image";
import { useAuth } from "../firebase/auth";

export default function galeria () {
    const { user } = useAuth();
    let logado = false;
    if (user){
        logado = true;
    }

    
    return (
        <>
            <Head>
                <title>LA - Galeria</title>
            </Head>

            {logado === false && <HeaderHome />}
            {logado == true && <Cabecalho user={user.uid} />}

            <section className="w-full bg-gray-400">
                <div className="w-full sm:w-3/4 m-auto py-4 px-4">
                    <h2 className="text-4xl italic font-light text-white text-center">Galeria LA</h2>
                </div>
            </section>

            <section className="w-full mt-4">
                <h2 className="w-full sm:w-3/4 m-auto py-4 text-slate-900 text-2xl text-center">Confira aqui algumas fotos de cursos e palestra realizados! :D</h2>
            </section>

            <section className="w-full columns-2 sm:columns-3 gap-3.5 p-10">
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-1.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-2.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-3.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-4.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-5.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-9.jpg" />
                <Image className="w-full rounded-lg mb-3 hover:scale-110 hover:shadow-2xl hover:duration-300" width="500" height="200" src="/galeria/imagem-10.jpg" />
            </section>

            <Widget />

            <Rodape />
        </>
    );
}