import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "/logo-v5.webp";
import { DarkModeContext } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto fixed left-0 top-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between py-2 border rounded-2xl px-3 mt-4 backdrop-blur-md
          ${darkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-950/20 border-zinc-950/5"}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <img src={Logo} alt="Logo" width={45} />
  <div className={`font-black text-[20px] ${darkMode ? "text-white" : "text-black"}`}>
    <span>BuyMeA</span>
    <span className="text-yellow-500">Coffee</span>
  </div>
</Link>

        {/* Links + Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                to="/app"
                className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
              >
                Go to App
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-xl transition-colors duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
