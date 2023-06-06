import Head from '../Components/head'
import Header from "../Components/utils/Header";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import {HiOutlineDesktopComputer} from "react-icons/hi";
// import {BsCameraVideo} from "react-icons/bs";

export default function Cursos() { 
    return (
        <>
           <Head title={"LA - Cursos"} />

           <Header style={"static"} color={"#0F172A"} />
            
            <div className="w-full bg-slate-600">
                <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                        <h2 className="text-4xl font-light text-white text-center">Cursos</h2>
                </div>
            </div>

            <section className="w-full p-4">
                <div className="w-full sm:w-3/4 mx-auto">
                    <p className="text-2xl sm:text-3xl text-slate-900"><HiOutlineDesktopComputer className="inline-block text-rose-700"/> Calendário de cursos</p>
                    <div className="bg-gray-300 rounded-xl shadow-xl py-4 px-2 sm:px-6 flex flex-wrap justify-between items-center my-7">

                        
                    </div>

                </div>
            </section>

            <Widget />

            <Rodape />
        </>
    );
};