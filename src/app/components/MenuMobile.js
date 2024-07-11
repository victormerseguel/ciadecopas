"use client";
import style from "./MenuMobile.module.css";

import { Context } from "../hooks/Context";
import { Fragment, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const MenuMobile = () => {
  const { mobile, setMobile, setMobileShows } = useContext(Context);

  const handleClose = () => setMobile(false);

  const handleShows = () => setMobileShows(true);

  return (
    <Fragment>
      {mobile && (
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
              src={"/assets/mobile_logo.png"}
              width={174}
              height={48}
              alt="Logo Comanhia de Copas"
            />
            <Image
              src={"/assets/mobile_icon_close.svg"}
              width={50}
              height={50}
              onClick={handleClose}
              className={style.close}
              alt="fechar"
            />
          </div>
          <nav>
            <Link href={"/"} onClick={handleClose}>
              Home
            </Link>
            <Link href={"/about"} onClick={handleClose}>
              Sobre
            </Link>
            <Link href={"#"} onClick={handleShows}>
              Espetáculos
            </Link>
            <Link href={"/contact"} onClick={handleClose}>
              Contato
            </Link>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default MenuMobile;
