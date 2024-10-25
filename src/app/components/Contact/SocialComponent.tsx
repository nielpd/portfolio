// components/SocialLinks.tsx
import Link from "next/link";
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="flex flex-col lg:w-1/3  mt-6 lg:mt-0 lg:pl-8 gap-6 items-center">
      <h2 className="text-white font-semibold text-xl mb-4">Me encontre em:</h2>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col items-center bg-[#3F3F3F] rounded-md p-4 w-fit lg:w-[300px] shadow-lg hover:bg-[#444444] transition ease-in-out">
          <Link href="https://wa.link/osr8cz" target="_blank" className="flex items-center gap-2">
            <FaWhatsappSquare className="text-4xl" />
            <span className="text-lg font-semibold">WhatsApp Business</span>
          </Link>
        </div>
        <div className="flex flex-col items-center bg-[#3F3F3F] rounded-md p-4 w-full lg:w-[300px] shadow-lg hover:bg-[#444444] transition ease-in-out">
          <Link href="https://www.linkedin.com/in/daniel-assis-09a295321/" target="_blank" className="flex items-center gap-2">
            <FaLinkedin className="text-4xl" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </Link>
        </div>
        <div className="flex flex-col items-center bg-[#3F3F3F] rounded-md p-4 w-full lg:w-[300px] shadow-lg hover:bg-[#444444] transition ease-in-out">
          <Link href="https://github.com/nielassis" target="_blank" className="flex items-center gap-2">
            <FaGithubSquare className="text-4xl" />
            <span className="text-lg font-semibold">GitHub</span>
          </Link>
        </div>
        <div className="flex flex-col items-center bg-[#3F3F3F] rounded-md p-4 w-full lg:w-[300px] shadow-lg hover:bg-[#444444] transition ease-in-out">
          <Link href="mailto:nielvitorba@gmail.com" target="_blank" className="flex items-center gap-2">
            <IoMdMail className="text-4xl" />
            <span className="text-lg font-semibold">E-mail</span>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default SocialLinks;
