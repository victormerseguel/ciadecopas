import style from "./Modal.module.css";
import Image from "next/image";
import { shows_db } from "@/app/db/shows_db";
import { useState } from "react";

const Modal = ({ show, photo, setPhotoInd, setModal }) => {
  const showDB = shows_db[+show];
  const gallery_length = showDB.gallery_imgs.length - 1;
  const [next, setNext] = useState(style.animaInNext);

  const handleEscape = () => {
    setModal(false);
    document.body.style.overflow = "scroll";
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setNext(style.animaOutNext);
    setTimeout(() => {
      photo === gallery_length
        ? console.log(setPhotoInd(0))
        : console.log(setPhotoInd(+photo + 1));
      setNext(style.animaInNext);
    }, 300);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();

    setNext(style.animaOutPrevious);
    setTimeout(() => {
      photo === 0
        ? console.log(setPhotoInd(gallery_length))
        : console.log(setPhotoInd(+photo - 1));
      setNext(style.animaInPrevious);
    }, 300);
  };

  return (
    <div className={style.wraper} onClick={handleEscape}>
      <Image
        src={"/assets/icon_close.svg"}
        width={48}
        height={48}
        alt="close"
        className={style.close}
      />
      <div className={style.content_wraper}>
        <Image
          src={"/assets/icon_arrow_forward.svg"}
          width={50}
          height={50}
          alt="Previous"
          className={style.previous}
          onClick={(e) => handlePrevious(e)}
        />
        <div
          className={`${style.content} ${
            showDB.gallery_imgs[1] === "vertical"
              ? style.vertical
              : style.horizontal
          }`}
        >
          <Image
            src={showDB.gallery_imgs[photo][0]}
            fill
            alt="Photo"
            onClick={(e) => e.stopPropagation()}
            className={`${next}`}
            sizes="80vw"
          />
        </div>
        <Image
          src={"/assets/icon_arrow_forward.svg"}
          width={50}
          height={50}
          alt="Next"
          className={style.next}
          onClick={(e) => handleNext(e)}
        />
      </div>
      <p>{showDB.gallery_imgs[photo][2]}</p>
    </div>
  );
};

export default Modal;
