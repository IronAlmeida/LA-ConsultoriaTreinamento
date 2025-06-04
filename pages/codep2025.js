import Image from "next/image";
import { Tomorrow } from "next/font/google";
import Link from "next/link";
import {
  BsCalendar2CheckFill,
  BsGeoAlt,
  BsArrowRightCircle,
  BsRocketTakeoff,
} from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Repeat } from "lucide-react";
// import { CldVideoPlayer } from "next-cloudinary";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-tomorrow",
});

export default function Codep() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  let data = new Date();
  let ano = data.getFullYear();

  const palestrantes = [
    {
      nome: "Luciano Pimentel",
    },
    {
      nome: "Fran Menezes",
    },
  ];

  return (
    <>
      <div className="bg-[url('../public/background_1.jpg')] bg-cover bg-bottom bg-no-repeat pt-12 pb-40">
        <div className="w-full xl:w-3/4 flex flex-col items-center xl:items-start gap-12 xl:gap-10 min-[1537px]:gap-16 min-[1537px]:mt-10 mx-auto px-4">
          <Image src={"/codep_logo2025.webp"} width={400} height={400} />
          <div
            className={` ${tomorrow.className} w-full lg:w-4/6 min-[1537px]:w-3/6`}
          >
            <h1
              className={`text-4xl text-center xl:text-left xl:text-5xl xl:leading-[60px] text-white`}
            >
              O maior encontro de{" "}
              <span className="text-[#E8C25A] font-bold">
                Departamento Pessoal
              </span>{" "}
              de Sergipe está de volta!
            </h1>
            <p className="text-center xl:text-left text-white text-lg mt-6">
              Venha fazer parte desta jornada e explorar o que há de novo no
              Universo DP.
            </p>
          </div>
          <div
            className={`${tomorrow.className} text-white text-xl lg:text-2xl `}
          >
            <p className="flex items-center justify-center">
              {" "}
              <BsCalendar2CheckFill className="mr-2" /> 18 e 19 de Julho de 2025
            </p>
            <p className="flex items-center mt-2">
              {" "}
              <BsGeoAlt className="mr-2" />
              Hotel Arcus | Aracaju/SE
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link href={"#ingresso"}>
              <button className="flex justify-center items-center w-[300px] bg-gradient-to-b from-[#E11D61] to-[#672A48] rounded-full text-white text-lg py-4">
                <p className={`${tomorrow.className}`}>ADQUIRA SEU INGRESSO!</p>
                <BsArrowRightCircle className="text-2xl ml-2" />
              </button>
            </Link>
            <Link href={"https://wa.me/5579996581078"} target="_blank">
              <button className="flex justify-center items-center w-[300px] bg-gradient-to-b from-[#020c1b]  to-[#672A48] rounded-full text-white text-lg py-4">
                <p className={`${tomorrow.className}`}>FALAR COM A EQUIPE</p>
                <AiOutlineTeam className="text-2xl ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[url('../public/background_2.jpg')] bg-cover bg-top">
        <div className="w-full lg:w-3/4 flex flex-col items-center mx-auto py-8 px-4">
          <Image
            src={"/nave.webp"}
            width={250}
            height={250}
            className="mt-[-100px]"
          />
          <div className={`${tomorrow.className}`}>
            <h1 className="text-white text-2xl lg:text-3xl text-center mt-10">
              <span className="font-bold">DP em expansão: </span>
              <br />
              <span className="text-[#E8C25A]">
                Despertar para uma nova realidade
              </span>
            </h1>
          </div>
          <div className="flex flex-col 2xl:flex-row 2xl:justify-around items-center my-8">
            <div>
              <Image src={"/codep2025_logoC.webp"} width={350} height={300} />
            </div>
            <div
              className={`${tomorrow.className} text-[16px] sm:text-xl text-justify text-white p-4 rounded-3xl md:w-5/6 xl:w-3/4 2xl:w-2/4`}
            >
              <p>
                Assim como o universo, o Departamento Pessoal está em constante
                expansão, evoluindo e se modernizando em múltiplas direções.
                Nesta edição, convidamos você a um despertar para novas
                possibilidades, explorando desde as mais recentes atualizações
                na legislação até as inovações tecnológicas que estão
                transformando a área.
                <br />
                <br /> Prepare-se para um encontro onde cada palestra será um
                novo ponto de descoberta e cada troca de conhecimentos abrirá
                novos horizontes a serem explorados. No CODEP/SE 2025, você
                estará entre os pioneiros a desbravar essa nova era do DP!
              </p>
            </div>
          </div>
          <Link href={"#ingresso"}>
            <button className="w-/34 p-4 bg-gradient-to-b from-[#E11D61] to-[#672A48] rounded-full">
              <p
                className={`${tomorrow.className} flex items-center justify-center text-white font-bold text-[17px] 2xl:text-2xl text-center`}
              >
                Venha fazer parte dessa missão!{" "}
                <BsRocketTakeoff className="text-white ml-2 text-2xl" />
              </p>
            </button>
          </Link>
        </div>
      </div>

      {/* PALESTRANTES 2025 */}
      <div
        className={`w-full py-12 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="w-full lg:w-3/4 text-white mx-auto text-center">
          <div className="w-full lg:w-3/4 mx-auto mb-8">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {/* LUCIANO PIMENTEL */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/luciano.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/dpconectado/"}
                          target="_blank"
                        >
                          <p className="my-2">@dpconectado</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* POLLYANA TIBURCIO */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/pollyana.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/pollytiburcio"}
                          target="_blank"
                        >
                          <p className="my-2">@pollytiburcio</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* ANDERSON CRISTOVAM */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/anderson.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/anderson.cristovam/"}
                          target="_blank"
                        >
                          <p className="my-2">@anderson.cristovam</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* CAMILA CRUZ */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/camila.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/professoracamilacruz/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@professoracamilacruz</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* CLAUDECI SILVA */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/claudeci.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/claudecidasilvaoficial/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@claudecidasilvaoficial</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                {/* ALLYFRAN DUTRA */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/allyfran.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/allyfrandutra.dp/"}
                          target="_blank"
                        >
                          <p className="my-2">@allyfrandutra.dp</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* FRAN MENEZES */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/fran.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/franmenezes.oficial/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@franmenezes.oficial</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* GILMAR MENDES*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/gilmar.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/profgilmarmendes/"}
                          target="_blank"
                        >
                          <p className="my-2">@profgilmarmendes</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* ZENAIDE CARVALHO*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/zenaide.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/zenaidecarvalhomentora/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@zenaidecarvalhomentora</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* JENÍ CARLA*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/jeni.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/jenicarla/"}
                          target="_blank"
                        >
                          <p className="my-2">@jenicarla</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* EUZA BISPO*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/euza.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/euzabispooficial/"}
                          target="_blank"
                        >
                          <p className="my-2">@euzabispooficial</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* EDILENE GAIVOTA*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/edilene.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/edilenegaivota_contadora/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@edilenegaivota_contadora</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* JOÃO PAULO */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/joao.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/joaopaulo.fmachado/"}
                          target="_blank"
                        >
                          <p className="my-2">@joaopaulo.fmachado</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* VICTOR LOPES */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/victor.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={
                            "https://www.instagram.com/contador.victorlopes/"
                          }
                          target="_blank"
                        >
                          <p className="my-2">@contador.victorlopes</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* ISABELLY LUCENA */}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/isabelly.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/isabellylucena/"}
                          target="_blank"
                        >
                          <p className="my-2">@isabellylucena</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                {/* THUANY REIS*/}
                <CarouselItem>
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent>
                        <Image
                          src="/thuany.jpg"
                          width={280}
                          height={280}
                          className="rounded-t-lg"
                        />
                        <Link
                          href={"https://www.instagram.com/thuanysales/"}
                          target="_blank"
                        >
                          <p className="my-2">@thuanysales</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          <p className="mt-4">
            Fiquem ligados no instagram da LA para novidades em primeira mão:{" "}
            <br />
            <a
              href="https://www.instagram.com/lourdesalmeidadp/"
              target="_blank"
            >
              <button className="p-4 border border-yellow-300 rounded-full mt-5">
                {" "}
                @lourdesalmeidadp
              </button>
            </a>
          </p>

          <h1 className="mt-5 text-4xl">Programação</h1>

          <div className="w-full mt-5">
            <Image
              src={"/Dia 1 - Site.png"}
              width={500}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>

          <div className="w-full mt-5">
            <Image
              src={"/Dia 2 - Site.png"}
              width={500}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* PARA QUEM É O EVENTO */}
      <div
        className={`w-full pt-12 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="flex flex-col items-center w-full lg:w-3/4 2xl:w-3/6 mx-auto bg-gradient-to-b from-[#120608] via-[#000] to-[#080204] p-8 rounded-3xl text-white text-center">
          <div className="w-full md:w-3/4 mx-auto">
            <h1 className="text-2xl sm:text-4xl">Para quem é o evento?</h1>
            <div className="embla mt-4" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1csL1Va3ur9nzC57IvLt9iewavSJ9JY-e&export=view"
                    }
                    width={1000}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1BsV_3Ct9Wz1UrDqMJD79QqwMFERbTiDs&export=view"
                    }
                    width={1000}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1ZP9UEWziexmBPoZo-smCkYUlUTB1YhGi&export=view"
                    }
                    width={1000}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
                <div className="embla__slide">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1yByzdVd4g5WPcTzWcIpQNffDoVQp5o6C&export=view"
                    }
                    width={1000}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[16px] sm:text-lg mt-4 text-justify">
              O CODEP é o encontro feito para todos os profissionais de
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
            <button className="flex justify-center items-center w-[300px] bg-gradient-to-b from-[#E11D61] to-[#672A48] rounded-full text-white text-lg py-4 mt-8">
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
        <div className="w-full lg:w-3/4 xl:w-3/5 m-auto rounded-3xl text-center">
          <div className="text-white">
            <h1 className="text-2xl sm:text-4xl">
              O que rolou no CODEP/SE 2024?
            </h1>
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
              src="https://drive.google.com/file/d/1YKLIlse-_AiPGShOfKTnoARIELfuJ0yi/preview"
              title="1° Congresso de Departamento Pessoal de Sergipe (CODEP/SE)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-lg text-white">
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

      {/* INGRESSOS */}
      <div
        id="ingresso"
        className={`w-full text-center text-white bg-[#120608] py-8 px-2 ${tomorrow.className}`}
      >
        <h1 className="text-3xl sm:text-4xl">Garanta já seu ingresso!</h1>
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/5 relative rounded-3xl m-auto border-[2px] border-[#6E517A] py-8 px-2 mt-12">
          <h1 className="bg-[#672A48] rounded-full p-2 w-3/4 mx-auto text-2xl sm:text-3xl mt-[-60px]">
            Ingresso Individual
          </h1>
          <div>
            <div className="mt-10">
              <p className="text-2xl text-[#E8C25A]">
                3° Lote a partir de 16 de junho 2025
              </p>
              <p className="text-3xl text-[#E23C65]">R$ 567,00</p>
            </div>

            <div className="mt-10">
              <p className="text-3xl font-bold text-[#E8C25A]">2° Lote</p>
              <p className="text-5xl font-bold mt-2 text-[#7FDB58]">
                R$ 467,00*
              </p>
              <p className="text-[16px] mt-2">
                **Valor para pagamento via pix <br />
                **Cartão de crédito: + R$ 46,70 taxa ou até 10x R$ 60,57
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
        <div className="w-full md:w-3/4 lg:w-3/5 xl:w-2/5 relative rounded-3xl m-auto border-[2px] border-[#6E517A] py-8 px-2 mt-12">
          <h1 className="bg-[#672A48] rounded-full p-2 w-3/4 mx-auto text-xl sm:text-2xl xl:text-3xl mt-[-60px]">
            Ingressos para Grupos
          </h1>
          <div>
            <div className="mt-10">
              <p className="text-xl sm:text-4xl font-bold text-[#E8C25A]">
                2° Lote - 3 pessoas
              </p>
              <p className="text-4xl font-bold mt-2 text-[#7FDB58]">
                R$ 443,65{" "}
                <span className="text-[16px] font-normal text-white">
                  por pessoa*
                </span>
              </p>
              <p className="text-sm sm:text-[16px] mt-2">
                *Valor para pagamento via pix <br />
                *Cartão de crédito: + R$ 44,37 taxa por pessoa ou até 10x R$
                172,61
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl sm:text-4xl font-bold text-[#E8C25A]">
                2° Lote - 4 pessoas
              </p>
              <p className="text-4xl font-bold mt-2 text-[#7FDB58]">
                R$ 429,64{" "}
                <span className="text-[16px] font-normal text-white">
                  por pessoa**
                </span>
              </p>
              <p className="text-sm sm:text-[16px] mt-2 text-center">
                **Valor para pagamento via pix <br />
                **Cartão de crédito: + R$ 42,96 taxa por pessoa ou até 10x R$
                222,88
              </p>
            </div>

            <div className="mt-10 font-bold">
              <a
                href="https://wa.me/5579996121721?text=Olá, gostaria de adquirir ingressos em grupo para o CODEP/SE 2025."
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

      {/* SEJA UM PATROCINADOR */}
      <div
        className={`w-full py-20 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="w-full md:w-3/4 lg:w-2/4 mx-auto border border-[#E8C25A] p-8 rounded-3xl shadow-lg shadow-slate-900">
          <h1 className="text-4xl text-white text-center">
            Seja um patrocinador
          </h1>
          <p className="text-lg lg:text-xl text-white mt-8 text-justify">
            Como patrocinador, sua empresa terá a oportunidade de se destacar
            perante um público altamente qualificado, fortalecendo sua marca e
            ampliando conexões estratégicas.
          </p>
          <h1 className="text-2xl text-white text-center mt-5">
            Patrocinadores
          </h1>

          <div className="bg-white p-6 rounded-2xl mt-5">
            {/* SÓLIDES */}
            <div className="mt-5">
              <Link href={"https://solides.com.br/"} target="_blank">
                <Image
                  className="m-auto"
                  src={"/solides.png"}
                  width={200}
                  height={200}
                />
                <p className="text-justify mt-5">
                  A Solides é líder em tecnologia para gestão de pessoas,
                  oferecendo soluções inovadoras que transformam a maneira como
                  lidamos com o Departamento Pessoal. Com ferramentas avançadas
                  de análise comportamental e gestão de talentos, eles estão na
                  vanguarda da revolução digital no setor.
                </p>
              </Link>
            </div>

            {/* EB Treinamentos */}
            <div className="mt-20">
              <Link
                href={"https://www.instagram.com/eb_treinamentos/"}
                target="_blank"
              >
                <Image
                  className="m-auto"
                  src={"/eb.png"}
                  width={200}
                  height={200}
                />
                <p className="text-justify mt-5">
                  A EB Treinamentos é referência nacional quando o assunto é
                  formação de alto impacto para quem atua no DP, RH e áreas
                  correlatas. Muito mais que uma escola, é um verdadeiro
                  ecossistema de transformação profissional.
                </p>
              </Link>
            </div>

            {/* BSSP GRADUAÇÃO */}
            <div className="mt-20">
              <Link
                href={
                  "https://bsspce.com.br/pos-graduacao-e-mba-bssp/?utm_source=Link+da+Bio+do+RD+Station&utm_medium=social&utm_campaign=CTA+no+Link+da+Bio"
                }
                target="_blank"
              >
                <Image
                  className="m-auto"
                  src={"/bssp.jpg"}
                  width={200}
                  height={200}
                />
                <p className="text-justify mt-5">
                  A BSSP é reconhecida por oferecer pós-graduações e MBAs
                  práticos, ministrados por professores que são referências no
                  mercado. Com cursos voltados para áreas como Contabilidade,
                  Direito, Engenharia, Gestão, Perícia, Saúde e
                  Trabalhista/Previdenciário, a instituição prepara
                  profissionais para os desafios reais do mercado de trabalho.
                </p>
              </Link>
            </div>

            {/* LACEL CONTABILIDADE */}
            <div className="mt-20">
              <Link
                href={"https://www.lacel.cnt.br/site2/index.php/pt/"}
                target="_blank"
              >
                <Image
                  className="m-auto"
                  src={"/lacel.jpeg"}
                  width={200}
                  height={200}
                />
                <p className="text-justify mt-5">
                  Com 36 anos de experiência no mercado, a Lacel é referência em
                  serviços contábeis de alta qualidade, oferecendo soluções
                  personalizadas para empresas e condomínios. Seu compromisso
                  com a excelência e a inovação a torna uma parceira estratégica
                  para o sucesso empresarial.
                </p>
              </Link>
            </div>
          </div>
          <Link href="https://wa.me/5579996121721?text=Olá, gostaria de ver os planos para ser patrocinador do CODEP 2025.">
            <button className="flex justify-center items-center w-[300px] bg-white rounded-full text-[#E11D61] text-lg py-4 mt-8 mx-auto">
              <p className={`${tomorrow.className} font-bold`}>
                Quero ser um patrocinador
              </p>
            </button>
          </Link>
        </div>
      </div>

      {/* LOCAL DO EVENTO */}
      <div
        className={`w-full py-6 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="w-full lg:w-4/5 text-center mx-auto px-8">
          <h1 className="flex items-center justify-center text-3xl text-white">
            <BsGeoAlt className="text-4xl lg:text-4xl mr-4" />
            Local do evento
          </h1>
          <div className="w-full lg:w-4/5 text-center mx-auto mt-4">
            <iframe
              className="mx-auto"
              src="https://drive.google.com/file/d/1imilTDQ0oCUxk7BCDNX0Om14RuKnpg7u/preview"
              width="300"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="w-full lg:w-2/4 mx-auto">
            <p className="text-[16px] sm:text-lg text-white mt-2 text-justify">
              O palco do nosso CODEP 2025 será o{" "}
              <span className="text-[#E8C25A] font-bold">
                Centro de Eventos João Augusto Gama
              </span>
              , situado nas dependências do{" "}
              <span className="text-[#E8C25A] font-bold">Hotel Arcus</span>{" "}
              próximo a orla de Atalaia.
            </p>
          </div>
          <div className="lg:px-16 xl:px-32 mt-4" style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="500"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pt-br&amp;q=Centro%20de%20conven%C3%A7%C3%B5es%20Jo%C3%A3o%20Augusto%20Gama+(Hotel%20Arcus%20-%20Centro%20de%20Conve%C3%A7%C3%B5es%20Jos%C3%A9%20Augusto%20Gama)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="mx-auto"
            ></iframe>
          </div>
        </div>
      </div>

      {/* PERGUNTAS FRENQUENTES */}
      <div
        className={`w-full py-6 px-2 bg-gradient-to-b from-[#080204] via-[#000] to-[#120608] ${tomorrow.className}`}
      >
        <div className="w-full lg:w-3/4 mx-auto p-8">
          <h1 className="text-2xl sm:text-3xl text-white text-center mb-10">
            Perguntas Frenquentes
          </h1>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Quais são as formas de pagamento disponíveis?"
              classNames={{ title: "text-[#E8C25A]" }}
            >
              <p className="text-white">
                O pagamento está disponível via PIX e Cartão de crédito. <br />
                <br />
                Para pagamentos via Pix entrar em contato com nossa equipe via
                WhatsApp no (79) 9 9612-1721 - Andrea Sales.
                <br />
                <br />
                Pagamentos via Cartão possui acréscimo estabelecido pela
                plataforma de vendas sendo parcelado em até 10x
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Como recebo o meu ingresso?"
              classNames={{ title: "text-[#E8C25A]" }}
            >
              <p className="text-white">
                Para ingressos adquiridos via PIX você recebe no momento da
                compra através de nossa equipe no WhatsApp.
                <br />
                <br />
                Para ingressos adquiridos via plataforma de vendas você receberá
                em seu e-mail logo após a finalização da compra.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Qual a data e o local do CODEP/SE 2025?"
              classNames={{ title: "text-[#E8C25A]" }}
            >
              <p className="text-white">
                A edição do CODEP/SE 2025 vai acontecer nos dias 18 e 19 de
                julho de 2025, no centro de eventos João Augusto Gama situado
                nas dependências do Hotel Arcus.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#120608] via-[#000] to-[#080204] p-1">
        <div className="flex flex-col flex-wrap py-3 text-white text-sm sm:text-base items-center text-center sm:w-3/4 sm:mx-auto">
          <Image src="/LA-Logo.webp" className="py-2" width={80} height={56} />
          <p className="pt-2">
            Copyright © LA - Consultoria e Treinamento {ano}
          </p>
        </div>
      </div>
    </>
  );
}
