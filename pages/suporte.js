import HeaderHome from "../Components/utils/headerHome";
import Widget from "../Components/utils/widget";
import Rodape from "../Components/utils/footer";

export default function suporte() {

    return (
        <>
            <HeaderHome />
            
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-cover bg-center" style={{backgroundImage: 'url(/suporte-bg.webp)'}}>
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">Suporte</h2>
               </div>
            </div>

            <section className="w-full p-4">
               
            </section>

            <Widget />

            <Rodape />
        </>
    );
};