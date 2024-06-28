"use client";
import Image from "next/image";
import style from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [shows, setShows] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  const handleShowsMenu = () => {
    setShows(true);
    setAnimate(true);
  };

  const handleShowsHiden = () => {
    setTimeout(() => {
      setAnimate(false);
    }, 100);
    setTimeout(() => {
      setShows(false);
    }, 400);
  };

  const handleMenuMobile = () => {};

  return (
    <div className={style.wraper}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <Image
            src={"/assets/navbar_logo.png"}
            width={160}
            height={160 * 0.215}
            alt="Companhia de Copas - Logo"
          />
        </Link>
        <div className={`${style.links} ${style.desktop}`}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>Sobre</Link>
          <span
            className={style.shows_container}
            onMouseEnter={handleShowsMenu}
            onMouseLeave={handleShowsHiden}
          >
            <Link href={"#"}>Espetáculos</Link>
            {shows && (
              <span
                className={`${style.shows} ${
                  animate ? style.animaIn : style.animaOut
                }`}
              >
                <Link href={"/shows/pequena-magdalena"}>Pequena Magdalena</Link>
                <Link href={"/shows/meu-amigo-inventor"}>
                  Meu Amigo Inventor
                </Link>
                <Link href={"/shows/hugo-os-imaginarios-e-a-cidade-do-medo"}>
                  Hugo, os Imaginários e a Cidade do Medo
                </Link>
                <Link href={"/shows/a-menina-do-lenco-rosa"}>
                  A Menina do Lenço Rosa
                </Link>
              </span>
            )}
          </span>
          {/* <Link href={"/schedule"}>Agenda</Link> */}
          <Link href={"/contact"}>Contato</Link>
        </div>
        <div className={style.mobile}>
          <img
            src={"/assets/icon_menu.svg"}
            alt="menu"
            onClick={handleMenuMobile}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
