'use client'
import { FaDatabase, FaGitAlt, FaGithubSquare, FaJsSquare, FaLinkedin, FaNodeJs, FaReact, FaWhatsappSquare } from "react-icons/fa";
import { SiExpress, SiNestjs, SiTypescript } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-t from-[#6672F6] to-[#5C3DAB]">
      <div className="flex flex-col">
        <p className="text-white font-semibold text-3xl uppercase">
          Olá <span className="animate-wave inline-block">👋</span>, Eu sou Niel
        </p>
        <div className="flex flex-row">
          <h2 className="flex items-center gap-4 font-bold text-black text-6xl">
            FULLSTACK
          </h2>
          <span className="flex gap-6 items-center ml-8 text-white">
            <FaLinkedin size={40} className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-black" />
            <FaGithubSquare size={40} className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#000]" />
            <FaWhatsappSquare size={40} className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-black" />
          </span>
        </div>
        <h1 className="text-black text-8xl font-bold">DEVELOPER</h1>
      </div>

      
      <div className="flex justify-center items-center gap-4 mt-12 text-3xl">
        <Tooltip text="JavaScript">
          <FaJsSquare className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="TypeScript">
          <SiTypescript className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="Node.js">
          <FaNodeJs className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="Express">
          <SiExpress className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="NestJS">
          <SiNestjs className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="React">
          <FaReact className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="Database">
          <FaDatabase className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
        <Tooltip text="Git">
          <FaGitAlt className="hover:scale-125 transition-transform duration-300 ease-in-out hover:text-[#4A2E8A]"/>
        </Tooltip>
      </div>

    </div>
  );
}