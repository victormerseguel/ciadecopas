import Image from "next/image";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.wraper} style={{ position: "relative" }}>
      <Image
        src={"/assets/contacts_header_bg.jpg"}
        fill
        className="background"
        style={{ objectFit: "cover" }}
        alt="background"
      />
      <div className={style.content}>
        <h3>Fale Conosco</h3>
        <Image
          src={"/assets/home_logo.png"}
          width={100}
          height={100 * 0.613}
          alt="Logo Companhia de Copas"
        />
      </div>
    </div>
  );
};

export default Header;
