import Image from "next/image";
import style from "./Prizes.module.css";
import { shows_db } from "@/app/db/shows_db";
import { Fragment } from "react";

const Prizes = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <div className={style.prizes_wraper} style={{ position: "relative" }}>
      <Image
        src={showDB.prizes_bg}
        fill
        objectFit="cover"
        objectPosition="center"
        className="background"
        alt="background"
      />
      <div className={style.bg_filter}></div>
      <div className={style.prizes}>
        {showDB.prizes &&
          showDB.prizes.map((prize) => (
            <Image
              src={prize}
              width={234}
              height={93}
              alt="Prêmio"
              key={prize}
            />
          ))}
      </div>
      <div className={style.reviews}>
        {showDB.reviews.map((review) => (
          <div key={review.text}>
            <p className={style.text}>{review.text}</p>
            <p className={style.author}>{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
