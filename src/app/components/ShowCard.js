"use client";
import Image from "next/image";
import style from "./ShowCard.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ShowCard = ({ image }) => {
  const route = useRouter();

  return (
    <div
      className={style.card_wrap}
      onClick={() => route.push(`/shows/${image.slug}`)}
    >
      <Image
        src={image.src}
        alt={image.name}
        width={400}
        height={400 * 0.496}
        quality={100}
      />
      <p>{image.name}</p>
    </div>
  );
};

export default ShowCard;
