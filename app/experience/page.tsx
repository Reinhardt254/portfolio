import Button from '@/components/button'

const Experience = () => {
  return (
    <div>

    <div className='h-full bg-slate-950 w-screen flex justify-center items-center py-3 pb-20 pr-4'>
      <div className='md:w-2/5 flex flex-col  mx-2 space-y-5'>
        <div className='pt-2'>
          <div className='flex justify-start items-center pb-1'>
          <h1 className='text-gray-300 font-bold text-3xl text-start'>
            My experience
          </h1>
          </div>
        </div>
        <div>
          <div className='flex justify-start items-center flex-wrap'>
             <p className='text-blue-200 font-semibold md::text-xl pr-2 text-lg'>Lead Software Engineer</p>
             <p className='text-blue-300 '>
               Clinical research studies
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>Sept 2023 - ct 2023</p>
          <p className='text-gray-400 pt-2'>
            I worked as a lead software engineer in designing and building a research system. We used rescent technoligies which included NextS, Prisma, MySQL database, Tailwind and much more.
          </p>
        </div>
        <div>
         <div className='flex justify-start items-center flex-wrap'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'> Software Engineer Intern</h1>
             <p className='text-blue-300 '>
               Posta Kenya
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023 - Aug 2023</p>
          <p className='text-gray-400 pt-2'>
           I worked as a software Engineer Intern in a team of developers, I worked with the team in building, maintaining and improving the present posta system. We used array of technologies including javascript, css and html.
          </p>
        </div>
        <div>
        <div className='flex justify-start items-center flex-wrap'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'> System Engineer Intern</h1>
             <p className='text-blue-300 '>
               Rift Valley Training Institute
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2022-Aug 2022</p>
          <p className='text-gray-400 pt-2'>
           I worked with a team to maintain and improve the student management system at the school. We delved into not only coding but also brainstoming and finding solutions for various problems we had to solve in maintaining the system. We also delved into integrating finger print management system in the school. We used array of tools and technologies including Javascript, Css and HTML, Bootstrap.
          </p>
        </div>
        <div>
         <div className='flex justify-start items-center flex-wrap'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'>Freelancer Software Engineer</h1>
             <p className='text-blue-300 '>
               Upwork
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023 - present</p>
          <p className='text-gray-400 pt-2'>
            Developed and designed websites and web apps for clients all over the world using array of technoligies in my know how. My experience as a freelancer has influenced my career as a developer in a special way, building array of projects, beating deadlines, working with clients of all types and at thesame time meeting customer expectations.
          </p>
        </div>
        <div className='pt-7'>
          <Button
           link="/projects"
           text="let us go to my projects"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Experience