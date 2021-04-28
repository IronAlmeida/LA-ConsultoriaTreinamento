import firebase from "firebase/app";
import {firebaseClient} from "../firebase/apifirebase";
import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";


export default function home({session}) {
    firebaseClient();
  
    if (session){
        return (
            <>
                <h1>Conectado!</h1>
            
                <button onClick={async () => {
                    await firebase.auth().signOut();
                    window.location.href = '/';
                }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-lg text-white p-4 w-20 shadow">Sair</button>
            </>
        );
    } else {
        return (
            <div>Redirecionando...</div>
        )
    }
};

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const { uid, email } = token;
        return {
            props: { session: `Your email is ${email} and your UID is ${uid}.`},
          };
    } catch(err){
        context.res.writeHead(302, { Location: "/" });
        context.res.end();
        return { props: {} };
    };
};