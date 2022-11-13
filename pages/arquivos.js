import { useAuth } from "../firebase/auth";
import Cabecalho from "../Components/utils/cabecalho";
import HeaderHome from "../Components/utils/headerHome";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import Head from "next/head";
import Link from "next/link"
import {AiOutlineCloudDownload, AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

export default function arquivos() {

    const { user } = useAuth();

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

    function ToggleDCTFWeb(){
        const element= document.getElementById('dctfweb');
        element.classList.toggle('active');
    }

    function ToggleDemissao(){
        const element= document.getElementById('demissao');
        element.classList.toggle('active');
    }

    function ToggleDomestico(){
        const element= document.getElementById('domestico');
        element.classList.toggle('active');
    }

    function ToggleEsocial(){
        const element= document.getElementById('esocial');
        element.classList.toggle('active');
    }

    function ToggleFolha(){
        const element= document.getElementById('folha');
        element.classList.toggle('active');
    }

    function TogglePlanilhas(){
        const element= document.getElementById('planilhas');
        element.classList.toggle('active');
    }

    function ToggleRural(){
        const element= document.getElementById('rural');
        element.classList.toggle('active');
    }

    function ToggleSst(){
        const element= document.getElementById('sst');
        element.classList.toggle('active');
    }

    function ToggleCCT(){
        const element= document.getElementById('cct');
        element.classList.toggle('active');
    }

    if (user){
        return (
            <>
                <Head>
                    <title>LA - Arquivos</title>
                </Head>
    
                <Cabecalho user={user.uid} />
                
                <div className="w-full bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600">
                    <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                            <h2 className="text-4xl font-light text-white text-center">Arquivos para download</h2>
                    </div>
                </div>

                <section className="w-full p-4 bg-gray-100">
                    <div className="w-full sm:w-3/4 m-auto">

                        <div className="w-full text-center my-2 mb-8">
                            <h2 className="text-3xl text-gray-800">Checklists, PDFs e planilhas para lhe auxiliar na rotina de Departamento Pessoal</h2>
                        </div>

                        {/* DOWNLOADS ADMISSAO */}
                        <div id="admissao" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleAdmissao}>
                                <h2 className="text-xl font-medium text-gray-900">Admissão</h2>
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
                                <h2 className="text-xl text-gray-900 font-medium">Afastamentos / ASO / CAT / INSS</h2>
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

                        {/* DOWNLOADS CCT-ACT*/}
                        <div id="cct" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleCCT}>
                                <h2 className="text-xl text-gray-900 font-medium">CCT - ACT</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">SEAC - SINDCESE (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1xxaCJGvVf9L1Ac5o1FwblUTxss3CUwZZ&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">SENALBA - SE (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=19ZREkK98fc3A3LHiivL40QWgYleeN5IL&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">SINDHOTRE (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1LsSfsYrt8pJQpYaIqUOJgmOfb316D1Xe&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Sindicato comércio - Socorro (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1nbuf_pa-FM7WF_qiqTaTZrh8WGjW9BfO&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">SINDPAN (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1_cKfCSFvnw63ujvYGBF6ywXafa0qgDx5&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS CNO E CAEPF */}
                        <div id="cno" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleCNO}>
                                <h2 className="text-xl text-gray-900 font-medium">CNO E CAEPF</h2>
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
                                <h2 className="text-xl text-gray-900 font-medium">COVID-19</h2>
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

                        {/* DOWNLOADS DCTFWEB*/}
                        <div id="dctfweb" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleDCTFWeb}>
                                <h2 className="text-xl text-gray-900 font-medium">DCTFWeb</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">MANUAL DO SISTAD (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1pdY8_m4dXwARTFnq0FEawkN-Befbswp6&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS DEMISSÃO*/}
                        <div id="demissao" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleDemissao}>
                                <h2 className="text-xl text-gray-900 font-medium">Demissão</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Como requerer seguro desemprego pelo app celular (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=12Vb5quPa2xZmCObU8c8cqH5XNaPpzr2C&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS DOMÉSTICO*/}
                        <div id="domestico" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleDomestico}>
                                <h2 className="text-xl text-gray-900 font-medium">Doméstico</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Manual de orientação do Doméstico eSocial (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=190PwqBeZkLKuQmCGbVqGxORestJZO9GA&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Passo a Passo Doméstico - Benefício emergencial (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1zqZeDPHVr9hCimQpRJ9gongZTKLmgiq-&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS ESOCIAL*/}
                        <div id="esocial" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleEsocial}>
                                <h2 className="text-xl text-gray-900 font-medium">eSocial</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Fase 2 - eSocial (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=13iEoWiOQAWGp6WXs-vVn0hKApv6x5Y1x&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS FOLHA DE PAGAMENTO*/}
                        <div id="folha" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleFolha}>
                                <h2 className="text-xl text-gray-900 font-medium">Folha de pagamento</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Folha de Pagamento (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1jsZFhzXAWBHJ2EBIuImFjA3auZ6S2EQo&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS PLANILHAS*/}
                        <div id="planilhas" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={TogglePlanilhas}>
                                <h2 className="text-xl text-gray-900 font-medium">Planilhas</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Modelo de controle de banco de horas (Excel)</h2>
                                <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQjthlV0RYMvocJn1SIpnkGsMPKSjiJxIJtdmMgF2BvME4CeSQWj3aFLRHAbHWXMg/pub?output=xlsx">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS RURAL*/}
                        <div id="rural" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleRural}>
                                <h2 className="text-xl text-gray-900 font-medium">Rural</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Cartilha empregado rural (PDF)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1HBEyb8CtUvd1eHxWtVzFlZbjFF7h8ZAS&export=download">
                                    <div className="rounded-full bg-gray-200 p-2">
                                        <AiOutlineCloudDownload className="text-4xl text-red-700" />
                                    </div>
                                </a>  
                            </div>
                        </div>

                        {/* DOWNLOADS SST*/}
                        <div id="sst" className="mt-4">
                            <div className="flex item-center justify-between w-full p-4 bg-gray-400 border-b-2 shadow-xl border-gray-800 cursor-pointer" onClick={ToggleSst}>
                                <h2 className="text-xl text-gray-900 font-medium">SST</h2>
                                <div>
                                    <AiOutlinePlusCircle id="plus" className="text-4xl text-red-700" />
                                    <AiOutlineMinusCircle id="less" className="text-4xl text-red-700 hidden" />
                                </div>
                            </div>
                            <div className="flex-options">
                                <h2 className="text-base sm:text-lg font-medium">Termo de entrega de EPI's (Word)</h2>
                                <a href="https://drive.google.com/u/1/uc?id=1OvbCB9OBfxCqp5je1eslF-WGZXcfVnsO&export=download">
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
                
                <div className="w-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700">
                    <div className="w-full sm:w-3/4 m-auto py-8 px-4">
                            <h2 className="text-4xl font-light text-white text-center">Arquivos para download</h2>
                    </div>
                </div>

                <section className="w-full p-4 sm:p-8 bg-gray-100">
                    <div className="relative w-full sm:w-3/4 m-auto">

                        <div className="w-full text-center my-2 mb-8">
                            <h2 className="text-3xl text-gray-800">Checklists, PDFs e planilhas para lhe auxiliar na rotina de Departamento Pessoal</h2>
                        </div>
                        

                        <div className="w-full sm:w-3/5 m-auto border-2 rounded-lg border-gray-800 text-center">
                            <div className="p-6">   
                                <h1 className="text-2xl text-gray-800 font-medium">Faça login para ter acesso aos arquivos!</h1>
                            </div>
                            <div className="p-6">
                                <Link href="/login">
                                    <button className="text-lg text-white rounded-full w-36 p-4 bg-gray-800 transform hover:scale-110 transition duration-200 focus:outline-none">Fazer login</button>
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