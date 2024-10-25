'use client'
import { useLayoutEffect } from "react";
import { FaUser } from "react-icons/fa";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { BsCodeSlash } from "react-icons/bs";
import type { IconType } from "react-icons";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".habilities-item",  {
        opacity: 0,
        y: 100,
      },
    {
      scrollTrigger: {
        trigger: ".habilities",
        start: "top 520px",
        end: "bottom 600px",
        scrub: true,
      },
      stagger: .5,
      opacity: 1,
      y: 0,
      duration: 1,
      scrollBehavior: "smooth",
    })
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".training-item", {
        opacity: 0,
        scale: 0.5,
      },
    {
      scrollTrigger: {
        trigger: ".training",
        start: "top 520px",
        end: "bottom 600px",
        scrub: true,
      },
      stagger: 5,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "Power3.out",
      scrollBehavior: "smooth",
    })
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".about", {
        opacity: 0,
        x: -100,
      },
    {
      scrollTrigger: {
        trigger: ".about",
        start: "top 520px",
        end: "bottom 600px",
        scrub: true,
      },
      stagger: .5,
      opacity: 1,
      x: 0,
      ease: "Power3.out",
      scrollBehavior: "smooth",
    })
  }, []);


  const habilities = [
    {
      title: "Trabalho em equipe",
      icons: [{ component: FaUser }],
      description:
        "Gosto de colaborar com outras pessoas, aprendendo e compartilhando conhecimento para alcançar os melhores resultados em conjunto.",
    },
    {
      title: "Criatividade e aprendizagem contínua",
      icons: [{ component: PiAirplaneTakeoffFill }],
      description:
        "Sempre estou em busca de novas formas de resolver problemas e me mantenho atualizado, aprendendo continuamente novas tecnologias e ferramentas.",
    },
    {
      title: "Adaptabilidade",
      icons: [{ component: BsCodeSlash }],
      description:
        "Estou sempre aberto a aprender novas tecnologias e me ajustar a situações, vejo mudanças como oportunidades para solucionar desafios inesperados.",
    },
  ];

  const trainings = [
    {
      title: "Técnico em Desenvolvimento WEB",
      school: "SENAI CPF Pedro Martins Guerra",
      type: "Nivel: Técnico",
      year: "2023-2024",
    },
    {
      title: "Projeto Desenvolve",
      school: "Projeto Desenvolve | PMI | Google | UFMG | Microsoft",
      type: "Nivel: Superior",
      year: "2024-2026",
    },
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      school: "SENAI CPF Pedro Martins Guerra",
      type: "Nivel: Técnico",
      year: "2024-2026",
    },
  ];

  return (
    <div className="px-4">
      <div className="flex flex-wrap justify-center items-center gap-4 text-zinc-950 text-center text-sm habilities">
        {habilities.map((hability, index) => (
          <div
            className="habilities-item flex flex-col justify-center items-center gap-4 p-6 md:p-12 shadow-[0px_7px_25px_0px_#000000] bg-[#282828] w-full sm:w-[300px] md:w-[400px] h-[300px] rounded-md"
            key={index}
          >
            <span>
              {hability.icons.map((icon, i) => {
                const IconComponent: IconType = icon.component;
                return (
                  <IconComponent
                    key={i}
                    className="text-3xl text-[#5B5B5B] font-bold"
                  />
                );
              })}
            </span>
            <h1 className="text-lg font-bold text-white truncate pb-2">
              {hability.title}
            </h1>
            <p className="text-[#5B5B5B] text-sm font-semibold">
              {hability.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="about flex flex-col text-start w-full md:w-[600px] h-auto md:h-[560px] justify-center gap-4 mt-24 p-6 md:p-12 shadow-[0px_7px_15px_0px_#000000] rounded-md bg-[#282828]">
          <h1 className="font-bold text-2xl text-white">Sobre Mim</h1>
          <p className="text-[#5B5B5B] text-base font-semibold">
            Desde cedo, sempre fui movido pela curiosidade em relação à
            tecnologia. Meu primeiro contato com o mundo da programação
            aconteceu em 2018, quando eu tinha apenas 12 anos. Foi nesse momento
            que comecei a programar microcontroladores usando as linguagens C e
            C++, o que despertou em mim uma paixão pelo desenvolvimento de
            soluções tecnológicas.
          </p>
          <p className="text-[#5B5B5B] text-base font-semibold">
            Ao longo da minha trajetória, passei por diversas descobertas e
            desafios que moldaram meu crescimento profissional. Cada nova
            ferramenta, linguagem ou framework que aprendi abriu portas para
            trilhas de conhecimento mais profundas. O que começou com a
            programação de hardware evoluiu para o desenvolvimento de sistemas
            completos, tanto no front-end quanto no back-end, com foco na
            criação de soluções eficientes, modernas e escaláveis.
          </p>
          <p className="text-[#5B5B5B] text-base font-semibold">
            Minha jornada tem sido marcada por uma busca constante de
            aprendizado e aperfeiçoamento. Estou sempre explorando novas
            tecnologias e aplicando-as em projetos práticos, o que me permite
            crescer continuamente e aprimorar minhas habilidades.
          </p>
        </div>
        <div className="flex flex-col gap-[50px] md:gap-[75px] mt-24 items-end text-start relative training">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[#922828] pr-2 rounded-xl training-item"></div>{" "}
          {trainings.map((training, index) => {
            return (
              <div
                className="flex flex-col gap-2 shadow-[0px_7px_15px_0px_#000000] h-[136px] w-full md:w-[574px] p-4 rounded-md bg-[#282828] relative training-item"
                key={index}
              >
                <h1 className="text-lg text-white font-bold">{training.title}</h1>
                <p className="text-[#5B5B5B] text-sm font-semibold">
                  {training.school}
                </p>
                <p className="text-[#5B5B5B] text-sm font-semibold">
                  <strong>{training.type}</strong>
                </p>
                <p className="text-[#5B5B5B] text-sm font-semibold">
                  {training.year}
                </p>
                <div className="absolute left-[-16px] top-[50%] transform -translate-y-1/2 bg-[#282828] h-6 w-6 rounded-full border-[2px] border-[#922828]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}