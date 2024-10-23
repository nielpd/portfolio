'use client'
import { FaGlobe, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiReact, SiNestjs, SiNodedotjs, SiTailwindcss, SiPrisma, SiTurborepo, SiDrizzle, SiFastify } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "TechStore",
    description: `A T3chStore é uma loja eletrônica desenvolvida com foco em 
    desempenho, modernidade e eficiência. O projeto utiliza uma stack 
    robusta e atual, combinando TypeScript para segurança no desenvolvimento,
    React para uma interface web dinâmica e responsiva, e React Native 
    para proporcionar uma experiência móvel fluida. No back-end, a aplicação 
    é alimentada por NestJS e Node.js, oferecendo uma estrutura modular 
    e escalável. Para estilização, usamos TailwindCSS, garantindo um design 
    minimalista e altamente customizável. O banco de dados é gerenciado 
    com PostgreSQL e Prisma ORM, facilitando a manipulação de dados 
    de forma eficiente. A build do projeto é otimizada com Turborepo, 
    garantindo rapidez e flexibilidade no desenvolvimento monorepo.`,
    technologies: ["TypeScript", "React", "NestJS", "Node.js", "TailwindCSS", "PostgreSQL", "Prisma ORM", "Turborepo"],
    icons: [
      { component: SiTypescript, name: "TypeScript" },
      { component: SiReact, name: "React" },
      { component: SiNestjs, name: "NestJS" },
      { component: SiNodedotjs, name: "Node.js" },
      { component: FaDatabase, name: "Database" },
      { component: BiLogoPostgresql, name: "PostgreSQL" },
      { component: SiPrisma, name: "PrismaORM" },
      { component: SiTurborepo, name: "Turborepo" },
      { component: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
  {
    name: "InOrbit",
    description: `InOrbit é uma aplicação para gerenciar metas de forma simples e eficiente, 
    utilizando TypeScript tanto no front-end quanto no back-end, 
    garantindo tipagem e segurança em toda a aplicação. No front-end, React
    oferece uma interface intuitiva para acompanhar o progresso das metas, enquanto no back-end, 
    Fastify e Node.js proporcionam uma API rápida e robusta. O gerenciamento de dados é feito
    com PostgreSQL e Drizzle ORM, permitindo interações eficientes e seguras com o banco de dados. 
    TailwindCSS é usado para estilizar a aplicação, proporcionando um design moderno e responsivo.`,
    technologies: ["TypeScript", "React", "Fastify", "Node.js", "TailwindCSS", "PostgreSQL", "Drizzle ORM"],
    icons: [
      { component: SiTypescript, name: "TypeScript" },
      { component: SiReact, name: "React" },
      { component: SiNodedotjs, name: "Node.js" },
      { component: SiFastify, name: "Fastify" },
      { component: FaDatabase, name: "Database" },
      { component: BiLogoPostgresql, name: "PostgreSQL" },
      { component: SiDrizzle, name: "DrizzleORM" },
      { component: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
];

function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  useLayoutEffect(() => {
    gsap.fromTo(".project-item", {
      opacity: 0,
      y: 100,
    }, {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 300px",
        end: "bottom 600px",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      stagger: 0.5
    })
  }, [])

  return (
    <div className="relative flex justify-center items-center group">
      {children}
      <span className="absolute bottom-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

export default function Projects() {
  const highlightTechnologies = (description: string, technologies: string[]) => {
    let highlightedDescription = description;
    technologies.forEach((tech) => {
      const regex = new RegExp(`\\b${tech}\\b`, "g");
      highlightedDescription = highlightedDescription.replace(regex, `<span style="color: #6672F6;"><b>${tech}</b></span>`);
    });
    return highlightedDescription;
  };
  

  return (
    <div className="flex flex-col p-12 projects">
      <h1 className="text-zinc-500 font-semibold text-start pb-12 text-xl">Projetos</h1>
      {projects.map((project, index) => (
        <div key={index} className="w-1/2 flex flex-col text-start gap-4 mb-8 project-item">
          <h1 className="text-white font-bold text-2xl flex gap-4 items-center">
            {project.name} <FaGlobe />
          </h1>
          <p
            className="text-[#FFFFFF]"
            dangerouslySetInnerHTML={{
              __html: highlightTechnologies(project.description, project.technologies),
            }}
          ></p>
          <span className="text-zinc-500 text-3xl flex gap-4 font-bold">
            {project.icons.map((icon, i) => {
              const IconComponent = icon.component;
              return (
                <Tooltip key={i} text={icon.name}>
                  <IconComponent className="hover:transition ease-in-out hover:scale-110 hover:text-[#4A2E8A]" />
                </Tooltip>
              );
            })}
          </span>
        </div>
      ))}
    </div>
  );
}