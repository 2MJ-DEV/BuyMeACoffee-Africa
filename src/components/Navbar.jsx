import { Link } from "react-router-dom";
import Logo from "/logo-v5.webp";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }

        const data = await response.json();
        setContributors(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContributors();
  }, []);

  return (
    <header className="w-[95%] sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto fixed left-0 top-0 right-0 z-50">
      <nav className="flex items-center justify-between py-2 border border-zinc-950/5 bg-zinc-950/2 backdrop-blur-md rounded-2xl px-2 sm:px-3 mt-4">
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="">
              <img src={Logo} alt="" className="w-8 sm:w-10 md:w-[45px]" />
            </span>
            <div className="font-black text-[16px] sm:text-[18px] md:text-[20px]">
              <span>BuyMeA</span>
              <span className="text-yellow-500">Coffee</span>
            </div>
          </div>
        </Link>

        <div className="">
          <ul className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <li>
              <Link
                to="/contributors"
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none py-1.5 sm:py-2 rounded-md gap-1 sm:gap-1.5 px-2 sm:px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-white text-zinc-950 hover:bg-zinc-50 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                <span className="hidden sm:inline">
                  {contributors.length} Contributor
                  {contributors.length !== 1 ? "s" : ""}
                </span>
                <span className="sm:hidden">
                  Contributors
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-1.5 sm:py-2 rounded-md gap-1 sm:gap-1.5 px-2 sm:px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                <span className="hidden sm:inline">Go to app</span>
                <span className="sm:hidden">Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;