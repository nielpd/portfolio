import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 flex justify-center bg-[#121212] w-full sm:w-11/12 rounded-md h-14 sm:h-16 p-2 sm:p-4 shadow-[0px_1px_1px_0px_#ffffff] z-50 items-center">
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 font-extralight items-center justify-center text-sm sm:text-base">
        <Link href="#hero">
          <button className="hover:text-[#6672F6] transition duration-300">
            <p>Início</p>
          </button>
        </Link>
        <Link href="#projects">
          <button className="hover:text-[#6672F6] transition duration-300">
            <p>Projetos</p>
          </button>
        </Link>
        <Link href="#about">
          <button className="hover:text-[#6672F6] transition duration-300">
            <p>Sobre Mim</p>
          </button>
        </Link>
        <Link href="#contact">
          <button className="hover:text-[#6672F6] transition duration-300">
            <p>Contato</p>
          </button>
        </Link>
        <Link href="/cv">
          <button className="bg-[#6672F6] p-1 sm:p-2 rounded-md text-[#121212] w-[100px] sm:w-[120px] md:w-[150px] hover:bg-white hover:text-[#6672F6] transition duration-300">
            <p>Baixar CV</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
