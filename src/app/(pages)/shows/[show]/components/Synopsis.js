import style from "./Synopsis.module.css";
import Image from "next/image";
import { shows_db } from "@/app/db/shows_db";

const Synopsis = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <div style={{ position: "relative" }} className={style.synopsis_wraper}>
      <Image
        src={showDB.synopsis_bg}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className={`background ${style.image}`}
        sizes="100vw"
        alt="background"
      />
      <div>
        {showDB.synopsis_text.split("\n").map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default Synopsis;
