import Image from "next/image";
import style from "./page.module.css";
import { about, luciana, victor } from "@/app/db/about_db";

const About = () => {
  return (
    <div className={style.wraper}>
      <Image
        src={"/assets/about_bg.jpg"}
        fill
        style={{ objectFit: "cover" }}
        alt="background"
        className="background"
        sizes="100vw"
      />
      <div className={style.content}>
        <div className={style.cia}>
          <h3>Sobre</h3>
          <div>
            {about.split("\n").map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className={style.artist}>
          <h3>Quem Somos</h3>
          <div className={style.luciana}>
            <Image
              src={"/assets/about_luciana.png"}
              width={250}
              height={260}
              alt="Luciana Castellano"
              quality={90}
            />
            <div>
              <h4>Luciana</h4>
              <p>{luciana}</p>
            </div>
          </div>
          <div className={style.victor}>
            <div>
              <h4>Victor</h4>
              <p>{victor}</p>
            </div>
            <Image
              src={"/assets/about_victor.png"}
              width={250}
              height={260}
              alt="Victor Merseguel"
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
