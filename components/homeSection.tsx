import Link from "next/link";
import Navbar from "./navbar";
import Button from "./button";
const HomeSection = () => {
  return (
    <div className="">
      <div className="sm:flex-row flex-col sm:flex sm:justify-between bg-slate-950 md:px-0 px-2 justify-center items-center flex h-full pb-20 max-sm:pt-14">
        <div className="flex flex-col justify-center items-center md:py-5">
          <div className="md:pt-0">
            <h1 className="text-gray-300 font-bold md:text-2xl md:pt-3 text-xl">
              Hi, my name is
            </h1>
            <h1 className="text-gray-300 font-bold text-4xl md:text-3xl md:pt-7 pt-5">
              Reinhardt Lagat
            </h1>
            <p className="font-bold md:text-5xl mt-1 text-gray-300 md:pt-7 pt-3 text-3xl">
              I build things for the web
            </p>
            <p className="md:text-xl font-semibold text-gray-400 md:pt-7 md:w-3/4 pt-4 text-lg">
            I’m a full-stack engineer who sees software as both a craft and a problem-solving discipline. I enjoy designing systems end-to-end—architecting robust backends, building intuitive interfaces, and bringing everything together with clean, maintainable code. My love for tech keeps me exploring new ideas, tools, and patterns, helping me build smarter, more resilient solutions as the landscape evolves.
            </p>

            <div className="pt-8">
              <Button link="/about" text="More about me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
