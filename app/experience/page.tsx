import Button from '@/components/button'

const Experience = () => {
  return (
    <div>

    <div className='h-full bg-slate-950 w-screen flex justify-center items-center py-3 pb-20 pr-4'>
      <div className='md:w-1/2 flex flex-col  mx-2 space-y-3'>
        <div className='pt-2'>
          <div className='flex justify-start items-center pb-1'>
          <h1 className='text-blue-400 font-bold text-3xl text-start'>
            My experience
          </h1>
          </div>
        </div>
        <div>
          <div className='flex justify-start items-center'>
             <p className='text-blue-200 font-semibold md::text-xl pr-2 text-lg'>Lead Software Engineer</p>
             <p className='text-blue-300 '>
               Clinical research studies
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023-Sept 2023</p>
          <p className='text-gray-400 pt-2'>
          I hope this message finds you well. I am writing to express my keen interest in the software engineer position at SportServe. With a strong background in software development and a passion for solving complex problems, I am excited about the opportunity to contribute my skills and expertise to your team.
          </p>
        </div>
        <div>
         <div className='flex justify-start items-center'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'> Software Engineer</h1>
             <p className='text-blue-300 '>
               Posta Kenya
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023-Sept 2023</p>
          <p className='text-gray-400 pt-2'>
          I hope this message finds you well. I am writing to express my keen interest in the software engineer position at SportServe. With a strong background in software development and a passion for solving complex problems, I am excited about the opportunity to contribute my skills and expertise to your team
          </p>
        </div>
        <div>
        <div className='flex justify-start items-center'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'> System Engineer</h1>
             <p className='text-blue-300 '>
               Rift Valley Training Institute
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023-Sept 2023</p>
          <p className='text-gray-400 pt-2'>
          I hope this message finds you well. I am writing to express my keen interest in the software engineer position at SportServe. With a strong background in software development and a passion for solving complex problems, I am excited about the opportunity to contribute my skills and expertise to your team
          </p>
        </div>
        <div>
         <div className='flex justify-start items-center'>
             <h1 className='text-blue-200 font-semibold md:text-xl pr-2 text-lg'>Freelancer Software Engineer</h1>
             <p className='text-blue-300 '>
               Upwork
             </p>
          </div>
          <p className='text-blue-300 text-xs pt-1'>April 2023-Sept 2023</p>
          <p className='text-gray-400 pt-2'>
          I hope this message finds you well. I am writing to express my keen interest in the software engineer position at SportServe. With a strong background in software development and a passion for solving complex problems, I am excited about the opportunity to contribute my skills and expertise to your team
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