import Image from "next/image";
import { shows_db } from "../../../../db/shows_db";
import style from "./Credits.module.css";
import { Fragment } from "react";

const Credits = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <div className={style.credits_wraper} style={{ position: "relative" }}>
      <Image
        src={showDB.credits_bg}
        fill
        objectFit="cover"
        objectPosition="center"
        className="background"
        alt="background"
      />
      <div className={style.bg_filter}></div>
      <div className={style.credits_content}>
        <h3>Ficha Técnica</h3>
        <div className={style.credits}>
          {showDB.credits.map((credit) => (
            <p key={credit[0]} className={style.credit}>
              <span className={style.function}>{credit[0]}</span>{" "}
              <span className={style.artist}>{credit[1]}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credits;
