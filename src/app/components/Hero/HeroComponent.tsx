'use client';
import Image from "next/image";
import logo from '/src/app/assets/hero/logo.jpg'
import Link from "next/link";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaAngleDoubleDown, FaDocker, FaGitAlt, FaJsSquare, FaNodeJs, FaReact,  } from "react-icons/fa";
import { SiVite, SiNestjs, SiTypescript } from "react-icons/si";


function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="relative flex justify-center items-center group">
      {children}
      <span className="absolute bottom-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
      
      
    <div className="h-screen w-full flex flex-col justify-center items-center bg-zinc-900 text-center md:text-left px-6 md:px-20">
      <div className="justify-center flex mb-4">
        <Image src={logo} alt="Logo" className="logo border-2 border-red-600 mb-4" width={100} height={100}/>
      </div>
      <div className="text-center">
        <p className="text-md">Hello World! <span className="animate-wave inline-block">👋</span>, My name is <span className="text-red-600">Daniel Assis</span> and I am</p>
        <h1 className="2xl:text-6 xl text-4xl font-bold mt-4">Software Engineer</h1>
        <p className="text-md w-fit mt-4 text-zinc-700 font-semibold">I transform needs into real, engaging and functional applications. I develop systems
        <br/> through my passion for technology, contributing to innovative and effective solutions.
        </p>
      </div>
      <div className="justify-center flex mt-6 gap-6">
        <div className="rounded-full flex items-center gap-2 p-3 cursor-pointer bg-zinc-700 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Link href={"https://github.com/nielassis"} target="_blank" className="flex gap-2 items-center">
          <BsGithub className="text-white text-md"/>
          <h1>Github</h1>
          </Link>
        </div>

        <div className="rounded-full flex items-center gap-2 p-3 cursor-pointer bg-zinc-700 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Link href={"https://wa.link/osr8cz"} target="_blank" className="flex gap-2 items-center">
          <BsWhatsapp className="text-white text-md"/>
          <h1>WhatsApp</h1>
          </Link>
        </div>

        <div className="rounded-full flex items-center gap-2 p-3 cursor-pointer bg-zinc-700 hover:scale-110 transition-transform duration-300 ease-in-out">
          <Link href={"https://linkedin.com/in/nielassis"} target="_blank" className="flex gap-2 items-center">
          <BsLinkedin className="text-white text-md"/>
          <h1>LinkedIn</h1>
          </Link>
        </div>
      </div>



      <div className="flex justify-center items-center gap-4 mt-12 text-2xl md:text-3xl flex-wrap mb-12">
        <Tooltip text="JavaScript">
          <FaJsSquare className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="TypeScript">
          <SiTypescript className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="Node.js">
          <FaNodeJs className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="Vite">
          <SiVite className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="NestJS">
          <SiNestjs className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="React">
          <FaReact className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="Git">
          <FaGitAlt className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
        <Tooltip text="Docker">
          <FaDocker className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#922828]" />
        </Tooltip>
      </div>
    <FaAngleDoubleDown  className="position-absolute animate-bounce text-5xl mt-6"/>
    </div>
  );
}
