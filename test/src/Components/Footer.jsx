import { FaGitlab } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2A2C38] text-white p-10 flex justify-between  items-center w-full font-cairo">
      <div className="container mx-auto  py-3 max-md:py-9 flex flex-col md:flex-row justify-between gap-5  items-center w-full">
        <div className="flex  gap-2 ">
          <a
            href="#"
            className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
          >
            <FaGitlab size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
          >
            <FaTelegram size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
          >
            <FaWordpress size={20} />
          </a>
          <a
            href="#"
            className="bg-[#FF9021] text-black p-3 rounded-lg hover:bg-[#22232D] hover:text-white transition-all duration-300"
          >
            <FaViber size={20} />
          </a>
        </div>
        <div className="text-muted-foreground text-center">
          <span>
            2024 © All Rights Reserved | Developed with{" "}
            <span className="text-accent">❤️</span> by{" "}
            <span className="text-[#FF9021]">Khaled Ghonim</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
