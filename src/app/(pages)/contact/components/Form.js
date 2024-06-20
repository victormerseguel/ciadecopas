"use client";
import { useState } from "react";
import style from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") return;

    const template_params = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_zwpjk2d",
        "template_v9gus9f",
        template_params,
        "1UZk0dan9L3V9V-1c"
      )
      .then(
        (response) => {
          console.log("Email enviado ", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  };

  return (
    <div className={style.wraper}>
      <h4>ou mande-nos um e-mail</h4>
      <p>Preencha o formulário com sua mensagem que entraremos em contato.</p>
      <form onSubmit={(e) => sendEmail(e)}>
        <label>
          Nome<span>*</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail<span>*</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mensagem<span>*</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
