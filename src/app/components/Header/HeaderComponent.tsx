import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed  flex justify-center bg-[#121212] w-11/12 rounded-md h-12 mt-4 p-6 shadow-[0px_1px_1px_0px_#ffffff] z-50 items-center">
      <div className="flex gap-8 font-extralight items-center">
        <Link href="#hero">
          <button>
            <p>Início</p>
          </button>
        </Link>
        <Link href="#projects">
          <button>
            <p>Projetos</p>
          </button>
        </Link>
        <Link href="#about">
          <button>
            <p>Sobre Mim</p>
          </button>
        </Link>
        <Link href="#contact">
          <button>
            <p>Contato</p>
          </button>
        </Link>
        <Link href="/cv">
          <button className="bg-[#6672F6] p-1 rounded-md text-[#121212] w-[150px]">
            <p>Baixar CV</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
