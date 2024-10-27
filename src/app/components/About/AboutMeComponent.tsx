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
      title: "Teamwork",
      icons: [{ component: FaUser }],
      description:
        "I like collaborating with other people, learning and sharing knowledge to achieve the best results together.",
    },
    {
      title: "Creativity and continuous learning",
      icons: [{ component: PiAirplaneTakeoffFill }],
      description:
        "I'm always looking for new ways to solve problems and I stay up to date, continually learning new technologies and tools.",
    },
    {
      title: "Adaptability",
      icons: [{ component: BsCodeSlash }],
      description:
        "I am always open to learning new technologies and adjusting to situations, I see changes as opportunities to solve unexpected challenges.",
    },
  ];

  const trainings = [
    {
      title: "WEB Development Technician",
      school: "SENAI CPF Pedro Martins Guerra",
      type: "Level: Technician",
      year: "2023-2024",
    },
    {
      title: "Projeto Desenvolve",
      school: "Projeto Desenvolve | PMI | Google | UFMG | Microsoft",
      type: "Level: Superior",
      year: "2024-2026",
    },
    {
      title: "Systems Development Technician",
      school: "SENAI CPF Pedro Martins Guerra",
      type: "Level: Technician",
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
          <h1 className="font-bold text-2xl text-white">About Me</h1>
          <p className="text-[#5B5B5B] text-base font-semibold">
          From an early age, I was always driven by curiosity about
          technology. My first contact with the world of programming
          It happened in 2018, when I was just 12 years old. It was at that moment
          I started programming microcontrollers using the C and
          C++, which awakened in me a passion for developing
          technological solutions.
          </p>
          <p className="text-[#5B5B5B] text-base font-semibold">
          Throughout my career, I have experienced several discoveries and
          challenges that shaped my professional growth. Each new
          tool, language or framework I learned opened doors to
          deeper knowledge trails. What started with
          hardware programming evolved into systems development
          complete, both on the front-end and back-end, with a focus on
          creation of efficient, modern and scalable solutions.
          </p>
          <p className="text-[#5B5B5B] text-base font-semibold">
          My journey has been marked by a constant search for
          learning and improvement. Im always exploring new
          technologies and applying them in practical projects, which allows me
          continually grow and improve my skills.
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