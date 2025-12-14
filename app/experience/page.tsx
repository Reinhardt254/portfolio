import Button from "@/components/button";

const Experience = () => {
  return (
    <main className=" bg-slate-950 h-full flex justify-center items-center py-6">
      <div className="h-full bg-slate-950 w-full flex justify-center items-center py-3 pb-20 pr-0">
        <div className="w-full flex flex-col  space-y-5 pl-0">
          <div className="flex flex-col gap-1">
            <div className="flex justify-start items-center pb-1 max-sm:pb-4">
              <h1 className="text-gray-300 font-bold text-3xl text-start">
                My experience
              </h1>
            </div>

           <div className="w-full content-divider" />
          </div>

          {/* Panda Flowers */}
          <div>
            <div className="flex justify-start items-center flex-wrap">
              <h2 className="text-blue-200 font-semibold md::text-xl pr-2 text-lg">
                Software Developer
              </h2>
              <p className="text-blue-300 ">Panda Flowers, Naivasha-Kenya</p>
            </div>
            <p className="text-blue-300 text-xs pt-1">March 2024 - Present</p>
            <p className="text-gray-400 pt-2">
              As a software developer at Panda, I am responsible for designing,
              developing, and maintaining scalable software solutions. Working
              closely with cross-functional teams, I contribute to the full
              software development lifecycle, from requirements gathering to
              deployment and ongoing support. The tools I use includes,
              Javascript, css with html and php.
            </p>
          </div>
          
          {/* Paid Studies */}
          <div>
            <div className="flex justify-start items-center flex-wrap">
              <h2 className="text-blue-200 font-semibold md::text-xl pr-2 text-lg">
                Full Stack Developer
              </h2>
              <p className="text-blue-300 ">Paid Studies remote</p>
            </div>
            <p className="text-blue-300 text-xs pt-1">Sept 2023 - Dec 2023</p>
            <p className="text-gray-400 pt-2">
              I worked as a software engineer at Paid Studies in designing and building an
              online research system. We used recent technoligies which included
              NextJS, Prisma, MySQL database, Tailwind and much more.
            </p>
          </div>

          {/* Posta Kenya */}
          <div>
            <div className="flex justify-start items-center flex-wrap">
              <h2 className="text-blue-200 font-semibold md:text-xl pr-2 text-lg">
                {" "}
                Software Engineer Intern
              </h2>
              <p className="text-blue-300 ">Posta Kenya</p>
            </div>
            <p className="text-blue-300 text-xs pt-1">April 2023 - Aug 2023</p>
            <p className="text-gray-400 pt-2">
              I worked as a software Engineer Intern in a team of developers, I
              worked with the team in building, maintaining and improving the
              present posta system.
            </p>
          </div>

          {/* Rift Valley Training Institute */}
          <div>
            <div className="flex justify-start items-center flex-wrap">
              <h2 className="text-blue-200 font-semibold md:text-xl pr-2 text-lg">
                {" "}
                System Engineer Intern
              </h2>
              <p className="text-blue-300 ">Rift Valley Training Institute</p>
            </div>
            <p className="text-blue-300 text-xs pt-1">April 2022 - Aug 2022</p>
            <p className="text-gray-400 pt-2">
              I worked with a team to maintain and improve the student
              management system at the school. We delved into not only coding
              but also brainstorming and finding solutions for various problems
              we had to solve in maintaining the system. We also delved into
              integrating finger print management system in the school. We used
              array of tools and technologies including Javascript, Css and
              HTML, Bootstrap, PHP.
            </p>
          </div>

          {/* Freelancer Software Engineer */}
          <div>
            <div className="flex justify-start items-center flex-wrap">
              <h2 className="text-blue-200 font-semibold md:text-xl pr-2 text-lg">
                Freelancer Software Engineer
              </h2>
              <p className="text-blue-300 ">Upwork</p>
            </div>
            <p className="text-blue-300 text-xs pt-1">April 2023 - present</p>
            <p className="text-gray-400 pt-2">
              Developed and designed websites and web apps for clients all over
              the world using array of technoligies in my know how. My
              experience as a freelancer has influenced my career as a developer
              in a special way, building array of projects, beating deadlines,
              working with clients of all types and at the same time meeting
              customer expectations.
            </p>
          </div>
          <div className="pt-0">
            <Button link="/projects" text="let us go to my projects" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
