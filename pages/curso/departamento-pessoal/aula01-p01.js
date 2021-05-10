import firebase from "firebase/app";
import {firebaseClient} from "../../../firebase/apifirebase";
import {verifyIdToken} from "../../../firebase/firebase-admin";
import nookies from "nookies";
import Cabecalho from "../../../Components/utils/header";
import Rodape from "../../../Components/utils/footer";
import {useState} from "react";

export default function DP01P01({id}) {
    
    firebaseClient();
    const[acesso, setAcesso] = useState(true)

    const db = firebase.firestore();
    const col = db.collection('users').doc(id);
    col.get().then(doc => {
        const result = doc.get('dp');
        setAcesso(result);
    })

    if (id && acesso){
        return (
            <>
                <Cabecalho />
    
                <div className="w-full px-1 my-4 sm:w-3/4 mx-auto">
                    <div className="w-full flex flex-col items-center text-center p-1 sm:p-4">
                        <h1 className="text-gray-800 font-medium text-2xl">Departamento Pessoal</h1>
                        <p className="text-gray-800 font-normal text-lg">Aula 01 - Parte 01</p>
                        <p className="text-red-500 font-normal text-base">Duração: 3 horas e 20 minutos</p>
    
                        <div className="border-8 border-gray-800 w-full">
                            <div style={{padding: "50% 0 0 0", position: "relative"}}><iframe src="https://player.vimeo.com/video/514470296?title=0&byline=0&portrait=0" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} allow="autoplay; fullscreen; picture-in-picture"></iframe></div>
                        </div>
    
                        <div className="w-full mx-auto py-6">
                            <div className="w-full flex justify-between">
                                <button disabled className="bg-gray-400 rounded-full w-32 p-4 text-white text-center text-base font-normal">Anterior</button>
                                <button className="bg-red-600 rounded-full w-32 p-4 text-white text-center text-base font-normal">Próximo</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
                <Rodape />
            </>
        );
    }

    if (id && !acesso){
        return (
            <>
                <Cabecalho />
                <h1>Desculpe, você está conectado mas não tem acesso a este curso ainda!</h1>
            </>
        );
    }
}

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const id = token.uid;
        return {
            props: {id: id},
          };
    } catch(err){
        context.res.writeHead(302, { Location: "/" });
        context.res.end();
        return { props: {} };
    };
};