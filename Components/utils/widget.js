import {Field, Form, Formik} from "formik";
import {HiOutlineMail, HiOutlinePhone} from "react-icons/hi";
import * as Yup from 'yup';

export default function Widget() {

    const schema = Yup.object().shape({
        nome: Yup.string().min(3, 'Muito curto').required('Nome obrigatório'),
        email: Yup.string().email().lowercase().required('E-mail obrigatório'),
        message: Yup.string().required('Mensagem obrigatória')
    })

    const enviar = (values) => {
        console.log(values);
    }

    return (
        <section className="w-full p-4 bg-red-600">
            <div className="w-full sm:w-5/6 m-auto flex flex-wrap justify-between">

                <div className="flex py-4 px-0 sm:p-4 flex-col mx-auto md:mx-0">
                    <h2 className="text-white text-2xl font-medium">Nossas redes socias!</h2>
                    <div className="flex justify-between mt-4">
                        <a className="pr-4 md:px-3" href="#">
                            <svg width="30" height="30" x="0" y="0" viewBox="0 0 682 682.66669" className="fill-current text-white hover:text-gray-800 transition duration-200">
                            <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" />
                            </svg>
                        </a>
                        <a className="pr-4 md:px-3" href="https://www.instagram.com/lourdesalmeidadp/" target="_blank">
                            <svg width="30" height="30" x="0" y="0" viewBox="0 0 169.063 169.063" className="fill-current text-white hover:text-gray-800 transition duration-200">
                            <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                            <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                            <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" />
                            </svg>
                        </a>
                        <a className="pr-4 py-1.5 md:px-3 md:py-1.5" href="https://www.youtube.com/channel/UCLmD4U7_jfyNGUii0BI3SRA" target="_blank">
                            <svg width="30" height="30" x="0" y="0" viewBox="0 0 682.66672 682" className="fill-current text-white hover:text-gray-800 transition duration-200">
                                <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col py-4 px-0 items-center mx-auto sm:items-start sm:m-0 sm:p-4">
                    <h2 className="text-white text-2xl font-medium">Contato</h2>
                    <div className="flex flex-col sm:flex-row items-center mt-4">
                        <HiOutlineMail className="text-white text-3xl mr-2"/><span className="text-sm sm:text-lg text-white">contato@lourdesalmeidadp.com.br</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-4">
                        <HiOutlinePhone className="text-white text-3xl mr-2"/><span className="text-sm sm:text-lg text-white">(79) 99983-9846</span>
                    </div>
                    
                </div>

                <div className="w-full xl:w-1/3 py-4 px-0 sm:p-4">
                    <h2 className="text-white text-2xl font-medium">Envie sua mensagem</h2>
                    <div className="w-full mt-3">
                        <Formik 
                            initialValues={{
                                nome: '',
                                email: '',
                                message: ''
                            }}
                            validationSchema={schema}
                            validateOnMount
                            onSubmit={enviar}
                        >
                        {({errors, touched}) => (
                            <Form>

                                {errors.nome && touched.nome && (
                                    <div className="w-full text-white text-sm font-normal">{errors.nome}</div>
                                )}
                                <div className="w-full mb-2 pt-3 rounded bg-gray-200">
                                    <label className="block text-gray-800 text-base font-semibold mb-2 ml-3" htmlFor="nome">Nome: </label>
                                    <input nome="nome" type="text" id="nome" placeholder="Seu nome" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-900 transition duration-500 px-2 pb-2 text-lg" />
                                </div>

                                {errors.email && touched.email && (
                                    <div className="w-full text-white text-sm font-normal">{errors.email}</div>
                                )}
                                <div className="w-full mb-2 pt-3 rounded bg-gray-200">
                                    <label className="block text-gray-800 text-base font-semibold mb-2 ml-3" htmlFor="email">E-mail: </label>
                                    <input nome="email" type="email" id="email" placeholder="Seu e-mail" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-900 transition duration-500 px-2 pb-2 text-lg" />
                                </div>

                                {errors.message && touched.message && (
                                    <div className="w-full text-white text-sm font-normal">{errors.message}</div>
                                )}
                                <div className="w-full mb-2 pt-3 rounded bg-gray-200">
                                    <label className="block text-gray-800 text-base font-semibold mb-2 ml-3" htmlFor="message">Mensagem: </label>
                                    <textarea id="message" name="message" placeholder="O que deseja?" rows="2" cols="50" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none px-2 pb-2 text-lg resize-none" />
                                </div>

                                <div className="w-full">
                                    <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">Enviar mensagem</button>
                                </div>
                            </Form>
                        )}

                        </Formik>
                    </div>  
                </div>

            </div>
        </section>
    );
};