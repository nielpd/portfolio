'use client';
import { useState } from "react";
import emailjs from '@emailjs/browser';

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
    <div className="w-full max-w-[420px] bg-[#282828] mx-auto p-6 lg:p-12 rounded-md mt-12 lg:mt-24 sm:max-w-[90%] md:max-w-[80%]">
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-2xl lg:text-3xl mb-6">Get In Touch</h1>
        <p className="text-[#5B5B5B] text-lg lg:text-xl mb-12">
        I am currently looking for opportunities as a Junior Developer. Feel free to contact me using the form below or through my social media.
        </p>
        <form onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-[#3F3F3F] rounded-md h-12 text-zinc-400 p-2"
          />
          <input
            type="email"
            id="email"
            placeholder="Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#3F3F3F] rounded-md h-12 text-zinc-400 p-2"
          />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Write your message here! 🚀"
            className="bg-[#3F3F3F] rounded-md h-[200px] p-4 resize-none text-zinc-400"
          />
          <button 
            type="submit" 
            className="w-full h-12 bg-[#922828] text-white font-semibold rounded-md hover:bg-white hover:text-[#922828] transition ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
