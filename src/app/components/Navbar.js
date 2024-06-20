"use client";
import Image from "next/image";
import style from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [shows, setShows] = useState(false);

  const handleShowsMenu = () => {
    setShows(true);
  };

  const handleShowsHiden = () => {
    setTimeout(() => {
      setShows(false);
    }, 100);
  };

  return (
    <div className={style.wraper}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <Image
            src={"/assets/navbar_logo.png"}
            width={160}
            height={160 * 0.215}
          />
        </Link>
        <div className={style.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>Sobre</Link>
          <span
            className={style.shows_container}
            onMouseEnter={handleShowsMenu}
            onMouseLeave={handleShowsHiden}
          >
            <Link href={"/shows"}>Espetáculos</Link>
            {shows && (
              <span className={style.shows}>
                <Link href={"/shows/meu-amigo-inventor"}>
                  Meu Amigo Inventor
                </Link>
                <Link href={"/shows/pequena-magdalena"}>Pequena Magdalena</Link>
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
      </nav>
    </div>
  );
};

export default Navbar;
