import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import {Campos, MySelect} from "../Components/formik/field";
import {GiCardExchange} from "react-icons/gi";
import {Form, Formik, Field } from "formik";
import {useState} from "react";
import * as Yup from 'yup';

export default function Bpo() {

    const [valueTel, setValueTel] = useState('0');
    const [cadastro, setCadastro] = useState('0');

    const cel = /(^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$)/
    const ddd = /(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])/
    const cad = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/

    const schema = Yup.object().shape({
        nome: Yup.string().min(3, 'Muito curto').required('Nome obrigatório'),
        email: Yup.string().email('Digite um endereço de e-mail válido').lowercase().required('E-mail obrigatório'),
        telefone: Yup.string().matches(ddd, 'DDD inválido').matches(cel, 'Formato de número incorreto').required('Telefone obrigatório'),
        cadastro: Yup.string().matches(cad, 'Formato incorreto').required('CPF ou CNPJ obrigatório'),
        funcao: Yup.string().required('Função obrigatório')
    })

    const enviar = (values, {resetForm}) => {
        console.log(values);

        fetch('/api/mailBpo', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                nome: values.nome,
                email: values.email,
                telefone: values.telefone,
                cadastro: values.cadastro,
                funcao: values.funcao,
                qtdEmpregado: values.qtdEmpregado,
                individual: values.individual,
                estagiario: values.estagiario,
                aprendiz: values.aprendiz,
                tribEmpresa: values.tribEmpresa
            })
        }).then((response) => {
            console.log(response)
            alert("Solicitação enviada!")
            resetForm({})
        }).catch((error) => {
            console.log(error)
            alert("Falha no envio!")
        })
    }

    return (
        <>
            <HeaderHome />
            <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-cover bg-center" style={{backgroundImage: 'url(/bpo-bg.webp)'}}>
               <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                    <h2 className="text-4xl font-light text-white text-center">BPO - Terceirização de Departamento Pessoal</h2>
               </div>
            </div>
            
            <section className="w-full p-4 bg-gradient-to-b from-gray-300 to-gray-200">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-gray-900 text-2xl font-medium text-center my-4">O que é BPO?</h2>

                    <div className="flex flex-col items-center">
                        <GiCardExchange className="text-center text-9xl text-red-700"/>
                    </div>

                    <p className="text-gray-900 text-xl text-center my-4"><em>Business Process Outsourcing</em>  é a terceirização de processos de negócios. Esse tipo de terceirização, representa a transferência do Departamento Pessoal para uma empresa especializada na área, com as atividades que envolvem a folha de pagamento, eSocial, GFIP, RAIS, DIRF, entre outras.
                    </p>
                    
                    
                </div>
            </section>

            <section className="bg-gray-200 w-full p-4">
                <div className="w-full sm:w-3/4 m-auto">
                    <h2 className="text-gray-900 text-2xl sm:text-center font-medium my-8">Porque terceirizar os processos de Departamento Pessoal?</h2>
                    
                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Padronização do Processos (eficiência operacional)</span>
                    </div>
                    
                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Baixo investimento comparado a mão de obra interna e suas qualificações</span> 
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Segurança de dados</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Atualização e capacitação constante.</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Baixa rotatividade e absenteísmo. </span>
                    </div>

                    <div className="flex items-center mt-4">
                    <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Serviços executados por profissionais especificamente treinados.</span>
                    </div>

                    <div className="flex items-center mt-4">
                        <span className="text-xl text-red-700">►</span><span className="text-gray-900 text-xl ml-4">Prazo de 48H para execução de atividades.</span>
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 w-full p-4">
                <div className="w-full sm:w-3/4 m-auto">
                <div className="w-full p-8 bg-gray-700">
                    <Formik 
                    initialValues={{
                        nome: '',
                        email: '',
                        telefone: '',
                        cadastro: '',
                        funcao: '',
                        qtdEmpregado: '',
                        individual: '',
                        estagiario: '',
                        aprendiz: '',
                        tribEmpresa: ''
                        }}
                    validationSchema={schema}
                    validateOnMount
                    onSubmit={enviar}
                    > 
        
                    {({resetForm}) => (
                    <Form id="form">
                        <div className="w-full mb-6">
                            <h1 className="text-white text-4xl font-semibold text-center">Solicite um orçamento</h1>
                        </div>
                        
                        <Campos type="text" name="nome" placeholder="Nome completo" label="Nome ou Razão Social" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

                        <Campos type="email" name="email" placeholder="Seu melhor e-mail" label="E-mail" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

                        <Campos type="text" name="funcao" placeholder="Sua função na empresa" label="Função" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Tipo de telefone para contato:</p>
                            <input type="radio" id="fixo" name="opt-fone" onClick={() => setValueTel('1')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="fixo">Telefone fixo</label>
                            <br />
                            <input type="radio" id="cel" name="opt-fone" onClick={() => setValueTel('2')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="cel">Telefone celular</label>
                        </div>

                        {valueTel === '1' && (
                            <Campos type="text" autoComplete="no" id="fixo" name="telefone" placeholder="Telefone com DDD" label="Telefone Fixo" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />
                        )}

                        {valueTel === '2' && 
                            <Campos type="text" autoComplete="no" id="celular" name="telefone" placeholder="Telefone com DDD" label="Telefone Celular" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />
                        }
                        

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>CPF ou CNPJ?</p>
                            <input type="radio" id="cpf" name="opt-cadastro" onClick={() => setCadastro('1')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="cpf">CPF</label>
                            <br />
                            <input type="radio" id="cnpj" name="opt-cadastro" onClick={() => setCadastro('2')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="cnpj">CNPJ</label>
                        </div>

                        {cadastro === '1' && (
                            <Campos type="text" autoComplete="no" id="cpf" name="cadastro" placeholder="Informe CPF" label="CPF" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />
                        )}

                        {cadastro === '2' && 
                            <Campos type="text" autoComplete="no" id="cnpj" name="cadastro" placeholder="Informe CNPJ" label="CNPJ" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />
                        }

                        <MySelect className="w-full focus:outline-none" label="Quantidade de empregados" name="qtdEmpregado" required>
                            <option value="">Selecione uma das opções</option>
                            <option value="Entre 1 a 20">1 - 20</option>
                            <option value="Entre 21 a 50">21 - 50</option>
                            <option value="Entre 51 a 100">51 - 100</option>
                            <option value="Entre 101 a 200">101 - 200</option>
                            <option value="Entre 201 a 500">201 - 500</option>
                            <option value="Mais de 500">+500</option>
                        </MySelect>

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Possui contribuinte individual?</p>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="individual" value="Sim" required/>Sim</label><br/>
                            <label className="text-white text-base font-semibold"><Field className="mr-2" type="radio" name="individual" value="Não" required />Não</label>
                        </div>

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Possui estagiário?</p>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="estagiario" value="Sim" required/>Sim</label><br/>
                            <label className="text-white text-base font-semibold"><Field className="mr-2" type="radio" name="estagiario" value="Não" required />Não</label>
                        </div>

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Possui aprendiz?</p>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="aprendiz" value="Sim" required/>Sim</label><br/>
                            <label className="text-white text-base font-semibold"><Field className="mr-2" type="radio" name="aprendiz" value="Não" required />Não</label>
                        </div>

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Tipo de tributação da empresa?</p>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="tribEmpresa" value="CAEPF" required/>CAEPF</label><br/>
                            <label className="text-white text-base font-semibold"><Field className="mr-2" type="radio" name="tribEmpresa" value="Lucro Presumido" required />Lucro Presumido</label><br/>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="tribEmpresa" value="Lucro Real" required/>Lucro Real</label><br/>
                            <label className="text-white text-base font-semibold"><Field className="mr-2" type="radio" name="tribEmpresa" value="MEI" required />MEI</label><br/>
                            <label className=" text-white text-base font-semibold"><Field className="mr-2" type="radio" name="tribEmpresa" value="Simples Nacional" required/>Simples Nacional</label>
                        </div>
                        

                        <div className="w-full xl:w-3/4 m-auto">
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit">SOLICITAR ORÇAMENTO</button>
                        </div>
                        
                    </Form>
                    )}
                    </Formik>
                </div>
                </div>
            </section>

            <Rodape />
        </>
    );
};