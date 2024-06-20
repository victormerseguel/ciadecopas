import Image from "next/image";
import style from "./Sponsorship.module.css";
import { shows_db } from "@/app/db/shows_db";

const Sponsorship = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <>
      {(showDB.sponsorship_img || showDB.partnership_img) && (
        <div style={{ position: "relative" }}>
          <Image
            src={showDB.synopsis_bg}
            fill
            objectFit="cover"
            alt="background"
            className={`background ${style.background}`}
          />
          <div className={style.sponsor_content}>
            {showDB.sponsorship_img && (
              <div className={style.left}>
                <h3>Patrocínio</h3>
                <div className={style.logos}>
                  {showDB.sponsorship_img.map((sponsor, ind) => (
                    <Image
                      src={sponsor[0]}
                      width={sponsor[1]}
                      height={sponsor[1] * sponsor[2]}
                      quality={100}
                      key={ind}
                    />
                  ))}
                </div>
              </div>
            )}
            {showDB.partnership_img && (
              <div className={style.right}>
                <h3>Apoio</h3>
                <div className={style.logos}>
                  {showDB.partnership_img.map((partner, ind) => (
                    <Image
                      src={partner[0]}
                      width={partner[1]}
                      height={partner[1] * partner[2]}
                      quality={100}
                      key={ind}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsorship;
