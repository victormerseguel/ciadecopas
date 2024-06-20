import style from "./page.module.css";
import Form from "./components/Form";
import Friends from "./components/Friends";
import Header from "./components/Header";

const page = () => {
  return (
    <div>
      <Header />
      <div className={style.grid}>
        <Friends />
        <Form />
      </div>
    </div>
  );
};

export default page;