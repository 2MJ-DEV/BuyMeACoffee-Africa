import { useContext } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo-v5.webp";
import { DarkModeContext } from "../context/DarkModeContext.jsx";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  // Colors for dark/light mode
  const textColor = darkMode ? "text-white/80" : "text-black/60";
  const headingColor = darkMode ? "text-white" : "text-black/80";
  const borderColor = darkMode ? "border-white/20" : "border-zinc-950/20";
  const bgColor = darkMode ? "bg-black" : "bg-zinc-950/2"; // solid black in dark mode

  return (
    <footer className={`border-t ${borderColor} ${bgColor} px-3 pt-10 pb-5 mt-10`}>
      <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
        <div className="grid grid-cols-2 gap-6 justify-between">
          {/* Logo + Description + Social */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Logo" width={45} />
              <div className={`font-black text-[20px] ${darkMode ? "text-white" : "text-black"}`}>
                <span>BuyMeA</span>
                <span className="text-yellow-500">Coffee</span>
              </div>
            </Link>

            <p className={`text-sm leading-relaxed ${textColor}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto. Dolorum exercitationem temporibus autem cumque?
            </p>

            <ul className="flex items-center gap-4 mt-2">
              <li>
                <a href="/" className="hover:text-yellow-600 transition">
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href="mailto:julesmukadi.dev@gmail.com" className="hover:text-yellow-600 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-yellow-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <h3 className={`capitalize text-lg font-medium ${headingColor}`}>resources</h3>
              <ul className="flex flex-col gap-2">
                <li><Link to="/about" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>About</Link></li>
                <li><Link to="/blog" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Blog</Link></li>
                <li><Link to="/dev" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Developers</Link></li>
                <li><Link to="/team" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Team</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className={`capitalize font-medium text-lg ${headingColor}`}>company</h3>
              <ul className="flex flex-col gap-2">
                <li><Link to="/help" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Help</Link></li>
                <li><Link to="/privacy" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Privacy Policy</Link></li>
                <li><Link to="/terms" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>Terms of Service</Link></li>
                <li><Link to="/license" className={`font-medium capitalize hover:text-yellow-600 transition ${textColor}`}>License</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`flex items-center justify-between mt-10 text-sm border-t ${borderColor} pt-4`}>
          <div>
            <span className={textColor}>&copy; 2025 BuyMeACoffee-Africa. All rights reserved.</span>
          </div>
          <div className="flex gap-1 justify-end items-center">
            <span className={textColor}>by</span>
            <Link to="/contributors" className="flex items-center gap-1 hover:text-yellow-500 transition duration-300 underline underline-offset-2">
              <span className="uppercase font-bold">contributors</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
