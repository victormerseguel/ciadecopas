import Link from "next/link";
import style from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Image
        src={"/assets/footer_logo.png"}
        width={150}
        height={150 * 0.217}
        alt="Logo Companhia de Copas"
      />
      <div className={style.links}>
        <Link href={"https://www.instagram.com/ciadecopas"} target="_blank">
          <Image
            src={"/assets/footer_instagram.svg"}
            width={26}
            height={26}
            alt="Instagram"
          />
        </Link>
        {/* <Link href={"https://www.instagram.com/ciadecopas"} target="_blank">
          <Image
          src={"/assets/footer_phone.svg"}
          width={26}
          height={26}
          alt="Telefone"
          />
          </Link> */}
        <Link href={"mailto:ciadecopas@gmail.com"} target="_blank">
          <Image
            src={"/assets/footer_email.svg"}
            width={26}
            height={26}
            alt="E-mail"
          />
        </Link>
      </div>
      <div className={style.legal_text}>
        <p>
          © Copyright 2011 - 2024 companhia de copas | todos os direitos
          reservados
        </p>
        <p>política de privacidade | termos de uso</p>
      </div>
    </div>
  );
};

export default Footer;
