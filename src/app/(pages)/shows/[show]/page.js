"use client";
import style from "./page.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { shows_db } from "@/app/db/shows_db";
import Header from "./components/Header";
import Synopsis from "./components/Synopsis";
import Prizes from "./components/Prizes";
import Gallery from "./components/Gallery";
import Credits from "./components/Credits";
import Sponsorship from "./components/Sponsorship";
import Modal from "./components/Modal";

const Show = () => {
  const params = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    shows_db.map((item, ind) => {
      if (item.id === params.show) {
        setShow(ind);
      }
    });
  });

  return (
    <>
      {show !== null && (
        <div className={style.show_wraper}>
          <Header show={show} />
          <Synopsis show={show} />
          <Prizes show={show} />
          <Gallery show={show} />
          <Credits show={show} />
          <Sponsorship show={show} />
        </div>
      )}
    </>
  );
};

export default Show;
