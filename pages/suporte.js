import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Head from "next/head";
import HeaderHome from "../Components/utils/headerHome";
import Cabecalho from "../Components/utils/cabecalho";
import Widget from "../Components/utils/widget";
import Rodape from "../Components/utils/footer";
import SuperForm from "../Components/utils/superForm";
import {BsFillShieldLockFill} from "react-icons/bs";
import {Ri24HoursFill} from "react-icons/ri";

export default function suporte({session}) {

    let logado = false;
    if (session){
        logado = true;
    }

    return (
        <>
            <Head>
                <title>LA - Suporte</title>
            </Head>

            {logado === false && <HeaderHome />}
            {logado === true && <Cabecalho email={session} />}
            
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-cover bg-center" style={{backgroundImage: 'url(/suporte-bg.webp)'}}>
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">Suporte</h2>
               </div>
            </div>

            <section className="w-full px-1 py-6 sm:p-8">
               <div className="w-full sm:w-3/4 m-auto flex gap-10 flex-wrap ">
                   <div className="m-auto">
                        <svg height="270px" viewBox="0 -16 472 472" width="270px" className="fill-current text-red-700">
                            <path d="m464.992188 129.199219h-94.15625c-3.085938-72.230469-62.539063-129.199219-134.835938-129.199219s-131.75 56.96875-134.835938 129.199219h-94.15625c-1.839843-.046875-3.617187.652343-4.933593 1.929687-1.316407 1.28125-2.0664065 3.039063-2.074219 4.875v297.59375c0 3.867188 3.140625 6.601563 7.007812 6.601563h457.984376c3.867187 0 7.007812-2.734375 7.007812-6.601563v-297.59375c-.007812-1.835937-.757812-3.59375-2.074219-4.875-1.316406-1.277344-3.09375-1.976562-4.933593-1.929687zm-228.992188 140.726562c71.652344 0 130.4375-56.726562 134.707031-126.726562h76.976563l-211.683594 197.816406-211.714844-197.816406h77.007813c4.269531 70 63.054687 126.726562 134.707031 126.726562zm-80.96875 14.402344-141.03125 132.777344v-264.546875zm10.253906 9.378906 65.9375 61.707031c1.289063 1.226563 2.996094 1.917969 4.777344 1.9375 1.773438.011719 3.480469-.65625 4.777344-1.863281l68.453125-64.152343 138.785156 134.863281h-423.664063zm154.191406-11.730469 138.523438-129.445312v264.242188zm-83.476562-268.179687c66.808594.003906 120.964844 54.160156 120.964844 120.96875 0 66.804687-54.15625 120.964844-120.964844 120.964844s-120.964844-54.15625-120.96875-120.964844c.074219-66.777344 54.191406-120.894531 120.96875-120.96875zm0 0"/>

                            <path d="m166.890625 181.199219h29.484375c3.867188 0 6.625-3.246094 6.625-7.113281v-48.960938c.082031-1.808594-.578125-3.570312-1.832031-4.878906-1.25-1.308594-2.980469-2.046875-4.792969-2.046875h-7.375v-7.460938c0-25.339843 21.777344-45.957031 48.453125-45.957031 26.746094.175781 48.546875 20.789062 48.546875 45.957031v7.460938h-8.28125c-1.820312-.007813-3.566406.730469-4.832031 2.035156-1.269531 1.308594-1.949219 3.074219-1.886719 4.890625v48.960938c-.066406 1.839843.605469 3.628906 1.867188 4.964843 1.265624 1.335938 3.011718 2.109375 4.851562 2.148438h5.28125v8.21875c-.011719 1.304687-.546875 2.546875-1.488281 3.449219-.945313.898437-2.210938 1.378906-3.511719 1.332031h-14.300781c-2.660157-6-9.136719-11.210938-16.699219-11.210938-9.933594 0-17.984375 8.054688-17.984375 17.988281 0 9.933594 8.050781 17.984376 17.984375 17.984376 7.316406 0 13.617188-3.761719 16.429688-10.761719h14.570312c5.015625.042969 9.839844-1.914063 13.40625-5.4375 3.566406-3.527344 5.578125-8.328125 5.59375-13.34375v-8.21875h8.109375c3.867187-.0625 6.953125-3.246094 6.890625-7.113281v-48.960938c.023438-1.835938-.695312-3.605469-1.992188-4.910156-1.292968-1.300782-3.058593-2.027344-4.898437-2.015625h-5.109375v-7.460938c0-32.835937-28.039062-59.734375-62.5-59.957031-34.441406 0-62.5 26.898438-62.5 59.957031v7.460938h-8.109375c-1.839844-.011719-3.605469.714843-4.898437 2.015625-1.296876 1.304687-2.015626 3.074218-1.992188 4.910156v48.960938c-.0625 3.867187 3.023438 7.050781 6.890625 7.113281zm80.109375 23.898437c-2.210938 0-4-1.789062-4-4 0-2.207031 1.789062-4 4-4s4 1.792969 4 4c0 2.210938-1.789062 4-4 4zm51-37.898437h-13v-35h13zm-124-35h15v35h-15zm0 0"/>
                        </svg>
                   </div>

                   <div className="w-full lg:w-1/2 m-auto">
                       <p className="text-3xl sm:text-4xl text-center text-gray-900">Tire suas dúvidas de forma simples através do nosso email! <br/><br/> Suporte especializado em Departamento Pessoal e eSocial</p>
                   </div>
               </div>
            </section>

            <section className="w-full bg-gray-200 px-1 py-6 sm:p-8">
                <div className="w-full sm:w-3/4 m-auto flex flex-col">
                    <div className="w-full">
                        <h2 className="text-5xl text-gray-900 text-center sm:text-left">Benefícios</h2>
                    </div>
                    <div className="w-full mt-8">
                        <p className="text-2xl text-gray-900 text-center sm:text-left mt-10"><BsFillShieldLockFill className="text-red-700 text-5xl m-auto sm:inline-block sm:mr-2" /> Totalmente privado e seguro!</p>

                        <p className="text-2xl text-gray-900 text-center sm:text-left mt-10"><Ri24HoursFill className="text-red-700 text-5xl m-auto sm:inline-block sm:mr-2" /> Respostas em até 24 horas úteis!</p>
                    </div>
                </div>
            </section>

            <SuperForm titulo="Serviços" nomeBtn="Enviar" />

            <Widget />

            <Rodape />
        </>
    );
};

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const email = token.email;
        return {
            props: {session: email},
          };
    } catch(err){
        context.res.statusCode = 302;
        return { props: {} };
    };
};