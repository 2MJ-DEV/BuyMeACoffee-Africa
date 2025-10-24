import { Link } from "react-router-dom";
import DecorativeBar from "../components/DecorativeBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preview from "/Preview.png";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext.jsx"; // ✅ Import context

const Home = () => {
  const { darkMode } = useContext(DarkModeContext); // true or false

  return (
    <>
      <Navbar />

      <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
        <main className="relative z-0 flex min-h-screen flex-col">
          {/* HERO SECTION */}
          <section>
            <div className="py-30 mt-25 relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 px-6">
              <a
                href="/"
                className={`inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent cursor-pointer gap-1
                ${darkMode ? "bg-gray-800 text-white hover:bg-gray-700/80" : "bg-[#202020] text-white hover:bg-[#202020]/80"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                Under construction
              </a>

              <h1 className={darkMode ? "font-lora text-white/80 max-w-lg text-center text-4xl font-bold" : "font-lora text-black/75 max-w-lg text-center text-4xl font-bold"}>
                Bring your ideas to life. Support and collaborate with Africa's
                talent.
              </h1>
              <p className={darkMode ? "max-w-lg text-white/60 fontd-medium" : "max-w-lg text-black/60 fontd-medium"}>
                We are currently developing our app to provide you with the best
                possible experience. It will be available soon!
              </p>

              <div className="flex gap-5">
                <Link
                  to="/"
                  className={`inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 mt-4 border
                  ${darkMode ? "border-gray-700 bg-yellow-500 text-white hover:bg-yellow-600" : "border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600"}
                  transition-all duration-300 ease-in-out active:scale-[0.93]`}
                >
                  Get started free
                </Link>
              </div>
            </div>
          </section>

          {/* DECORATIVE BAR */}
          <DecorativeBar darkMode={darkMode} />

          {/* PREVIEW INTERFACE */}
          <section>
            <div className="w-full max-w-5xl mx-auto mt-10">
              <div className={`rounded-xl p-1 text-sm mt-16 border ${darkMode ? "border-gray-700 bg-gray-800/20" : "border-zinc-950/5 bg-zinc-950/5"}`}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl">
                  <span className="size-3 rounded-full bg-red-500"></span>
                  <span className="size-3 rounded-full bg-yellow-400"></span>
                  <span className="size-3 rounded-full bg-green-500"></span>
                </div>
                <img
                  src={Preview}
                  alt="Preview"
                  width={1400}
                  height={900}
                  data-nimg="1"
                  objectfit="cover"
                  className="block mx-auto w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section></section>
        </main>
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
};

export default Home;
