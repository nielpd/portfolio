import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-24 justify-center flex text-center mb-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-thin">Feito com &quot;❤️&quot; por Niel</h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="https://github.com/nielassis" target="_blank">
            <p className="underline">GitHub</p>
          </Link>
          <p>|</p>
          <Link href="https://www.linkedin.com/in/daniel-assis-09a295321/" target="_blank">
            <p className="underline">LinkedIn</p>
          </Link>
          <p>|</p>
          <Link href="https://wa.link/osr8cz" target="_blank">
            <p className="underline">WhatsApp Business</p>
          </Link>
          <p>|</p>
          <Link href="mailto:nielvitorba@gmail.com" target="_blank">
            <p className="underline">Email</p>
          </Link>
        </div>
      </div>
    </div>
  );
}