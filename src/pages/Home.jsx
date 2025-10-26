import { Link } from "react-router-dom";
import DecorativeBar from "../components/DecorativeBar";
import Navbar from "../components/Navbar";
import Preview from "/Preview.png";
import { Drama } from "lucide-react";
import about2 from "/image.png";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Home Page Content Here */}
      <div className="">
        <main className="relative z-0 flex min-h-screen flex-col">
          {/* HERO SECTION */}
          <section>
            <div className="py-30 mt-25 relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 px-6">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent cursor-pointer gap-1 bg-[#202020] text-white hover:bg-[#202020]/80"
              >
                <FaGithub />
                Under construction
              </a>

              <h1 className="text-black/75 max-w-lg text-center text-4xl font-bold">
                Bring your ideas to life. Support and collaborate with Africa's
                talent.
              </h1>
              <p className="max-w-lg text-center text-black/60 font-medium">
                We are currently developing our app to provide you with the best
                possible experience. It will be available soon!
              </p>

              <div className="flex gap-5">
                <Link
                  to="/login"
                  className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 mt-4 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
                >
                  Get started free
                </Link>
              </div>
              <p className="mt-4 text-center text-sm text-black/50">
                Need help? <Link to="/docs" className="underline hover:text-black/70">Read our documentation</Link>
              </p>
            </div>
          </section>

          {/* DECORATIVE BAR */}
          <DecorativeBar />

          {/* PREVIEW INTERFACE */}
          <section>
            <div className="w-full max-w-5xl mx-auto mt-10">
              <div className="rounded-xl p-1 text-sm mt-16 border border-zinc-950/5 bg-zinc-950/5">
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

          {/* DECORATIVE BAR */}
          <div>
            <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2 mt-15 mb-15">
              <div className="bg-zinc-950/5 relative mx-auto flex h-px w-full max-w-lg items-center justify-center gap-2">
                <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[10px]"></div>
                <div className="rounded-[1px] bg-zinc-100 border border-zinc-950/5 absolute z-50 -bottom-[5px] -right-[5px] size-[10px]"></div>
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <section>
            <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
              <div className="">
                <div className="">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <a href="/" className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent cursor-pointer gap-1 bg-zinc-950/10 text-zinc-600 hover:bg-[#202020]/80">
                      <Drama />
                      <span>how it works</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 mb-10">
                  <h2 className="text-black/75 max-w-3xl text-center text-4xl font-bold">With us, appointment scheduling is easy</h2>
                  <p className="max-w-lg text-center text-black/60 font-medium">
                    Effortless scheduling for business and individuals, powerful
                    solutions for fast-growing modern companies.
                  </p>
                </div>
                <div className="flex justify-center mb-16">
                  <Link
                    to="/login"
                    className='inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]'
                  >
                    get started free
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="grid gap-5 grid-cols-3">
                  <div className="border border-zinc-950/5 rounded-xl p-5 flex flex-col gap-4 shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="">
                        <span className="rounded-2xl p-1 bg-zinc-950/5">01</span>
                      </div>
                      <h3 className="text-black/75 text-start text-[18px] font-medium line-clamp-1">Create your creator profile</h3>
                      <p className="max-w-lg text-black/60 font-light text-sm line-clamp-3">
                        Sign up for free and customize your page to showcase your work, your story, and your projects.
                      </p>
                    </div>
                    <div className="">
                      <img src={about2} alt="" width={300} height={100} />
                    </div>
                  </div>

                  {/* Other grid items would go here */}

                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;