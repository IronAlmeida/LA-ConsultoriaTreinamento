import firebase from "firebase/app";
import {firebaseClient} from "../../../firebase/apifirebase";
import {verifyIdToken} from "../../../firebase/firebase-admin";
import nookies from "nookies";
import {useEffect, useState} from "react";
import {Formik, Field, Form } from "formik";
import HeaderHome from "../../../Components/utils/headerHome";
import Cabecalho from "../../../Components/utils/cabecalho";
import Rodape from "../../../Components/utils/footer";
import Widget from "../../../Components/utils/widget";
import Head from "next/head";
import Link from "next/link";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {BsPlayFill} from "react-icons/bs";
import {BiLeftArrowAlt, BiRightArrowAlt, BiArrowBack} from "react-icons/bi";

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
  const[acesso, setAcesso] = useState(false);
  const[assistido, setAssistido] = useState(0);
  const[marcado, setMarcado] = useState({});
  const[ok, setOk] = useState();
  
  function watched() {
    const db = firebase.firestore();
    const docs = db.collection('users').doc(user);
    const dp1 = document.getElementById('dp1');
    const dp2 = document.getElementById('dp2');
    const dp3 = document.getElementById('dp3');
    const per = document.getElementById('percentage')
    let cont;

    dp1.addEventListener("change", (el) => {
      if (dp1.checked) {
        setAssistido(assistido + 1)
        cont = assistido + 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
          "dp-aulas.1": true,
          "dp-assistidos": cont
        })
      } else {
        setAssistido(assistido - 1)
        cont = assistido - 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
          "dp-aulas.1": false,
          "dp-assistidos": cont
        })
      }
    });

    dp2.addEventListener("change", (el) => {
      if (dp2.checked) {
        setAssistido(assistido + 1);
        cont = assistido + 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
          "dp-aulas.2": true,
          "dp-assistidos": cont
        })
      } else {
        setAssistido(assistido - 1)
        cont = assistido - 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
          "dp-aulas.2": false,
          "dp-assistidos": cont
        })
      }
    });

    dp3.addEventListener("change", (el) => {
      if (dp3.checked) {
        setAssistido(assistido + 1);
        cont = assistido + 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
            "dp-aulas.3": true,
            "dp-assistidos": cont
        })
      } else {
        setAssistido(assistido - 1)
        cont = assistido - 1;
        let totassistido = ((cont * 100) / 3).toFixed(0)
        per.style.strokeDashoffset = "calc(440 - (440 * " + totassistido +") / 100)"
        docs.update({
            "dp-aulas.3": false,
            "dp-assistidos": cont
        })
      }
    });
  }

  function mark() {
    const db = firebase.firestore();

    const check = db.collection('users').doc(user);
      check.get().then(doc => {
        const info = doc.get('dp-aulas');
        setMarcado(info);
      })
  }

  const enviar = (values, {resetForm}) => {    
    fetch('/api/mailDuvidaAula', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json" 
      },
      body: JSON.stringify({
          message: values.message,
          email: email,
          aula: aulas.aula
      })
  }).then(() => {
      setOk(true);
      resetForm({})
  }).catch(() => {
      alert("Falha no envio!")
  })
}

  useEffect(() => {
    if(user){
      const db = firebase.firestore();
      const col = db.collection('users').doc(user);

      col.get().then(doc => {
        const result = doc.get('dp');
        setAcesso(result);
      })

      col.get().then(doc => {
        const info = doc.get('dp-aulas');
        setMarcado(info);
      })

      col.get().then(doc => {
        const value = doc.get('dp-assistidos');
        setAssistido(value);
      })
    }
  }, [])

  let totassistido = ((assistido * 100) / 3/*Total de aulas do cursos*/).toFixed(0) 
  let porcentagem = {
    strokeDashoffset: "calc(440 - (440 * " + totassistido +") / 100)"
  }

  if(user && acesso){
    return (
      <>
        <Head>
          <title>LA - Curso Departamento Pessoal</title>
        </Head>

        <Cabecalho email={email} />
       
        <div className="w-full bg-gray-900 px-4 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center w-full m-auto py-4">
            <Link href="/campus"><a>
            <div className="flex flex-col items-center mt-2 md:m-0">
              <BiArrowBack className="text-white text-4xl"/>
              <h2 className="text-white font-light text-2xl">Voltar</h2>
            </div></a></Link>
            
            <h2 className="mx-auto my-2 text-xl md:m-0 sm:text-center sm:text-4xl font-light text-white">Departamento Pessoal</h2>

            <div className="box">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="65"></circle>
                  <circle id="percentage" cx="70" cy="70" r="65" style={porcentagem}></circle>
                </svg>
                <div className="number">
                  <h2>{totassistido}<span>%</span></h2>
                </div>
              </div>
              <h2 className="text">Concluído</h2>
            </div>
          </div>
        </div>

        <section className="w-full grid grid-aulas">
          {/* MENU DAS AULAS */}
          <div className="flex flex-col border-r-2 border-gray-400 shadow-xl">
            <div className="w-full viewport overflow-y-auto flex flex-col">
              {/*MODULO 1*/}
              <div className="bg-gray-500 p-4 text-center">
                <h2 className="text-white">Módulo 01</h2>
              </div>

              <div className="flex items-center bg-gray-200 p-2 text-center">
                {marcado[1] === true && (
                  <input id="dp1" defaultChecked hidden type="checkbox" onClick={watched}/>
                )}            
                {marcado[1] === false && (
                  <input id="dp1" hidden type="checkbox" onClick={watched}/>
                )}
                <label className="caixas-aulas" htmlFor="dp1" onClick={mark}></label>
                <Link href="http://localhost:3000/cursos/dp/[id]" as="/cursos/dp/1"><a className="ml-2" onClick={mark}><div className="flex items-center"><BsPlayFill className="mr-1 text-4xl text-gray-400"/><p>01. Introdução ao DP</p></div></a></Link>
              </div>

              <div className="flex items-center bg-gray-200 p-2 text-center">           
                {marcado[2] === true && (
                  <input id="dp2" defaultChecked hidden type="checkbox" onClick={watched}/>
                )}            
                {marcado[2] === false && (
                  <input id="dp2" hidden type="checkbox" onClick={watched}/>
                )}
                <label className="caixas-aulas" htmlFor="dp2" onClick={mark}></label>
                <Link href="http://localhost:3000/cursos/dp/[id]" as="/cursos/dp/2"><a className="ml-2" onClick={mark}><div className="flex items-center"><BsPlayFill className="mr-1 text-4xl text-gray-400"/><p>02. Teoria do DP</p></div></a></Link>
              </div>

              <div className="flex items-center bg-gray-200 p-2 text-center">
                {marcado[3] === true && (
                  <input id="dp3" defaultChecked hidden type="checkbox" onClick={watched}/>
                )}            
                {marcado[3] === false && (
                  <input id="dp3" hidden type="checkbox" onClick={watched}/>
                )}
                <label className="caixas-aulas" htmlFor="dp3" onClick={mark}></label>
                <Link href="http://localhost:3000/cursos/dp/[id]" as="/cursos/dp/3"><a className="ml-2" onClick={mark}><div className="flex items-center"><BsPlayFill className="mr-1 text-4xl text-gray-400"/><p>03. Conceito do DP</p></div></a></Link>
              </div>
              {/*FIM DO MODULO */}
            </div>
          </div>

          {/*PLAYER DAS AULAS */}
          <div className="w-full lg:w-5/6 mx-auto mt-4 flex flex-col items-center text-center p-1 sm:p-4">
            <h1 className="text-gray-800 font-medium text-2xl">{aulas.aula}</h1>

            <div className="border-4 mt-4 border-gray-800 w-full">
                <div style={{padding: aulas.padding, position: "relative"}}><iframe src={aulas.video} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} allow="autoplay; fullscreen; picture-in-picture"></iframe></div>
            </div>

            <div className="w-full mx-auto py-2 sm:py-6">
              <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                {aulas.numero > 1 && (
                  <Link href="http://localhost:3000/cursos/dp/[id]" as={"/cursos/dp/" + (aulas.numero - 1).toString()}><a><button className="flex items-center bg-red-800 rounded-full w-32 p-4 text-white text-center text-base font-normal mt-4 sm:m-0 focus:outline-none" onClick={mark}><BiLeftArrowAlt className="text-3xl ml-1"/> Anterior</button></a></Link>
                )}
                {aulas.numero === 1 && (
                  <button disabled className="bg-gray-400 rounded-full w-32 p-4 text-white text-center text-base font-normal mt-4 sm:mt-0">Anterior</button>
                )}
                {marcado[aulas.numero] === false && (
                  <label htmlFor={"dp" + aulas.numero.toString()} className="flex items-center bg-green-700 rounded-full w-72 sm:w-80 py-4 px-6 text-white text-center text-xs sm:text-base font-normal mt-4 sm:mt-0 cursor-pointer" onClick={mark}><AiOutlineCheck className="text-3xl text-gray-200 mr-2" />Marcar aula como concluída</label>
                )}
                {marcado[aulas.numero] === true && (
                  <label htmlFor={"dp" + aulas.numero.toString()} className="flex items-center bg-red-700 rounded-full w-72 sm:w-96 py-4 px-6 sm:px-10 text-white text-center text-xs sm:text-base font-normal mt-4 sm:mt-0 cursor-pointer" onClick={mark}><AiOutlineClose className="text-3xl text-gray-200 mr-2" />Desmarcar aula como concluída</label>
                )}
                {aulas.numero < 3 /* total de aulas do curso */ && (
                  <Link href="http://localhost:3000/cursos/dp/[id]" as={"/cursos/dp/" + (aulas.numero + 1).toString()}><a><button className="flex items-center bg-red-800 rounded-full w-32 p-4 text-white text-center text-base font-normal  mt-4 sm:mt-0 focus:outline-none" onClick={mark}>Próximo <BiRightArrowAlt className="text-3xl ml-1"/></button></a></Link>
                )}
                {aulas.numero === 3 /*total de aulas do curso */ && (
                  <button disabled className="bg-gray-400 rounded-full w-32 p-4 text-white text-center text-base font-normal mt-4 sm:mt-0">Próximo</button>
                )}
              </div>
            </div>

            {/* BOX para enviar dúvidas referene a aula */}
            <div className="relative w-full p-2">
              {ok && (
                  <div className="w-full dark h-full p-8 absolute top-0 left-0">
                      <div className="w-3/4 sm:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-center p-4 rounded-xl animation-message">
                          <h2 className="text-xl text-white font-medium">Mensagem enviada!</h2>
                          <div className="w-1/3 rounded-full m-auto bg-gray-300 p-2 mt-2">
                              <p className="text-xl text-gray-900 cursor-pointer" onClick={() => setOk(false)}>Ok!</p>
                          </div>
                      </div>
                  </div>
              )}

              <Formik 
                initialValues={{
                  message: ''
                }}
                validateOnMount
                onSubmit={enviar}
              >{() => (
                <Form>
                  <div className="w-full mb-2 py-1 rounded bg-gray-200 border-2 border-gray-600">
                    <label className="block text-gray-800 text-base font-semibold mb-2 border-b-2 border-gray-600" htmlFor="message">Dúvidas? Envie sua mensagem: </label>
                    <Field  id="message" name="message" as="textarea" placeholder="Insira sua dúvida aqui" rows="6" cols="50" required className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none px-2 py-2 text-lg resize-none" />
                  </div>

                  <div className="w-full">
                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Enviar mensagem</button>
                  </div>
                </Form>
              )}
              </Formik>
            </div>
          </div>
        </section>
        <Rodape />
      </>
    )
  }

  if (user && acesso === false){
    //Se usuário estiver conectado mas não tem autorização, mostrar página de venda do curso
    return (
      <>
        <Head>
          <title>LA - Curso Departamento Pessoal</title>
        </Head>

        <Cabecalho email={email} />
       
        <div className="w-full bg-gray-900">
          <div className="w-full sm:w-3/4 m-auto py-8 px-4">
            <h2 className="text-4xl font-light text-white text-center">Curso Departamento Pessoal</h2>
          </div>
        </div>

        <section className="w-full p-4 bg-gradient-to-r from-gray-200 to-gray-300">
          <div className="w-full sm:3/4 m-auto">
            <div className="bg-gray-600 w-full sm:w-3/5 m-auto p-8 border-2 border-gray-400 shadow text-center">
              <h1 className="text-3xl text-white">Parece que você não tem acesso a este curso ainda!</h1>
              <Link href="#"><a><button className="bg-red-600 hover:bg-red-700 focus:outline-none duration-200 text-center mt-8 p-6 text-gray-100 text-xl">Adquira já!</button></a></Link>
            </div>
          </div>
        </section>

        <Widget />
        <Rodape />
      </>
    )
  }

  /*
  if(acesso === null){
    return (
      <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:p-4 animate-pulse">
          <div className="flex flex-col items-center">
            <img src="/logo-colorida.png" width="800px" height="306px" />
            <p className="mt-4 text-xl text-black">Carregando...</p>
          </div>
        </div>
      </>
    )
  }*/

  if(user === null){
    //Se usuário não estiver conectado, mostrar que é necessário fazer login
    return (
      <>
        <Head>
          <title>LA - Curso Departamento Pessoal</title>
        </Head>

        <HeaderHome />
       
        <div className="w-full bg-gradient-to-r from-red-800 via-red-900 to-red-800">
          <div className="w-full sm:w-3/4 m-auto py-8 px-4">
            <h2 className="text-4xl font-light text-white text-center">Curso Departamento Pessoal</h2>
          </div>
        </div>

        <section className="w-full p-4 bg-gradient-to-r from-gray-200 to-gray-300">
          <div className="w-full sm:3/4 m-auto">
            <div className="bg-gray-600 w-full sm:w-3/5 m-auto p-8 border-2 border-gray-400 shadow text-center">
              <h2 className="text-3xl text-white">Ops! Parece que você não tem acesso a está página :(</h2>
              <Link href="/login"><a><button className="bg-red-600 hover:bg-red-700 focus:outline-none duration-200 text-center mt-8 p-6 text-gray-100 text-xl">Acessar!</button></a></Link>
            </div>
          </div>
        </section>

        <Widget />
        <Rodape />
      </>
    )
  }
}