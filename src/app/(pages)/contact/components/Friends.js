import Image from "next/image";
import style from "./Friends.module.css";

const Friends = () => {
  return (
    <div className={style.wraper}>
      <h4>Vamos ser amigos?</h4>
      <p>siga-nos no Instagram</p>
      <div className={style.instagram}>
        <Image
          src={"/assets/contacts_instagram.svg"}
          width={35}
          height={35}
          alt="Instagram"
        />
        <p>
          @<span>ciadecopas</span>
        </p>
      </div>
      <p>
        A <span className={style.name}>Companhia de Copas</span> está situada em
        Cascais, Portugal.
      </p>
    </div>
  );
};

export default Friends;
