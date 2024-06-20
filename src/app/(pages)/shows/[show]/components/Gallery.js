import style from "./Gallery.module.css";
import { shows_db } from "../../../../db/shows_db";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

const Gallery = ({ show }) => {
  const showDB = shows_db[+show];
  const [photoInd, setPhotoInd] = useState();
  const [modal, setModal] = useState(false);

  const handlePhotoClick = ({ target }) => {
    setPhotoInd(target.id);
    setModal(true);
    document.body.style.overflow = "hidden";
  };

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
            {showDB.gallery_imgs.map((img, ind) => (
              <div className={style.photo} key={img[0]}>
                <Image
                  src={img[0]}
                  alt="Fotos"
                  fill
                  objectFit="cover"
                  sizes="200px"
                  id={ind}
                  onClick={(e) => handlePhotoClick(e)}
                />
              </div>
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
      {modal && (
        <Modal
          show={show}
          photo={photoInd}
          setPhotoInd={setPhotoInd}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Gallery;
