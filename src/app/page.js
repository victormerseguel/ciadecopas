import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import About from "./components/About";
import Shows from "./components/Shows";
import MenuMobile from "./components/MenuMobile";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Shows />
    </div>
  );
}
