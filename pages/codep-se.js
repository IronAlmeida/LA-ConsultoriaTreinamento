import Image from "next/image";
import { Tomorrow } from "next/font/google";
import Link from "next/link";
import {
  BsCalendar2CheckFill,
  BsGeoAlt,
  BsArrowRightCircle,
  BsRocketTakeoff,
} from "react-icons/bs";
// import { CldVideoPlayer } from "next-cloudinary";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-tomorrow",
});

export default function Codep() {
  return (
    <>
      <div className="bg-[url('../public/background_1.jpg')] bg-cover bg-bottom bg-no-repeat pt-12 pb-40">
        <div className="w-3/4 flex flex-col items-left gap-9 min-[1537px]:gap-16 min-[1537px]:mt-10 mx-auto px-4">
          <Image src={"/codep_logo2025.webp"} width={500} height={400} />
          <div className={` ${tomorrow.className} w-4/6 min-[1537px]:w-3/6`}>
            <h1 className={`text-[48px] leading-[60px] text-white`}>
              O maior encontro de{" "}
              <span className="text-[#E8C25A] font-bold">
                Departamento Pessoal
              </span>{" "}
              de Sergipe está de volta!
            </h1>
            <p className="flex items-center text-white text-lg mt-4">
              Venha fazer parte desta jornada e explorar o que há de novo no
              Universo DP.
            </p>
          </div>
          <div
            className={`${tomorrow.className} text-white text-2xl font-semibold`}
          >
            <p className="flex items-center">
              {" "}
              <BsCalendar2CheckFill className="mr-2" /> 18 e 19 de Julho de 2025
            </p>
            <p className="flex items-center">
              {" "}
              <BsGeoAlt className="mr-2" />
              Centro de Convenções José Augusto Gama - Hotel Arcus, Aracaju/SE
            </p>
          </div>
          <Link href={"#ingresso"}>
            <button className="flex justify-center items-center w-[300px] bg-[#E11D61] rounded-full text-white text-lg py-4">
              <p className={`${tomorrow.className}`}>ADQUIRA SEU INGRESSO!</p>
              <BsArrowRightCircle className="text-2xl ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[url('../public/background_2.jpg')] bg-cover bg-top">
        <div className="w-3/4 flex flex-col items-center mx-auto py-8 px-4">
          <Image
            src={"/nave.webp"}
            width={250}
            height={250}
            className="mt-[-100px]"
          />
          <div className={`${tomorrow.className}`}>
            <h1 className="text-white text-3xl text-center mt-10">
              <span className="font-bold">DP em expansão: </span>
              <br />
              <span className="text-[#E8C25A]">
                Despertar para uma nova realidade
              </span>
            </h1>
          </div>
          <div className="flex items-center mt-5 gap-10">
            <div>
              <Image src={"/codep2025_logoC.webp"} width={1386} height={769} />
            </div>
            <div
              className={`${tomorrow.className} text-white text-justify p-6 rounded-3xl`}
            >
              <p>
                Assim como o universo, o Departamento Pessoal está em constante
                expansão, evoluindo e se modernizando em múltiplas direções. O
                CODEP/SE 2025 será uma verdadeira expedição por esse universo em
                expansão, uma experiência imersiva para todos os profissionais
                de DP! <br />
                <br />
                Nesta edição, embarcaremos juntos em uma jornada de descobertas,
                trazendo reflexões, inovações e práticas de ponta para navegar
                nas novas realidades do setor. Vamos explorar desde as mais
                recentes atualizações na legislação até inovações tecnológicas
                que estão transformando a área. <br />
                <br />
                Prepare-se para essa viagem única e expansiva, onde cada
                palestra será um novo ponto de descoberta, cada painel será uma
                nova órbita de conhecimento, e cada discussão abrirá novos
                horizontes para os profissionais do setor. No CODEP/SE 2025,
                você estará entre os pioneiros a desbravar essa nova era do DP!
              </p>
            </div>
          </div>
          <p
            className={`${tomorrow.className} flex items-center justify-center text-[#E8C25A] font-bold mt-5 text-3xl text-center`}
          >
            Venha fazer parte dessa missão!{" "}
            <BsRocketTakeoff className="text-white ml-4" />
          </p>
        </div>
      </div>
      {/* PARA QUEM É O EVENTO */}
      <div
        className={`w-full pt-12 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="flex flex-col items-center w-3/4 mx-auto bg-gradient-to-b from-[#120608] via-[#000] to-[#080204] p-8 rounded-3xl text-white text-center">
          <Image
            src={"/codep_2024.jfif"}
            width={600}
            height={300}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-4xl mt-4">Para quem é o evento?</h1>
            <p className="text-lg mt-4 text-justify">
              O CODEP é o encontro imperdível para todos os profissionais de
              Departamento Pessoal e áreas afins. Nosso objetivo é criar um
              ambiente dinâmico e colaborativo onde você possa se conectar com
              os melhores do ramo, compartilhar conhecimentos e impulsionar seu
              crescimento profissional.
              <br />
              <br />
              Durante o evento você terá acesso a palestras inspiradoras
              ministradas pelos principais especialistas do Brasil e também da
              nossa querida Sergipe. Além disso, teremos momentos de interação,
              entretenimento e valiosas oportunidades de networking, todas
              destinadas a enriquecer sua trajetória profissional.
            </p>
          </div>

          <Link href={"#ingresso"}>
            <button className="flex justify-center items-center w-[300px] bg-[#E11D61] rounded-full text-white text-lg py-4 mt-8">
              <p className={`${tomorrow.className}`}>ADQUIRA SEU INGRESSO!</p>
              <BsArrowRightCircle className="text-2xl ml-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* SOBRE O CODEP 2024 */}
      <div
        className={`w-full bg-gradient-to-b from-[#120608] via-[#090303] to-[#000] py-6 px-2 ${tomorrow.className}`}
      >
        <div className="w-full md:w-3/4 xl:w-3/5 m-auto rounded-3xl py-8 text-center">
          <div className="text-white">
            <h1 className="text-4xl">O que rolou no CODEP/SE 2024?</h1>
            <p className="text-xl mt-2">Confira os melhores momentos.</p>
          </div>
          <div className="flex justify-center py-4">
            {/* <CldVideoPlayer
            className="rounded-2xl border-[3px] border-[#E8C25A]"
            src="CODEP-2024/fgdwicaioo7nxksverre"
          /> */}
            <iframe
              className="rounded-3xl border-[2px] border-[#E8C25A]"
              width="300"
              height="530"
              src="https://www.youtube.com/embed/i1wrlqepxIM"
              title="1° Congresso de Departamento Pessoal de Sergipe (CODEP/SE)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xl text-white">
            Veja também os registros da primeira edição.
          </p>
          <a
            href="https://photos.google.com/share/AF1QipOJ1Vtw1uJj_57prG4ybmx5FORn5SKlZJr9_etCtbEXYryKCydM06Y7FZB2NURW2A?key=R2VtZEp4azRka1hJUjBiX24yTHRTTDl2bjFwTFBR"
            target="_blank"
          >
            <button className="bg-[#E11D61] p-4 mt-4 rounded-full text-white">
              Ver fotos CODEP/SE 2024
            </button>
          </a>
        </div>
      </div>
      <div
        id="ingresso"
        className={`w-full text-center text-white bg-[#120608] py-8 px-2 ${tomorrow.className}`}
      >
        <h1 className="text-4xl">Garanta já seu ingresso!</h1>
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/5 relative rounded-3xl m-auto border-[2px] border-[#6E517A] py-8 px-2 mt-6">
          <div className="bg-[#E8C25A] rounded-full py-2">
            <h1 className="text-black text-2xl font-bold">
              Lote Promocional até 31/12!
            </h1>
          </div>
          <div>
            <div className="mt-10">
              <p className="text-2xl">1° Lote a partir de janeiro 2025</p>
              <p className="text-2xl">R$ 397,00*</p>
              <p className="text-sm">
                *Valor para pagamento via pix <br />
                *Cartão de crédito: taxa de R$ 39,70 ou até 10x R$ 51,49
              </p>
            </div>

            <div className="mt-10">
              <p className="text-4xl font-bold">Lote Promocional:</p>
              <p className="text-4xl font-bold mt-2">R$ 357,00**</p>
              <p className="text-xl mt-2">
                **Valor para pagamento via pix <br />
                **Cartão de crédito: taxa de R$ 35,70 ou até 10x R$ 46,30
              </p>
            </div>

            <div className="mt-10 font-bold">
              <a
                href="https://wa.me/5579996121721?text=Olá, gostaria de adquirir meu ingresso para o CODEP/SE 2025."
                target="_blank"
              >
                <button className="bg-[#E11D61] p-4 rounded-full hover:scale-110 ease-in duration-300">
                  Adquirir lote via Pix
                </button>
              </a>
            </div>

            <div className="mt-4 font-bold">
              <a href="https://www.even3.com.br/tickets/get/codep25?even3_orig=get_tickets">
                <button className="bg-[#E11D61] p-4 rounded-full hover:scale-110 ease-in duration-300">
                  Adquirir lote via cartão de crédito
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
