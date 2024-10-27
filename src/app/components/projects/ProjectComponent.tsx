'use client';
import { FaDatabase } from "react-icons/fa";
import { SiTypescript, SiReact, SiNestjs, SiNodedotjs, SiTailwindcss, SiPrisma, SiTurborepo, SiDrizzle, SiFastify } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";
import Image, { StaticImageData } from 'next/image';
import { BsGithub } from "react-icons/bs";
import inorbit1 from '/src/app/assets/projects/inorbit/inorbit1.png';
import inorbit2 from '/src/app/assets/projects/inorbit/inorbit2.png';
import inorbit3 from '/src/app/assets/projects/inorbit/inorbit3.png';
import gam3rstore1 from '/src/app/assets/projects/techstore/gam3rstore1.png';
import gam3rstore2 from '/src/app/assets/projects/techstore/gam3rstore2.png';
import gam3rstore3 from '/src/app/assets/projects/techstore/gam3rstore3.png';
import gam3rstore4 from '/src/app/assets/projects/techstore/gam3rstore4.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Gam3rStore",
    description: `Gam3rStore is an electronic store developed with a focus on 
    performance, modernity and efficiency. The project uses a stack 
    robust and current, combining TypeScript for development security,
    React for a dynamic and responsive web interface, and React Native 
    to provide a fluid mobile experience. Without back-end, an application 
    is powered by NestJS and Node.js, offering a modular framework 
    and scalable. For styling, we use TailwindCSS, ensuring a 
    minimalist and highly customizable. The database is managed 
    with PostgreSQL and Prisma ORM, facilitating data manipulation 
    efficiently. The project build is optimized with Turborepo, 
    ensuring speed and flexibility in monorepo development.`,
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
    images: [
      gam3rstore1,
      gam3rstore2,
      gam3rstore3,
      gam3rstore4,
    ],
    deployLink: "https://link-do-deploy-do-gam3rstore.com",
    gitLink: "https://github.com/nielassis/gam3r.store",
  },
  {
    name: "InOrbit",
    description: `InOrbit is an application to manage goals in a simple and efficient way, 
    using TypeScript on both the front-end and back-end, 
    ensuring typing and security throughout the application. On the front end, React
    offers an intuitive interface to track goal progress, while on the backend, 
    Fastify and Node.js provide a fast and robust API. Data management is done
    with PostgreSQL and Drizzle ORM, allowing efficient and secure interactions with the database. 
    TailwindCSS is used to style the application, providing a modern and responsive design.`,
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
    images: [
      inorbit1,
      inorbit2,
      inorbit3,
    ],
    deployLink: "https://link-do-deploy-do-inorbit.com",
    gitLink: "https://github.com/nielassis/InOrbit",
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
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center group">
      {children}
      <span className="absolute bottom-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

function SimpleImageSlider({ images }: { images: (StaticImageData | string)[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 200); // Tempo da transição de fade
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 200); // Tempo da transição de fade
  };

  return (
    <div className="relative w-full h-56 bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]} // Agora aceitando StaticImageData ou string
          alt={`slide-${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}

export default function Projects() {
  const highlightTechnologies = (description: string, technologies: string[]) => {
    let highlightedDescription = description;
    technologies.forEach((tech) => {
      const regex = new RegExp(`\\b${tech}\\b`, "g");
      highlightedDescription = highlightedDescription.replace(regex, `<span style="color: #922828;"><b>${tech}</b></span>`);
    });
    return highlightedDescription;
  };

  return (
    <div className="flex flex-col p-12 projects gap-6">
      <h1 className="text-zinc-500 font-semibold text-start pb-12 text-xl">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col lg:flex-row lg:gap-12 mb-8 project-item">
          <div className="w-full lg:w-1/2">
            <h1 className="text-white font-bold text-2xl flex gap-4 items-center mb-6">
              {project.name}
              <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#922828] transition duration-300">
                <BsGithub className="hover:scale-110" />
              </a>
            </h1>
            <p
              className="text-[#FFFFFF]"
              dangerouslySetInnerHTML={{
                __html: highlightTechnologies(project.description, project.technologies),
              }}
            ></p>
            <span className="text-zinc-500 text-3xl flex gap-4 font-bold mt-6 mb-4">
              {project.icons.map((icon, i) => {
                const IconComponent = icon.component;
                return (
                  <Tooltip key={i} text={icon.name}>
                    <IconComponent className="hover:transition ease-in-out hover:scale-110 hover:text-[#922828]" />
                  </Tooltip>
                );
              })}
            </span>
          </div>
          <div className="w-full lg:w-1/2 items-center lg:mt-0 mt-4">
            <SimpleImageSlider images={project.images} />
          </div>
        </div>
      ))}
    </div>
  );
}