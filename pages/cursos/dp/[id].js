import firebase from "firebase/app";
import {firebaseClient} from "../../../firebase/apifirebase";
import {verifyIdToken} from "../../../firebase/firebase-admin";
import nookies from "nookies";
import {useState} from "react";
import HeaderHome from "../../../Components/utils/headerHome";
//import Cabecalho from "../../../Components/utils/cabecalho";
import Rodape from "../../../Components/utils/footer";
import Widget from "../../../Components/utils/widget";
import Head from "next/head";

export async function getServerSideProps(context) {
  try{
    const cookies = nookies.get(context)
    const token = await verifyIdToken(cookies.token);
    const uid = token.uid;
    const email = token.email;

    const id = context.query.id;
    const num = (parseInt(id) - 1);
    const res = await fetch('http://localhost:3000/api/cursos/all');
    const json = await res.json();
    const dp = await json.aulas.dp[num];

    if(!dp){
      return {
        notFound: true
      }
    }

    return {
      props: {
        aulas: dp,
        user: uid,
        email
      }
    }
    
  } catch{
    return {
      props: {user: null}
    }
  }
}

export default function post({aulas, user, email}) {
  firebaseClient();
  const[acesso, setAcesso] = useState(true)

  if(user){
    const db = firebase.firestore();
    const col = db.collection('users').doc(user);
    col.get().then(doc => {
      const result = doc.get('dp');
      setAcesso(result);
    })
  }

  if(user && acesso){
    return (
      <h1>conectado e com acesso ao curso</h1>
    )
  }

  if (user && acesso === false){
    //Se usuário estiver conectado mas não tem autorização, mostrar página de venda do curso
    return (
      <h1>conectado e sem acesso ao curso</h1>
    )
  }

  if(user === null){
    //Se usuário não estiver conectado, mostrar que é necessário fazer login
    return (
      <>
        <Head>
          <title>LA - Curso Departamento Pessoal</title>
        </Head>

        <HeaderHome />
       
        <div className="w-full bg-gradient-to-r from-red-900 via-red-800 to-red-900">
          <div className="w-full sm:w-3/4 m-auto py-8 px-4">
            <h2 className="text-4xl font-light text-gray-700 text-center">Curso Departamento Pessoal</h2>
          </div>
        </div>

        <section className="w-full p-4 bg-gradient-to-r from-gray-200 to-gray-300">
          <div className="w-full sm:3/4 m-auto">
            <div className="bg-blue-500 w-full sm:w-3/5 m-auto p-8 border-2 border-gray-400 shadow">
              <div className="w-full text-centr">
                <h1 className="text-lg">Ops! Parece que você não tem acesso ao curso ainda :(</h1>
              </div>
            </div>
          </div>
        </section>

        <Widget />
        <Rodape />
      </>
    )
  }
}