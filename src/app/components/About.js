"use client";
import Image from "next/image";
import style from "./About.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div className={style.about}>
      <div className={style.left}>
        <h1>A Companhia de Copas</h1>
        <p>
          é uma companhia teatral especializada na pesquisa do desenvolvimento
          humano, principalmente da infância e juventude, com espetáculos
          autorais e uma trajetória de 13 anos de experiência. Nascida no Brasil
          em 2011, é responsável por espetáculos que abordam questões inerentes
          ao nossos tempos modernos, como bullying, a relação com eletrônicos, a
          solidão na infância e juventude, a autoaceitação, a autoimagem e muito
          mais. Mas tudo de uma maneira leve, divertida e emocionante. Os
          espetáculos da Companhia de Copas são criados de forma que tocam a
          todos, dos mais novos ao mais experientes.
        </p>
        <button onClick={() => router.push("/about")}>
          Mais sobre a Companhia
        </button>
      </div>
      <div className={style.right}>
        <Image
          src={"/assets/home_about.jpg"}
          fill
          alt="Victor e Luciana da Companhia de Copas"
          sizes="50vw"
          objectFit="cover"
          objectPosition="top"
          className="background"
        />
      </div>
    </div>
  );
};

export default About;
