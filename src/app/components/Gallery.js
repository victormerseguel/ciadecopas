import style from "./Gallery.module.css";
import { shows_db } from "../db/shows_db";
import Image from "next/image";

const Gallery = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <div style={{ position: "relative" }}>
      <Image
        src={showDB.gallery_bg}
        fill
        alt="background"
        className="background"
        objectFit="cover"
      />
      <div className={style.gallery_content}>
        {showDB.teaser_video && (
          <div className={style.teaser}>
            <h3>Teaser</h3>
            <div className={style.iframe}>
              <iframe
                src={showDB.teaser_video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
        <div className={style.gallery}>
          <h3>Galeria</h3>
          <div className={style.gallery_imgs}>
            {showDB.gallery_imgs.map((img) => (
              <Image src={img} alt="Fotos" width={200} height={200} key={img} />
            ))}
          </div>
        </div>
        {showDB.interview_video && (
          <div className={style.interview}>
            <h3>Entrevista - Atilio Bari</h3>
            <div className={style.iframe}>
              <iframe
                src={showDB.interview_video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
