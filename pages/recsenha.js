import firebase from 'firebase/app';
import { firebaseClient } from "../firebase/apifirebase";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { URL } from "url";
import "firebase/auth";

export default function recSenha({path}){
    firebaseClient();
    
    const [visivel, setVisivel] = useState(false);
    const [codeValidation, setcodeValidation] = useState(false);

    firebase.auth().verifyPasswordResetCode(path)
    .then(email => {
        setcodeValidation(true)
    })
    .catch(error => {
        console.log(error)
    })


    //VALIDAÇÃO
    const letras = /(?=,*[a-z])/
    const numeros = /(?=,*[0-9])/
    const schema = Yup.object().shape({
        senha: Yup.string().matches(numeros, 'Incluir número').matches(letras, 'Incluir letra').min(8, 'A senha está curta').required('A senha deve conter pelo menos 8 caracteres com no mínimo um número'),
        senhaCheck: Yup.mixed().oneOf([Yup.ref('senha')], 'As senhas não coincidem').required('As senhas não coincidem')
    })

    //ATUALIZAÇÃO DA SENHA
    const atualizarSenha = (values, actions) => {
        firebase.auth().confirmPasswordReset(path, values.senha)
        .then(function() {
            window.location.href = "/";
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    
    return (
        <>
            {codeValidation === true &&
                <div className="w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Formik 
                    initialValues={{
                        senha: '',
                        senhaCheck: ''
                        }}
                    validationSchema={schema}
                    onSubmit={atualizarSenha}
                >
                {({ errors, touched }) => (
                    <Form>
                        {errors.senha && (
                            <div className="text-red-600 text-sm font-normal">{errors.senha}</div>
                        )}
                    <div className="mb-6 pt-3 rounded bg-gray-200 relative">
                            <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="senha">Senha</label>
                            <Field autoComplete="off" type={visivel ? "text" : "password"} name="senha" id="senha" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
                            {visivel ? <AiFillEye onClick={() => setVisivel(false)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" /> 
                            : 
                            <AiFillEyeInvisible onClick={() => setVisivel(true)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" />}
                        </div>
    
                        {errors.senhaCheck && touched.senhaCheck && (
                            <div className="text-red-600 text-sm font-normal">{errors.senhaCheck}</div>
                        )}
                        <div className="mb-6 pt-3 rounded bg-gray-200 relative">
                            <label className="block text-gray-800 text-sm font-semibold mb-2 ml-3" htmlFor="senhacheck">Confirme sua senha</label>
                            <Field autoComplete="off" type={visivel ? "text" : "password"} name="senhaCheck" id="senhacheck" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-2 pb-3 text-lg" />
                            {visivel ? <AiFillEye onClick={() => setVisivel(false)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" /> 
                            : 
                            <AiFillEyeInvisible onClick={() => setVisivel(true)} className="absolute top-10 right-4 text-3xl text-gray-500 cursor-pointer" />}
                        </div>
    
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Atualizar</button>
                    </Form>
                    )}
                </Formik>
                </div>
            }
            
            {codeValidation === false &&
                <> 
                    <h1>Link expirado ou já utilizado</h1>
                </>
            }
        </>
    )
}

export function getServerSideProps({req}) {
    const domain = 'http://localhost:3000';
    const request = req.url
    const complete = domain + request
    const path = new URL(complete).searchParams.get("oobCode")
    return {
        props: {
            path
        }
    }
}