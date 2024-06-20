"use client";
import style from "./Shows.module.css";
import ShowCard from "./ShowCard";
import Image from "next/image";

const Shows = () => {
  const images = [
    {
      name: "Meu Amigo Inventor",
      src: "/assets/home_shows_0.png",
      slug: "meu-amigo-inventor",
    },
    {
      name: "Pequena Magdalena",
      src: "/assets/home_shows_1.png",
      slug: "pequena-magdalena",
    },
    {
      name: "Hugo, os Imaginários e a Cidade do Medo",
      src: "/assets/home_shows_3.png",
      slug: "hugo-os-imaginarios-e-a-cidade-do-medo",
    },
    {
      name: "A Menina do Lenço Rosa",
      src: "/assets/home_shows_2.png",
      slug: "a-menina-do-lenco-rosa",
    },
  ];

  return (
    <div className={style.shows_wraper}>
      <Image
        src={"/assets/home_shows_bg.jpg"}
        fill
        alt="background"
        className="background"
      />
      <h3>Espetáculos</h3>
      <div className={style.cards}>
        {images.map((card) => (
          <ShowCard image={card} key={card.slug} />
        ))}
      </div>
    </div>
  );
};

export default Shows;
