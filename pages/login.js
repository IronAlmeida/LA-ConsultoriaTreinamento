import firebase from "firebase/app";
import {firebaseClient} from "../firebase/apifirebase";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {useState} from "react";
import { Field, Form, Formik } from "formik";
import { AiFillEyeInvisible, AiFillEye, AiOutlineExclamationCircle } from 'react-icons/ai';
import * as Yup from 'yup';
import {useAuth} from "../firebase/auth";

/*LADO ESQUERDO - BACKGROUND */
const Background = () => {
  
    return (
      <div className="bg-cover relative overflow-hidden hidden bg-center lg:block lg:w-1/2 2xl:w-2/3 h-screen p-12" style={{backgroundImage: `url(/bg-main.jpg)`}}>
        <div className="flex flex-col">
          <div className="w-full flex items-center p-10 lg:p-14 xl:p-20">
            <svg width="50" height="50" x="0" y="0" viewBox="0 0 512 512" className="inline-block fill-current text-white">
                <path d="M304,96H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16C320,103.168,312.832,96,304,96z" />
              
                <path d="M240,160H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128c8.832,0,16-7.168,16-16    C256,167.168,248.832,160,240,160z" />
              
                <path d="M352,0H64C28.704,0,0,28.704,0,64v320c0,6.208,3.584,11.872,9.216,14.496C11.36,399.488,13.696,400,16,400    c3.68,0,7.328-1.28,10.24-3.712L117.792,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z M384,256    c0,17.632-14.336,32-32,32H112c-3.744,0-7.36,1.312-10.24,3.712L32,349.856V64c0-17.632,14.336-32,32-32h288    c17.664,0,32,14.368,32,32V256z" />
  
                <path d="M448,128c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c17.664,0,32,14.368,32,32v270.688l-54.016-43.2    c-2.816-2.24-6.368-3.488-9.984-3.488H192c-17.664,0-32-14.368-32-32v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16    c0,35.296,28.704,64,64,64h218.368l75.616,60.512C488.896,510.816,492.448,512,496,512c2.336,0,4.704-0.512,6.944-1.568    C508.48,507.744,512,502.144,512,496V192C512,156.704,483.296,128,448,128z" />
            </svg>
            <span className="ml-8 text-white text-3xl font-semibold">Consultoria via E-mail profissional</span>
          </div>
  
          <div className="w-full flex items-center p-10 lg:p-14 xl:p-20">
            <svg width="50" height="50" x="0" y="0" viewBox="0 0 60 58" className="inline-block fill-current text-white">
              <path d="m30 26c-.146 0-.291-.032-.426-.095l-17-8c-.35-.165-.574-.518-.574-.905s.224-.74.574-.905l17-8c.27-.127.582-.127.852 0l17 8c.35.165.574.518.574.905s-.224.74-.574.905l-17 8c-.135.063-.28.095-.426.095zm-14.651-9 14.651 6.895 14.651-6.895-14.651-6.895z" />
              <path d="m30 34c-.153 0-.307-.035-.447-.105l-12-6c-.339-.17-.553-.516-.553-.895v-7.647c0-.342.175-.661.464-.844.289-.184.652-.205.961-.061l11.575 5.447 11.574-5.447c.31-.145.673-.123.961.061.29.183.465.502.465.844v7.647c0 .379-.214.725-.553.895l-12 6c-.14.07-.294.105-.447.105zm-11-7.618 11 5.5 11-5.5v-5.453l-10.574 4.976c-.27.127-.582.127-.852 0l-10.574-4.976z" />
              <path d="m47 18h-17c-.552 0-1-.448-1-1s.448-1 1-1h17c.552 0 1 .448 1 1s-.448 1-1 1z" />
              <path d="m47 27c-.552 0-1-.448-1-1v-9c0-.552.448-1 1-1s1 .448 1 1v9c0 .552-.448 1-1 1z" />
              <path d="m30 20c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v4c0 .552-.448 1-1 1z" />
              <path d="m44.999 30c-.19 0-.383-.054-.554-.168-.459-.306-.583-.927-.277-1.387l2-3c.306-.46.926-.585 1.387-.277.459.306.583.927.277 1.387l-2 3c-.193.289-.51.445-.833.445z" />
              <path d="m49.001 30c-.323 0-.64-.156-.833-.445l-2-3c-.306-.459-.182-1.081.277-1.387.459-.308 1.08-.183 1.387.277l2 3c.306.459.182 1.081-.277 1.387-.171.114-.364.168-.554.168z" />
              <path d="m30 29c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1z" />
              <path d="m59 38h-58c-.552 0-1-.448-1-1v-32.999c0-2.206 1.795-4.001 4.001-4.001h51.998c2.206 0 4.001 1.795 4.001 4.001v32.999c0 .552-.448 1-1 1zm-57-2h56v-31.999c0-1.104-.897-2.001-2.001-2.001h-51.998c-1.104 0-2.001.897-2.001 2.001z" />
              <path d="m55.999 46h-51.998c-2.206 0-4.001-1.795-4.001-4.001v-4.999c0-.552.448-1 1-1h58c.552 0 1 .448 1 1v4.999c0 2.206-1.795 4.001-4.001 4.001zm-53.999-8v3.999c0 1.104.897 2.001 2.001 2.001h51.998c1.104 0 2.001-.897 2.001-2.001v-3.999z" />
              <path d="m33 42h-6c-.552 0-1-.448-1-1s.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1z" />
              <path d="m55 38h-50c-.552 0-1-.448-1-1v-32c0-.552.448-1 1-1h50c.552 0 1 .448 1 1v32c0 .552-.448 1-1 1zm-49-2h48v-30h-48z" />
              <path d="m43 58h-26c-1.654 0-3-1.346-3-3s1.346-3 3-3h26c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-26-4c-.551 0-1 .449-1 1s.449 1 1 1h26c.551 0 1-.449 1-1s-.449-1-1-1z" />
              <path d="m41 54h-22c-.552 0-1-.448-1-1s.448-1 1-1c3.318 0 5-2.355 5-7 0-.552.448-1 1-1h10c.552 0 1 .448 1 1 0 4.645 1.682 7 5 7 .552 0 1 .448 1 1s-.448 1-1 1zm-17.129-2h12.259c-1.232-1.364-1.957-3.395-2.102-6h-8.055c-.146 2.605-.87 4.636-2.102 6z" />
            </svg>
            <span className="ml-8 text-white text-3xl font-semibold">Cursos com preços acessíveis</span>
          </div>
  
          <div className="w-full flex items-center p-10 lg:p-14 xl:p-20">
            <svg width="90" height="90" x="0" y="0" viewBox="0 0 512 512" className="inline-block fill-current text-white">
              <path d="m497 128.04h-29.88v-45.76c0-8.284-6.716-15-15-15h-204.003l-23.164-49.435c-2.469-5.27-7.764-8.636-13.583-8.636h-196.37c-8.284 0-15 6.716-15 15v402.58c0 8.284 6.716 15 15 15h45v46c0 8.284 6.716 15 15 15h422c8.284 0 15-6.716 15-15v-344.749c0-8.284-6.716-15-15-15zm-467 283.75v-372.58h171.833l23.164 49.435c2.469 5.27 7.764 8.636 13.583 8.636h198.54v30.76h-362.12c-8.284 0-15 6.716-15 15v268.75h-30zm452 61h-392v-46-268.75h362.12 29.88z"/>
              <path d="m393.144 378.906c-8.284 0-15 6.716-15 15v18.884h-184.288v-18.884c0-8.284-6.716-15-15-15s-15 6.716-15 15v33.884c0 8.284 6.716 15 15 15h214.288c8.284 0 15-6.716 15-15v-33.884c0-8.284-6.716-15-15-15z"/>
              <path d="m275.394 377.396c5.891 5.892 15.408 5.817 21.213 0l71.495-71.495c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-45.889 45.889v-127.537c0-8.284-6.716-15-15-15s-15 6.716-15 15v127.537l-45.889-45.889c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213z"/>
            </svg>
            <span className="ml-8 text-white text-3xl font-semibold">Pdf's, Checklists e muitos outros arquivos úteis para o dia a dia do DP</span>
          </div>
        </div>
      </div>
    );
}
  

/*LADO DIREITO - TELA DE LOGIN / CADASTRO / RECUPERAÇÃO DE SENHA */
const Login = () => {
  
  const [ativar, setAtivar] = useState("login");

  /*CABEÇALHO*/
const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center pb-1 sm:pb-4">
        <div className="hidden sm:block">
          <Link href="/"><a><Image src="/logo-colorida.webp" width={"240"} height={"100"} /></a></Link>
        </div>

        <div className="sm:hidden">
          <Link href="/"><a><Image src="/logo-vermelha.webp" width={"60"} height={"60"} /></a></Link>
        </div>

        <div className="flex">   
          <a className="pr-3 md:px-3" href="https://api.whatsapp.com/send?phone=5579999839846" target="_blank">
            <svg width="30" height="30" x="0" y="0" viewBox="0 0 682 682.66669" className="fill-current text-red-700 hover:text-gray-800 transition duration-200">
              <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" />
            </svg>
          </a>
          <a className="pr-3 md:px-3" href="https://www.instagram.com/lourdesalmeidadp/" target="_blank">
            <svg width="30" height="30" x="0" y="0" viewBox="0 0 169.063 169.063" className="fill-current text-red-700 hover:text-gray-800 transition duration-200">
              <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
              <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
              <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" />
            </svg>
          </a>
          <a className="pr-3 py-1.5 md:px-3 md:py-1.5" href="https://www.youtube.com/channel/UCLmD4U7_jfyNGUii0BI3SRA" target="_blank">
            <svg width="30" height="30" x="0" y="0" viewBox="0 0 682.66672 682" className="fill-current text-red-700 hover:text-gray-800 transition duration-200">
                <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

  //FORMULÁRIO
  const Formlogin = () => {
    firebaseClient();
    const [visivel, setVisivel] = useState(false)
    const [erro, setErro] = useState(false);
    const router = useRouter()

    const schema = Yup.object().shape({
      email: Yup.string().email('Digite um endereço de e-mail válido').lowercase().required('E-mail Obrigatório'),
      senha: Yup.string().required('Senha Obrigatória'),
    })

    const login = (values, actions) => {
      firebase.auth().signInWithEmailAndPassword(values.email, values.senha)
      .then(result => {
        router.replace('/');
      })
      .catch(error => {
        setErro(true)
      });
    }

    return(
      <div className="w-full">
        <Formik 
          initialValues={{
              email: '',
              senha: ''
            }}
          validationSchema={schema}
          onSubmit={login}
        > 
        {({ errors, touched }) => (
          <Form>
            {erro === true && 
            <div className="w-full mb-6 bg-red-700 text-center relative p-2">
              <p className="text-xl text-white"><AiOutlineExclamationCircle className="absolute top-2.5 left-4 text-2xl" />Algo deu errado! verifique seu e-mail e senha novamente</p>
            </div>}

            <div className="w-full mb-6">
              <h1 className="text-gray-800 text-xl font-semibold text-center">Bem-Vindo(a)</h1>
            </div>

            {errors.email && touched.email && (
              <div className="text-red-700 text-sm font-normal">{errors.email}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="email">E-mail</label>
            <Field type="email" name="email" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
            </div>

            {errors.senha && touched.senha && (
              <div className="text-red-700 text-sm font-normal">{errors.senha}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200 relative">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="senha">Senha</label>
              <Field autoComplete="no" name="senha" id="senha" type={visivel ? "text" : "password"} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
              {visivel ? <AiFillEye onClick={() => setVisivel(false)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" /> 
              : 
              <AiFillEyeInvisible onClick={() => setVisivel(true)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" />}
            </div>

            <div className="flex justify-end ">
              <p className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline mb-6 cursor-pointer" onClick={() => setAtivar("recsenha")}>Esqueci minha senha</p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Entrar</button>
          </Form>
        )}
        </Formik>
        <div className="max-w-lg mx-auto text-center mt-6 sm:mt-12">
          <p className="text-gray-800">Não tem uma conta? <span className="font-semibold hover:underline hover:text-red-700 cursor-pointer" onClick={() => setAtivar("cadastro")}>Cadastre-se</span></p>
        </div>
      </div>
    );
  };

  //RECUPERAÇÃO DE SENHA
  const Recsenha = () => {
    firebaseClient();

    const [erro, setErro] = useState(false);

    const schema = Yup.object().shape({
      email: Yup.string().email('Digite um endereço de e-mail válido').lowercase().required('E-mail Obrigatório'),
    })

    const recuperar = (values, actions) => {
      firebase.auth().sendPasswordResetEmail(values.email)
      .then()
      .catch(error=> {
        setErro(true);
      })
    }

    return(
      <div className="w-full">
        <Formik 
            initialValues={{
              email: ''
            }}
          validationSchema={schema}
          onSubmit={recuperar}
        >
        {({ errors, touched }) => (
          <Form>
            {erro === true && 
            <div className="w-full mb-6 bg-red-700 text-center relative p-2">
              <p className="text-xl text-white"><AiOutlineExclamationCircle className="absolute top-2.5 left-4 text-2xl" />Não foi possível enviar o e-mail</p>
            </div>}

            <div className="w-full mb-6">
              <h1 className="text-gray-800 text-xl font-semibold text-center">Recuperação de senha</h1>
            </div>

            {errors.email && touched.email && (
              <div className="text-red-700 text-sm font-normal">{errors.email}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="email">E-mail</label>
              <Field placeholder="Informe seu e-mail cadastrado" type="email" name="email" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
            </div>

            <div className="flex justify-end ">
              <p className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline mb-6 cursor-pointer transition-opacity" onClick={() => setAtivar("login")}>Voltar</p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Confirmar e-mail</button>
          </Form>
        )}
        </Formik>
      </div>
    );
  }

  //CADASTRO
  const Cadastro = () => {
    firebaseClient();
    const [visivel, setVisivel] = useState(false);
    const [erro, setErro] = useState(false);
    const router = useRouter()

    const letras = /(?=,*[a-z])/
    const numeros = /(?=,*[0-9])/

    const schema = Yup.object().shape({
      nome: Yup.string().min(2, 'Muito curto').required('Nome Obrigatório'),
      email: Yup.string().email('Digite um endereço de e-mail válido').lowercase().required('E-mail Obrigatório'),
      senha: Yup.string().matches(numeros, 'Incluir número').matches(letras, 'Incluir letra').min(8, 'A senha está curta').required('A senha deve conter pelo menos 8 caracteres com no mínimo um número'),
      senhaCheck: Yup.mixed().oneOf([Yup.ref('senha')], 'As senhas não coincidem').required('As senhas não coincidem')
    })

    const autenticacao = (values, actions) => {
      firebase.auth().createUserWithEmailAndPassword(values.email, values.senha)
      .then(data => {
          const db = firebase.firestore(); // Iniciando o banco de dados
          const uid = data.user.uid;
  
          const users = db.collection("users");
          users.doc(uid).set({
              email: values.email, nome: values.nome
          })
           
         router.replace("/");
      })
      .catch(error => {
          setErro(true)
      })
    }

    return(
      <div className="w-full">
        <Formik 
          initialValues={{
              nome: '',
              email: '',
              senha: '',
              senhaCheck: ''
            }}
          validationSchema={schema}
          validateOnMount
          onSubmit={autenticacao}
        > 
        
        {({ errors, touched }) => (
          <Form>
            {erro === true && 
            <div className="w-full mb-6 bg-red-700 text-center relative p-2">
              <p className="text-xl text-white"><AiOutlineExclamationCircle className="absolute top-2.5 left-4 text-2xl" /> Não foi possível realizar seu cadastro</p>
            </div>}

            <div className="w-full mb-6">
              <h1 className="text-gray-800 text-xl font-semibold text-center">Cadastre sua conta</h1>
            </div>

            {errors.nome && touched.nome && (
              <div className="text-red-700 text-sm font-normal">{errors.nome}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="nome">Nome ou Razão Social</label>
              <Field type="text" name="nome" id="nome" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
            </div>
            
            {errors.email && touched.email && (
              <div className="text-red-700 text-sm font-normal">{errors.email}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="email">E-mail</label>
              <Field type="email" name="email" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
            </div>

            {errors.senha && (
              <div className="text-red-700 text-sm font-normal">{errors.senha}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200 relative">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="senha">Senha</label>
              <Field autoComplete="no" type={visivel ? "text" : "password"} name="senha" id="senha" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
              {visivel ? <AiFillEye onClick={() => setVisivel(false)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" /> 
              : 
              <AiFillEyeInvisible onClick={() => setVisivel(true)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" />}
            </div>

            {errors.senhaCheck && touched.senhaCheck && (
              <div className="text-red-700 text-sm font-normal">{errors.senhaCheck}</div>
            )}
            <div className="mb-6 pt-3 rounded bg-gray-200 relative">
              <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="senhacheck">Confirme sua senha</label>
              <Field autoComplete="no" type={visivel ? "text" : "password"} name="senhaCheck" id="senhacheck" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
              {visivel ? <AiFillEye onClick={() => setVisivel(false)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" /> 
              : 
              <AiFillEyeInvisible onClick={() => setVisivel(true)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" />}
            </div>

            <div className="flex justify-end ">
              <p className="text-sm font-semibold text-red-600 hover:text-red-700 hover:underline mb-6 cursor-pointer transition-opacity" onClick={() => setAtivar("login")}>Já tenho uma conta</p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Cadastrar</button>
          </Form>
        )}
        </Formik>
      </div>
    );
  }

  return (
    <div className="w-full width-700 overflow-y-auto h-screen">
      <div className="flex p-4 sm:p-8 relative min-h-screen flex-col justify-between">
        <Header />
        <div className="bg-white rounded-lg p-6 flex flex-col flex-grow justify-center">
          {ativar === "login" && <Formlogin />}
          {ativar === "recsenha" && <Recsenha />}
          {ativar === "cadastro" && <Cadastro />}
        </div>
        <div className="max-w-lg mx-auto text-center mt-6 sm:mt-12">
          <footer className="text-gray-800 font-normal">Copyright © LA - Consultoria e Treinamento 2021</footer>
        </div>
      </div>
    </div>
  );
};

/*========= COMPONENTE PRINCIPAL =========*/
export default function Index(){
  
  const { user } = useAuth();
  const router = useRouter();

  if (user){
    router.replace('/');
  }

  return(
    <div>
      <Head>
        <title>LA - Login</title>
      </Head>
      <div className="flex">
        <Background />
        <Login />
      </div>
    </div>
  );
};