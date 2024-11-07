import logo from "../assets/VY_Logo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-8 h-12 " />
        </a>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vishwaraj-yadav"
          target="_blank"
          rel="noopener norefere"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="" target="_blank" rel="noopener norefere" aria-label="GitHub">
          <FaGithub />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener norefere"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="" target="_blank" rel="noopener norefere" aria-label="X">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
