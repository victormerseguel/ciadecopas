import style from "./Modal.module.css";
import Image from "next/image";
import { shows_db } from "@/app/db/shows_db";

const Modal = ({ show, photo, setModal }) => {
  const showDB = shows_db[+show];

  const handleEscape = () => {
    setModal(false);
  };

  return (
    <div className={style.wraper} onClick={handleEscape}>
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
        />
      </div>
      <p>autor</p>
    </div>
  );
};

export default Modal;
