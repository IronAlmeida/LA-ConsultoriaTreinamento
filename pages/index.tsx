import Head from '../Components/head';
import Header from "../Components/utils/Header";
import Rodape from "../Components/utils/footer";
import Widget from "../Components/utils/widget";
import HeroSection from "../Components/utils/heroSection";
import SliderClients from "../Components/utils/sliderClients";
import {BsBullseye} from "react-icons/bs";
import {AiFillEye} from "react-icons/ai";
import {FaHandshake} from "react-icons/fa";

export default function home() {
    return (
        <>
            <Head title={"LA Consultoria e Treinamento"} />
            
            <HeroSection />

            <Header style={undefined} color={undefined} />


            <section className='-full p-4 mt-16'>
                <div className='w-full sm:w-5/6 m-auto'>
                    <h2 className='text-4xl font-medium text-center my-2'>Nossos serviços</h2>
                    <div className='w-full flex flex-wrap lg:flex-nowrap justify-between mt-6'>
                        {/* Terceirização do DP */}
                        <div className='w-full lg:w-[30%] flex flex-col items-center border border-[#9CA3AF80] rounded-3xl p-6 m-6'>
                            <div className='mt-3 fill-current text-[#DA315F]'>
                                <svg height="72px" width="72px" viewBox="0 0 496 496" >
                                    <path d="m496 414.207031v-60.421875l-23.144531-5.914062c-.160157-.390625-.320313-.78125-.488281-1.167969l12.183593-20.535156-42.726562-42.726563-20.535157 12.183594c-.394531-.167969-.785156-.328125-1.167968-.488281l-5.914063-23.136719h-60.421875l-5.914062 23.144531c-.390625.160157-.78125.320313-1.167969.488281l-20.535156-12.183593-42.726563 42.726562 12.183594 20.535157c-.167969.394531-.328125.785156-.488281 1.167968l-23.136719 5.914063v60.421875l23.144531 5.914062c.160157.390625.320313.78125.488281 1.167969l-12.183593 20.535156 42.726562 42.726563 20.535157-12.183594c.394531.167969.785156.328125 1.167968.488281l5.914063 23.136719h60.421875l5.914062-23.144531c.390625-.160157.78125-.320313 1.167969-.488281l20.535156 12.183593 42.726563-42.726562-12.183594-20.535157c.167969-.394531.328125-.785156.488281-1.167968zm-31.542969 25.097657-25.152343 25.152343-17.097657-10.144531-3.847656 1.839844c-2.480469 1.175781-5.015625 2.238281-7.625 3.160156l-4.03125 1.429688-4.910156 19.257812h-35.578125l-4.910156-19.257812-4.03125-1.429688c-2.609376-.914062-5.152344-1.976562-7.625-3.160156l-3.847657-1.839844-17.097656 10.144531-25.152344-25.152343 10.144531-17.097657-1.839843-3.847656c-1.175781-2.480469-2.238281-5.015625-3.160157-7.625l-1.429687-4.03125-19.265625-4.910156v-35.578125l19.257812-4.910156 1.429688-4.03125c.914062-2.609376 1.976562-5.152344 3.160156-7.625l1.839844-3.847657-10.144531-17.097656 25.152343-25.152344 17.097657 10.144531 3.847656-1.839843c2.480469-1.175781 5.015625-2.238281 7.625-3.160157l4.03125-1.429687 4.910156-19.265625h35.578125l4.910156 19.257812 4.03125 1.429688c2.609376.914062 5.152344 1.976562 7.625 3.160156l3.847657 1.839844 17.097656-10.144531 25.152344 25.152343-10.144531 17.097657 1.839843 3.847656c1.175781 2.480469 2.238281 5.015625 3.160157 7.625l1.429687 4.03125 19.265625 4.910156v35.578125l-19.257812 4.910156-1.429688 4.03125c-.914062 2.609376-1.976562 5.152344-3.160156 7.625l-1.839844 3.847657zm0 0"/>

                                    <path d="m384 320c-35.289062 0-64 28.710938-64 64s28.710938 64 64 64 64-28.710938 64-64-28.710938-64-64-64zm0 112c-26.472656 0-48-21.527344-48-48s21.527344-48 48-48 48 21.527344 48 48-21.527344 48-48 48zm0 0"/>

                                    <path d="m384 352c-17.648438 0-32 14.351562-32 32s14.351562 32 32 32 32-14.351562 32-32-14.351562-32-32-32zm0 48c-8.824219 0-16-7.175781-16-16s7.175781-16 16-16 16 7.175781 16 16-7.175781 16-16 16zm0 0"/>

                                    <path d="m202.601562 135.457031c2.679688 7.855469 7.34375 14.78125 13.398438 20.222657v6.785156l-38.039062 14.261718c-15.527344 5.816407-25.960938 20.867188-25.960938 37.449219v41.824219h192v-41.824219c0-16.582031-10.433594-31.632812-25.953125-37.457031l-38.046875-14.261719v-6.777343c6.054688-5.433594 10.71875-12.359376 13.398438-20.222657 15.074218-2.585937 26.601562-15.664062 26.601562-31.457031v-32c0-39.695312-32.296875-72-72-72s-72 32.304688-72 72v32c0 15.792969 11.527344 28.871094 26.601562 31.457031zm61.398438 30.328125-16 26.664063-16-26.664063v-.585937c5.015625 1.785156 10.382812 2.800781 16 2.800781s10.984375-1.023438 16-2.800781zm-43.433594 12.046875 16.128906 26.871094-16.023437 8.007813-10.351563-31.039063zm107.433594 36.34375v25.824219h-160v-25.824219c0-9.953125 6.257812-18.976562 15.574219-22.472656l11.761719-4.40625 15.992187 47.984375 36.671875-18.335938 36.671875 18.335938 15.992187-47.984375 11.769532 4.414063c9.308594 3.488281 15.566406 12.511718 15.566406 22.464843zm-42.320312-32.503906-10.351563 31.046875-16.023437-8.007812 16.128906-26.878907zm-37.679688-29.671875c-17.648438 0-32-14.351562-32-32v-32.542969c11.710938-1.234375 22.761719-5.503906 32-12.769531 9.238281 7.273438 20.289062 11.535156 32 12.769531v32.542969c0 17.648438-14.351562 32-32 32zm48-34.222656v-27.546875c4.761719 2.777343 8 7.882812 8 13.777343 0 5.894532-3.238281 10.992188-8 13.769532zm-48-101.777344c30.871094 0 56 25.121094 56 56v4.449219c-4.726562-2.753907-10.144531-4.449219-16-4.449219h-1.375c-12.457031 0-24.167969-4.847656-32.96875-13.65625l-5.65625-5.664062-5.65625 5.664062c-8.808594 8.808594-20.511719 13.65625-32.96875 13.65625h-1.375c-5.855469 0-11.273438 1.695312-16 4.449219v-4.449219c0-30.878906 25.128906-56 56-56zm-48 74.222656v27.546875c-4.761719-2.777343-8-7.882812-8-13.777343 0-5.894532 3.238281-10.992188 8-13.769532zm0 0"/>

                                    <path d="m0 496h160v-208h-160zm16-192h128v176h-128zm0 0"/>

                                    <path d="m32 320h96v16h-96zm0 0"/>

                                    <path d="m32 352h16v16h-16zm0 0"/>

                                    <path d="m64 352h64v16h-64zm0 0"/>

                                    <path d="m32 384h96v16h-96zm0 0"/>

                                    <path d="m32 416h96v16h-96zm0 0"/>

                                    <path d="m112 448h16v16h-16zm0 0"/>

                                    <path d="m32 448h64v16h-64zm0 0"/>

                                    <path d="m213.65625 357.65625-11.3125-11.3125-37.65625 37.65625 37.65625 37.65625 11.3125-11.3125-18.34375-18.34375h60.6875v-16h-60.6875zm0 0"/>

                                    <path d="m88 128c0-4.40625 3.585938-8 8-8h36.6875l-18.34375 18.34375 11.3125 11.3125 37.65625-37.65625-37.65625-37.65625-11.3125 11.3125 18.34375 18.34375h-36.6875c-13.230469 0-24 10.769531-24 24v144h16zm0 0"/>

                                    <path d="m384 128v100.6875l-18.34375-18.34375-11.3125 11.3125 37.65625 37.65625 37.65625-37.65625-11.3125-11.3125-18.34375 18.34375v-100.6875c0-13.230469-10.769531-24-24-24h-40v16h40c4.414062 0 8 3.59375 8 8zm0 0"/>
                                </svg>
                            </div>
                            <h3 className='text-xl font-bold text-[#293548] mt-6 text-center'>Terceirização do Departamento Pessoal</h3>
                            <p className='text-base text-[#293548] mt-6 text-center'>Terceirize sua folha de pagamento e tenha serviços executados por profissionais especificamente treinados.</p>
                        </div>

                        {/* CAPACITAÇÃO PROFISSIONAL */}
                        <div className='w-full lg:w-[30%] flex flex-col justify-between items-center border border-[#9CA3AF80] rounded-3xl p-6 m-6'>
                            <div className='mt-3 fill-current text-[#DA315F]'>
                            <svg width="72px" height="72px" x="0" y="0" viewBox="0 0 60 58">
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
                            </div>
                            <h3 className='text-xl font-bold text-[#293548] mt-6 text-center'>Capacitação Profissional</h3>
                            <p className='text-base text-[#293548] mt-6 text-center'>Cursos para quem quer ingressar no Departamento Pessoal e para aqueles que tem experiência mas que precisam se atualizar.</p>
                        </div>

                        {/* CONSULTORIA / ASSESSORIA */}
                        <div className='w-full lg:w-[30%] flex flex-col justify-between items-center border border-[#9CA3AF80] rounded-3xl p-6 m-6'>
                            <div className='mt-3 fill-current text-[#DA315F]'>
                            <svg width="72px" height="72px" x="0" y="0" viewBox="0 0 512 512" className="">
                                <path d="M304,96H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16C320,103.168,312.832,96,304,96z" />
                            
                                <path d="M240,160H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128c8.832,0,16-7.168,16-16    C256,167.168,248.832,160,240,160z" />
                            
                                <path d="M352,0H64C28.704,0,0,28.704,0,64v320c0,6.208,3.584,11.872,9.216,14.496C11.36,399.488,13.696,400,16,400    c3.68,0,7.328-1.28,10.24-3.712L117.792,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z M384,256    c0,17.632-14.336,32-32,32H112c-3.744,0-7.36,1.312-10.24,3.712L32,349.856V64c0-17.632,14.336-32,32-32h288    c17.664,0,32,14.368,32,32V256z" />

                                <path d="M448,128c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c17.664,0,32,14.368,32,32v270.688l-54.016-43.2    c-2.816-2.24-6.368-3.488-9.984-3.488H192c-17.664,0-32-14.368-32-32v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16    c0,35.296,28.704,64,64,64h218.368l75.616,60.512C488.896,510.816,492.448,512,496,512c2.336,0,4.704-0.512,6.944-1.568    C508.48,507.744,512,502.144,512,496V192C512,156.704,483.296,128,448,128z" />
                            </svg>
                            </div>
                            <h3 className='text-xl font-bold text-[#293548] mt-6 text-center'>Consultoria / Assessoria </h3>
                            <p className='text-base text-[#293548] mt-6 text-center'>Reunião com clientes/gestores sobre área trabalhista; Consultoria orientativa para gestores e empresários e muito mais...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full p-4 mt-16">
                <div className='flex w-full justify-between items-center xl:w-5/6 m-auto'>
                    <div className='hidden xl:block'>
                        <img src="/LA-logo-full.png" width={300}/>
                    </div>
                    <div className="w-full m-auto sm:w-5/6 xl:w-4/6 xl:m-0">
                        <h2 className="text-4xl font-medium text-center my-2">A empresa</h2>
                        <p className="text-gray-900 text-lg font-normal text-center my-4">A LA Consultoria e Treinamento foi fundada em 2018 com o objetivo de ajudar as empresas e profissionais do Departamento Pessoal a lidar com as demandas da área, além de capacitar novos profissionais e atualizar aqueles que já têm experiência com as mudanças que ocorrem ao longo do tempo.</p>
                    </div>
                </div>
            </section>
            
            <section className="w-full p-4 mt-8">
                <div className="w-full sm:w-5/6 m-auto">
                    <div className="w-full flex justify-between flex-wrap">
                        <div className="w-full m-auto lg:w-3/6 rounded-xl flex flex-col items-center text-center p-4">
                            <BsBullseye className="text-center text-6xl text-amber-300" />
                            <div className="w-full">
                                <h2 className="text-3xl font-medium text-center my-4">Missão</h2>
                                <p className="text-gray-900 text-lg font-normal text-center my-4">Oferecer capacitação  profissional na área de  Departamento Pessoal
                                com treinamentos e orientação, com ênfase na  resolução de problemas  corporativos.
                                </p>
                            </div>
                        </div>

                        <div className="w-full m-auto lg:w-3/6 rounded-xl flex flex-col items-center text-center p-4">
                            <AiFillEye className="text-center text-6xl text-amber-300" />
                            <div className="w-full">
                                <h2 className="text-3xl font-medium text-center my-4">Visão</h2>
                                <p className="text-gray-900 text-lg font-normal text-center my-4">Sermos autoridade na  prestação de serviços para  as área de Departamento  Pessoal, oferecendo  resultados para  profissionais e resultado  para empresas.
                                </p>
                            </div>
                        </div>

                        <div className="w-full m-auto lg:w-3/6 rounded-xl flex flex-col items-center text-center p-4">
                            <FaHandshake className="text-center text-6xl text-amber-300" />
                            <div className="w-full">
                                <h2 className="text-3xl font-medium text-center my-4">Valores</h2>
                                <p className="text-gray-900 text-lg font-normal text-center my-4">Gratidão, integridade,  inteligência, inspiração,  flexibilidade, valorização do  ser humano,  responsabilidade social e interesse pelo  conhecimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <SliderClients />

            <section className="w-full p-4 pb-20 mt-16">

                <div className="w-full sm:w-5/6 m-auto">
                    <h2 className="text-4xl font-medium text-center my-2">Depoimentos</h2>
                </div>
                <div className="w-full sm:w-5/6 m-auto flex flex-wrap justify-between">
                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto my-6 flex items-center flex-col justify-between bg-[#F9FBFD] rounded-xl border border-[#9CA3AF80] p-4 shadow-lg">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.6667 30.6667H49.3333V20H38.6667V30.6667ZM14.6666 30.6667H25.3333V20H14.6666V30.6667ZM41.7333 45.3333L47.0667 34.6667H34.6667V16H53.3333V35.2L48.2667 45.3333H41.7333ZM17.7333 45.3333L23.0666 34.6667H10.6666V16H29.3333V35.2L24.2667 45.3333H17.7333Z" fill="#DA315F"/>
                        </svg>
                        <div className='mt-2'>
                            <p className="text-slate-900 text-lg">"Lourdes é uma profissional altamente capacitada, está sempre atualizada, e tem uma didática incrível. Nos responde com atenção, agilidade e competência. Ter a consultoria da Lourdes em nosso escritório faz toda a diferença."</p>
                        </div>
                        <div className="w-full flex flex-col justify-start mt-10">
                            <h4 className="text-lg text-slate-900">Alice Sousa</h4>
                            <p className="text-base text-[#DA315F]">Giro Contabilidade</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto my-6 flex items-center flex-col justify-between bg-[#F9FBFD] rounded-xl border border-[#9CA3AF80] p-4 shadow-lg">
                        <svg width="64" height="64" viewBox="0 0 64 64" className="fill-current text-[#DA315F]">
                            <path d="M38.6667 30.6667H49.3333V20H38.6667V30.6667ZM14.6666 30.6667H25.3333V20H14.6666V30.6667ZM41.7333 45.3333L47.0667 34.6667H34.6667V16H53.3333V35.2L48.2667 45.3333H41.7333ZM17.7333 45.3333L23.0666 34.6667H10.6666V16H29.3333V35.2L24.2667 45.3333H17.7333Z" />
                        </svg>
                        <div className='mt-2'>
                            <p className="text-slate-900 text-lg">"Lourdes Almeida é uma excelente profissional com uma bagagem riquíssima na área de DP e E-social, sua forma de transmitir o conteúdo bastante clara e objetiva. Super atenciosa e dedicada e está sempre disponível para nos ajudar."</p>
                        </div>
                        <div className="w-full flex flex-col justify-start mt-10">
                            <h4 className="text-lg text-slate-900">Juceli</h4>
                            <p className="text-base text-[#DA315F]">MB Motos</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/4 xl:w-2/5 m-auto my-6 flex items-center flex-col justify-between bg-[#F9FBFD] rounded-xl border border-[#9CA3AF80] p-4 shadow-lg">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.6667 30.6667H49.3333V20H38.6667V30.6667ZM14.6666 30.6667H25.3333V20H14.6666V30.6667ZM41.7333 45.3333L47.0667 34.6667H34.6667V16H53.3333V35.2L48.2667 45.3333H41.7333ZM17.7333 45.3333L23.0666 34.6667H10.6666V16H29.3333V35.2L24.2667 45.3333H17.7333Z" fill="#DA315F"/>
                        </svg>
                        <div className="m-auto">
                            <p className="text-slate-900 text-lg">"Nunca tinha trabalhado de home office e o grupo de DP da Lourdes foi fundamental para ter segurança no que estava fazendo. Ela sempre esclarecia a legislação e isso nos deixava mais tranquilos. Além dos cursos onde aprendemos de verdade e sempre na prática."</p>
                        </div>
                        <div className="w-full flex flex-col justify-start mt-10">
                            <h4 className="text-lg text-slate-900">Sheila Santos</h4>
                            <p className="text-base text-[#DA315F]">Aluna da LA</p>
                        </div>
                    </div>
                </div>
            </section>

            <Widget />

            <Rodape />
        </>
    );
};