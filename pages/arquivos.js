import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Head from "next/head";
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import Link from "next/link"
import {AiOutlineCloudDownload, AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

export default function arquivos({session}) {

    function ToggleAdmissao(){
        const element= document.getElementById('admissao');
        element.classList.toggle('active');
    }

    function ToggleINSS(){
        const element= document.getElementById('inss');
        element.classList.toggle('active');
    }

    function ToggleCNO(){
        const element= document.getElementById('cno');
        element.classList.toggle('active');
    }

    function ToggleCOVID(){
        const element= document.getElementById('covid');
        element.classList.toggle('active');
    }

    if (session){
        return (
            <>
                <Head>
                    <title>LA - Arquivos</title>
                </Head>
    
                <Cabecalho email={session} />
                
                <div className="w-full bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600">
                    <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                            <h2 className="text-4xl font-light text-white text-center">Arquivos para download</h2>
                    </div>
                </div>

                <section className="w-full p-4 bg-gray-100">
                    <div className="w-full sm:w-3/4 m-auto">

                        {/* DOWNLOADS ADMISSAO */}
                        <div id="admissao" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleAdmissao}>
                                <h2 className="text-xl font-medium">Admissão</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">PASSO A PASSO - CTPS DIGITAL APP E WEB (PDF)</h2>
                                <a href="https://drive.google.com/u/3/uc?id=1VBl68DpvOF_o2-jhMm3UMJPBkhhz6l8M&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                                
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">COMO REGULARIZAR CPF-RFB (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1w97w_zXnA_rnpkxJZSEooNwugblOfVEu&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* DOWNLOADS INSS */}
                        <div id="inss" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleINSS}>
                                <h2 className="text-xl font-medium">Afastamentos / ASO / CAT / INSS</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">COMO ENVIAR ATESTADO INSS (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1CD2OLrsyqVPDyxvbFbY8Yo9gLuKokqXV&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                                
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">PORTARIA CONJUNTA 47 (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1QZgzVXzBdtkT2MYKAFsWYp6BiljkRuDB&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                                
                            </div>
                        </div>

                        {/* DOWNLOADS CNO E CAEPF */}
                        <div id="cno" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleCNO}>
                                <h2 className="text-xl font-medium">CNO E CAEPF</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">INSCREVER NOVA OBRA NO CNO (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1E-TOXAxJCtwAvj4aoYCtW5qWnWOyKmPc&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">INSCRIÇÃO CAEPF (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1xPAchdFZmx-hicKieEh5SsQWq0_Aik_z&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MANUAL CNO-ECAC (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1iaVYq-Z5Izasj29E-M4g_nd1bhOphYMZ&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* DOWNLOADS COVID-19 */}
                        <div id="covid" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleCOVID}>
                                <h2 className="text-xl font-medium">COVID-19</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">CARTILHA OPERACIONAL MP-927 V4 (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=100c5wIO7DgeecjEM7uqVJ0BSyHL5P_Vb&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a> 
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">DECRETO Nº 10.422, DE 13 DE JULHO DE 2020 - DOU - Imprensa Nacional (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1NdkYkVenwqowS6pJYimi8INI6PQG1XHU&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>       
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">LEI 13982 (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1YfnFrwUonshVA65-FNBG49k0Kd6rcMN9&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MPV-927 FERIAS BH (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1eGOxtnHJcUYiLeBumQI3Wlf4vyljN6CG&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MPV-932 Redução Sistema S (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1VEX0Ms-xH7bVmfYOXbv_gXvcaHUm88bK&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MPV-936 Suspensão/Redução (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1_4FN6pVG8W2vTNg12Y5wWG32_WI74Lg4&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>        
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MPV-944 Empréstimo de folha (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1x-YltUIALMUJUJhieKD4-1AZHl7syTJI&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Parcelamento do FGTS (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1VTQHnKYmEXSvIA82ATqzlTS1TO6Mrvq9&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>

                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">PORTARIA Nº 10.486, MP 936 (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1sk-cPk9Dfvpt15ItDNzFn7d8PKhqwzfD&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
    
                <Widget />
    
                <Rodape />
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <title>LA - Arquivos</title>
                </Head>
    
                <HeaderHome />
                
                <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                    <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                            <h2 className="text-4xl font-light text-white text-center">Arquivos para download</h2>
                    </div>
                </div>

                <section className="w-full p-8 bg-gray-100">
                    <div className="relative w-full sm:w-3/4 m-auto">

                        <div className="w-full sm:w-1/2 m-auto border-2 rounded-lg border-gray-800 text-center">
                            <div className="p-4">   
                                <h1 className="text-xl font-medium">Faça o login para ter acesso aos arquivos.</h1>
                            </div>
                            <div className="p-4">
                                <Link href="/login">
                                    <a><button className="text-lg text-white rounded-full w-24 p-2 bg-gray-800 transform hover:scale-110 transition duration-200 focus:outline-none">Entrar</button></a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </section>
    
                <Widget />
    
                <Rodape />
            </>
        )
    }

    
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
        return { props: {} };
    };
};