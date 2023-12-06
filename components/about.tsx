import Link from "next/link";
import Navbar from "./navbar";
import Button from "./button";
const About = () => {
  return (
   <div className="">
    <div className="sm:flex-row flex-col sm:flex sm:justify-between bg-slate-950 md:px-20 px-5 justify-center items-center flex h-screen pb-20">
      <div className="flex flex-col justify-center items-center md:py-5"> 
      <div className="md:pt-0">
         <h1 className="text-gray-300 font-bold md:text-2xl md:pt-3 text-xl">Hi, my name is</h1>
         <h1 className="text-gray-300 font-bold text-3xl md:text-3xl md:pt-7 pt-3">Reinhardt Lagat</h1>
         <p className="font-bold md:text-5xl mt-1 text-gray-300 md:pt-7 pt-3 text-3xl">
            I build things for the web
         </p>
         <p className="md:text-2xl font-semibold text-gray-400 md:pt-7 md:w-3/4 pt-3 text-lg">
            I am a fullstack software engineer, I have specialised on building fully functional web applications following the best practices. I am conversant with the latest technologies making me not only a versatile developer but also a modern developer with the tools desired for the daily evolving technological and user changes.
         </p>
         
         <div className="pt-8">
            <Button 
               link="/skills"
               text="More about me"
            />
         </div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default About;
