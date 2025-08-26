import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-7">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black">
        <a href="https://www.linkedin.com/in/monishkumard17/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/monishkumardhanasekar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/monish_karthik_d/profilecard/?igsh=dTA4NnNvNmRub3k3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>

        <div className="border-2 border-gray-700 rounded-lg text-gray-700 hover:text-gray-900 text-xs py-2 px-2">
          <a href="/SDE_Monish_Kumar_Dhanasekar_TN.pdf" target="_blank" rel="noopener noreferrer">
            <button className="vvd"><span>My Resume</span></button>
          </a>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
