"use client";
import style from "./Header.module.css";
import { useParams } from "next/navigation";
import { shows_db } from "@/app/db/shows_db";
import { useEffect, useState } from "react";
import Image from "next/image";

const Header = ({ show }) => {
  const showDB = shows_db[+show];

  return (
    <header className={style.header_wraper}>
      <div className={style.img_cover}>
        <Image
          src={showDB.cover_img[0]}
          fill
          style={{ objectFit: "cover", objectPosition: showDB.cover_img[1] }}
          className="background"
          sizes="100vw"
          priority
          alt="background"
        />
        {showDB.title_img && (
          <div
            style={{ maxWidth: `${showDB.title_dimensions[0]}px` }}
            className={style.title}
          >
            <div
              style={{
                // width: "100%",
                Width: `${showDB.title_dimensions[0]}px`,
                paddingTop: `${showDB.title_dimensions[1]}%`,
                position: "relative",
              }}
              className={style.title_content}
            >
              <Image
                src={showDB.title_img}
                fill
                alt="title"
                priority
                sizes="100%"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
