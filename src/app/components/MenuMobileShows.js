"use client";
import style from "./MenuMobileShows.module.css";
import { Fragment, useContext } from "react";
import { Context } from "../hooks/Context";
import Link from "next/link";
import Image from "next/image";

const MenuMobileShows = () => {
  const { setMobile, mobileShows, setMobileShows } = useContext(Context);

  const handleClose = () => {
    setMobile(false);
  };
  const handleBack = () => {
    setMobileShows(false);
  };

  const handleClick = () => {
    handleClose();
    handleBack();
  };

  return (
    <Fragment>
      {mobileShows && (
        <div className={style.wrap}>
          <Image
            src={"/assets/about_bg.jpg"}
            fill
            sizes="100vw"
            alt="background"
            className="background"
          />
          <div className={style.head}>
            <Image
              src={"/assets/mobile_back.svg"}
              width={50}
              height={50}
              onClick={handleBack}
              className={style.back}
              alt="voltar"
            />
            <p>Espetáculos</p>
          </div>
          <nav>
            <Link href={"/shows/pequena-magdalena"} onClick={handleClick}>
              Pequena Magdalena
            </Link>
            <Link href={"/shows/meu-amigo-inventor"} onClick={handleClick}>
              Meu Amigo Inventor
            </Link>
            <Link
              href={"/shows/hugo-os-imaginarios-e-a-cidade-do-medo"}
              onClick={handleClick}
            >
              Hugo, os Imaginários e a Cidade do Medo
            </Link>
            <Link href={"/shows/a-menina-do-lenco-rosa"} onClick={handleClick}>
              A Menina do Lenço Rosa
            </Link>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default MenuMobileShows;
