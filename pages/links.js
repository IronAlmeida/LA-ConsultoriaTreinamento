import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/links.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function links() {
  useEffect(() => {
    // Adiciona a classe ao body quando a página é montada
    document.body.classList.add(styles.Body);
    let data = new Date();
    const anoAtual = data.getFullYear();

    document.getElementById(
      "footer"
    ).innerHTML = `Lourdes Almeida - LA Consultoria e Treinamento | ${anoAtual}`;

    return () => {
      document.body.classList.remove(styles.Body);
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-[588px] mt-14 mx-auto mb-0 py-0 px-6">
        <div className="flex justify-center text-center p-3">
          <Image src="/LA-LOGO.png" width={112} height={84} />
        </div>

        <ul className="flex flex-col gap-4 py-2 px-0">
          <li>
            <a
              className="flex items-center justify-center py-4 px-6 background-links border border-solid border-[#d9bb68] rounded-lg backdrop font-bold text-sm"
              target="_blank"
              href={"https://www.even3.com.br/previdencia-em-foco/"}
            >
              CURSO: PREVIDÊNCIA EM FOCO - 09/11
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center py-4 px-6 background-links border border-solid border-[#d9bb68] rounded-lg backdrop font-bold"
              target="_blank"
              href={"https://lourdesalmeidadp.com.br/"}
            >
              <TbWorld className="mr-[10px] text-[20px]" /> Site
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center py-4 px-6 background-links border border-solid border-[#d9bb68] rounded-lg backdrop font-bold"
              target="_blank"
              href={"https://api.whatsapp.com/send?phone=5579999839846"}
            >
              <FaWhatsapp className="mr-[10px] text-[20px]" />
              Whastapp
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center py-4 px-6 background-links border border-solid border-[#d9bb68] rounded-lg backdrop font-bold"
              target="_blank"
              href={"https://www.instagram.com/lourdesalmeidadp/"}
            >
              <FaInstagram className="mr-[10px] text-[20px]" />
              Instagram
            </a>
          </li>
        </ul>

        <footer className="py-6 px-0 text-center text-sm">
          <p id="footer"></p>
        </footer>
      </div>
    </>
  );
}
