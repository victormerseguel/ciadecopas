"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { Head } from "next/document";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/assets/home_header_bg.jpg"
        fill
        sizes="100vw"
        objectFit="cover"
        className="background"
      />
      <div className={styles.header_content}>
        <Image
          src={"/assets/home_logo.png"}
          width={200}
          height={200 * 0.627}
          alt="Logo Companhaia de Copas"
        />
        <h2>
          Os olhares sobre o ser humano e sua evolução <br />
          São o que nos interessa, o que nos faz criar.
        </h2>
      </div>
    </header>
  );
};
