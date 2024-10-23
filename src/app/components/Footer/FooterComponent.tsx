import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mt-24 justify-center flex text-center mb-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-thin">Feito com &quot;❤️&quot; por Niel</h1>
        <div className="flex gap-6">
          <Link href="https://github.com/nielassis" target="_blank">
            <p className="underline">GitHub</p>
          </Link>
          <p>|</p>
          <Link href="https://github.com/nielassis" target="_blank">
            <p className="underline">LinkedIn</p>
          </Link>
          <p>|</p>
          <Link href="https://github.com/nielassis" target="_blank">
            <p className="underline">WhatsApp Business</p>
          </Link>
          <p>|</p>
          <Link href="https://github.com/nielassis" target="_blank">
            <p className="underline">Email</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
