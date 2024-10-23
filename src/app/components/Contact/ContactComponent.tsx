'use client'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs.send("service_f1yf4yj", "template_tpjf1mo", templateParams, "_KX8_skQbYUb0DD3S")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
      }, (err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="shadow-[0px_7px_15px_0px_#000000] w-[1230px] h-[700px] text-zinc-950 flex mt-24 p-12 bg-[#282828] rounded-md">
      <div className="flex">
        <form onSubmit={sendEmail} className="gap-12 w-auto">
        <div>
          <div className="flex flex-col gap-4 mb-24 w-[800px]">
            <h1 className="text-white font-bold text-3xl">Contato</h1>
            <p className="text-[#5B5B5B] text-xl font-semibold">Atualmente, Procurando oportunidade como Desenvolvedor Júnior
            Estou Disponível para contato através do formulário abaixo ou redes sociais.</p>
          </div>
          </div>

        <div className="flex flex-row gap-4 w-full">
          <div className="items-center">
          <label htmlFor="name" className="text-white font-semibold pr-4">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-[#3F3F3F] rounded-md h-12 w-64 text-zinc-400"
          />
          </div>
          <div className="items-center">
            <label htmlFor="email" className="text-white font-semibold pr-4">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#3F3F3F] rounded-md h-12 w-64 text-zinc-400"
            />
          </div>
        </div>
          <div className="flex flex-col">
          <div className="mt-6 ">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Escreva aqui sua mensagem! 🚀"
            className="bg-[#3F3F3F] rounded-md w-[665px] h-[300px] p-2 mb-6 resize-none text-zinc-400"
          />
        </div>
        <button type="submit" className="w-80 h-8 flex justify-center items-center border-2 border-[#6672F6] rounded-md p-2 text-white font-semibold hover:transition ease-in-out hover:text-[#6672F6] hover:scale-110 hover:bg-white hover:border-none">Enviar</button>
        </div>
        </form>
      </div>
      <div className="flex flex-col border-l-white border-l-2 justify-center pl-8 gap-8 text-zinc-500">
        <Link href="https://wa.link/osr8cz" target="_blank">
        <button className="flex items-center gap-2 hover:pl-4 hover:transition ease-in-out hover:text-zinc-300">
        <FaWhatsappSquare className="text-4xl"/>
        <h1 className="text-xl font-semibold">Whatsapp Business</h1>
        </button>
        </Link>

        <Link href="https://www.linkedin.com/in/daniel-assis-09a295321/" target="_blank">
        <button className="flex items-center gap-2 hover:pl-4 hover:transition ease-in-out hover:text-zinc-300">
        <FaLinkedin className="text-4xl"/>
        <h1 className="text-xl font-semibold">LinkedIn</h1>
        </button>
        </Link>

        <Link href="https://github.com/nielassis" target="_blank">
        <button className="flex items-center gap-2 hover:pl-4 hover:transition ease-in-out hover:text-zinc-300">
        <FaGithubSquare className="text-4xl"/>
        <h1 className="text-xl font-semibold">GitHub</h1>
        </button>
        </Link>

        <Link href="https://mailto:nielvitorba@gmail.com" target="_blank">
        <button className="flex items-center gap-2 hover:pl-4 hover:transition ease-in-out hover:text-zinc-300">
        <IoMdMail className="text-4xl"/>
        <h1 className="text-xl font-semibold">E-mail</h1>
        </button>
        </Link>
      </div>
    </div>
  );
}
