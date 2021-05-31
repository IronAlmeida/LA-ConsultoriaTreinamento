import {Campos, MySelect} from "../formik/field";
import {Form, Formik, Field } from "formik";
import {useState} from "react";
import * as Yup from 'yup';

export default function SuperForm({titulo, nomeBtn}) {
    const [valueTel, setValueTel] = useState('0');
    const [cadastro, setCadastro] = useState('0');
    const [formBPO, setFormBPO] = useState(false);
    const [formCursos, setFormCursos] = useState(false);
    
    const cel = /(^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$)/
    const ddd = /(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])/

    const schema = Yup.object().shape({
        nome: Yup.string().min(3, 'Muito curto').required('Nome obrigatório'),
        email: Yup.string().email('Digite um endereço de e-mail válido').lowercase().required('E-mail obrigatório'),
        telefone: Yup.string().matches(ddd, 'DDD inválido').matches(cel, 'Formato de número incorreto').required('Telefone obrigatório'),
    })

    function validarCheckbox() {  
        const form = document.querySelector('#form');
        const checkboxes = form.querySelectorAll('.boxes');
        const checkboxLength = checkboxes.length;
        const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

        function init() {
            if (firstCheckbox) {
                for (let i = 0; i < checkboxLength; i++) {
                    checkboxes[i].addEventListener('change', checkValidity);
                }
    
                checkValidity();
            }
        }

        function isChecked() {
            for (let i = 0; i < checkboxLength; i++) {
                if (checkboxes[i].checked) return true;
            }

            return false;
        }

        function checkValidity() {
            const errorMessage = !isChecked() ? 'Selecione pelo menos uma das opções.' : '';
            firstCheckbox.setCustomValidity(errorMessage);
        }

        init();
    }

    function validarCheckbox2() {  
        const form = document.querySelector('#form');
        const checkboxes = form.querySelectorAll('.boxes2');
        const checkboxLength = checkboxes.length;
        const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

        function init() {
            if (firstCheckbox) {
                for (let i = 0; i < checkboxLength; i++) {
                    checkboxes[i].addEventListener('change', checkValidity);
                }
    
                checkValidity();
            }
        }

        function isChecked() {
            for (let i = 0; i < checkboxLength; i++) {
                if (checkboxes[i].checked) return true;
            }

            return false;
        }

        function checkValidity() {
            const errorMessage = !isChecked() ? 'Selecione pelo menos uma das opções.' : '';
            firstCheckbox.setCustomValidity(errorMessage);
        }

        init();
    }

    function checkBox() {
        const form = document.querySelector('#form');
        const checkAuditoria = form.querySelector('#box1');
        const checkPadronizacao = form.querySelector('#box2');
        const checkBPO = form.querySelector('#box3');
        const checkCursos = form.querySelector('#box4');
        const checkConsultoria = form.querySelector('#box5');

        if (checkAuditoria.checked === false && checkBPO.checked === false && checkPadronizacao.checked === false && checkConsultoria.checked === false){
            setFormBPO(false);
        } else {
            setFormBPO(true);
        }

        if(checkCursos.checked === false){
            setFormCursos(false);
        } else {
            setFormCursos(true);
        }
    }

    const enviar = (values, {resetForm}) => {
        console.log(values);
        
        fetch('/api/mailSuperForm', {
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
                tribEmpresa: values.tribEmpresa,
                servicos: values.servicos,
                orcamento: values.orcamento,
                cursos: values.cursos
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
                    tribEmpresa: '',
                    servicos: '',
                    orcamento: '',
                    cursos: ''
                    }}
                validationSchema={schema}
                validateOnMount
                onSubmit={enviar}
                > 
    
                {() => (
                <Form id="form">
                    <div className="w-full mb-6">
                        <h1 className="text-white text-4xl font-semibold text-center">{titulo}</h1>
                    </div>
                    
                    <Campos type="text" name="nome" placeholder="Nome completo" label="Nome ou Razão Social" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

                    <Campos type="email" name="email" placeholder="Seu melhor e-mail" label="E-mail" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

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
                        <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Quais serviços você se interessou? (Pode selecionar mais de uma opção)</p>
                        <div className="flex flex-col flex-wrap">
                            <label className="text-white text-base font-semibold mr-4"><Field id="box1" className="mr-1 boxes" type="checkbox" name="orcamento" value="Auditoria" onClick={checkBox} />Auditoria</label>
                            <label className="text-white text-base font-semibold mr-4"><Field id="box2" className="mr-1 boxes" type="checkbox" name="orcamento" value="Padronização do DP" onClick={checkBox} />Padronização do DP</label>
                            <label className="text-white text-base font-semibold mr-4"><Field id="box3" className="mr-1 boxes" type="checkbox" name="orcamento" value="BPO" onClick={checkBox} />BPO</label>
                            <label className="text-white text-base font-semibold mr-4"><Field id="box4" className="mr-1 boxes" type="checkbox" name="servicos" value="Cursos" onClick={checkBox} />Cursos</label>
                            <label className="text-white text-base font-semibold mr-4"><Field id="box5" className="mr-1 boxes" type="checkbox" name="orcamento" value="Consultoria" onClick={checkBox} />Consultoria</label>
                            <label className="text-white text-base font-semibold mr-4"><Field className="mr-1 boxes" type="checkbox" name="servicos" value="Mentoria" />Mentoria</label>
                            <label className="text-white text-base font-semibold mr-4"><Field className="mr-1 boxes" type="checkbox" name="servicos" value="Suporte LA" />Suporte LA</label>
                        </div>
                    </div>

                    {formCursos && (
                        <>
                            <div className="w-full text-center my-4">
                                <h2 className="text-4xl text-white font-medium">Cursos:</h2>
                            </div>

                            <div className="xl:w-3/4 m-auto mb-6 pt-3">
                                <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>Selecione o curso (Pode selecionar mais de uma opção):</p>
                                <div className="flex flex-col flex-wrap">
                                    <label className="text-white text-base font-semibold mr-4"><Field className="mr-1 boxes2" type="checkbox" name="cursos" value="Analista DP" onClick={checkBox} />Analista Departamento Pessoal (<span className="text-green-500 text-base">Disponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field className="mr-1 boxes2" type="checkbox" name="cursos" value="eSocial e DCTFWeb" onClick={checkBox} />eSocial e DCTFWeb (<span className="text-green-500 text-base">Disponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field disabled className="mr-1 boxes2" type="checkbox" name="cursos" value="Folha e encargos" onClick={checkBox} />Folha de Pagamento e Encargos (<span className="text-red-500 text-base">Indisponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field disabled className="mr-1 boxes2" type="checkbox" name="cursos" value="Calculos" />Cálculos Trabalhistas – Rescisões (<span className="text-red-500 text-base">Indisponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field disabled className="mr-1 boxes2" type="checkbox" name="cursos" value="FGTS" onClick={checkBox} />Parcelamento de FGTS (<span className="text-red-500 text-base">Indisponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field disabled className="mr-1 boxes2" type="checkbox" name="cursos" value="Jornadas" />Tipos de Jornadas/Horários e Cálculos (<span className="text-red-500 text-base">Indisponível</span>)</label>
                                    <label className="text-white text-base font-semibold mr-4"><Field disabled className="mr-1 boxes2" type="checkbox" name="cursos" value="Declarações" />Declarações: GFIP, RAIS e DISO (<span className="text-red-500 text-base">Indisponível</span>)</label>
                                </div>
                            </div>
                        </>    
                    )}

                    {formBPO && (
                        <>
                        <div className="w-full text-center my-4">
                            <h2 className="text-4xl text-white font-medium">Informações adicionais:</h2>
                        </div>

                        <Campos type="text" name="funcao" placeholder="Sua função na empresa" label="Função" required className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />

                        <div className="xl:w-3/4 m-auto mb-6 pt-3">
                            <p className="text-white text-base font-semibold mb-2"><span className="text-red-700 mr-2">*</span>CPF ou CNPJ?</p>
                            <input type="radio" id="cpf" name="opt-cadastro" onClick={() => setCadastro('1')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="cpf">CPF</label>
                            <br />
                            <input type="radio" id="cnpj" name="opt-cadastro" onClick={() => setCadastro('2')} required/>
                            <label className="ml-2 text-white text-base font-semibold" htmlFor="cnpj">CNPJ</label>
                        </div>

                        {cadastro === '1' && (
                            <Campos type="text" autoComplete="no" id="cpf" name="cadastro" required placeholder="Informe CPF" label="CPF" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-700 transition duration-500 px-2 pb-3 text-lg" />
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
                        </>
                    )}

                    
                    <div className="w-full xl:w-3/4 m-auto">
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 focus:outline-none" type="submit" onClick={validarCheckbox, validarCheckbox2}>{nomeBtn}</button>
                    </div>
                    
                </Form>
                )}
                </Formik>
            </div>
            </div>
        </section>
    );
}