import Button from '@/components/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='px-2 w-screen bg-slate-950 border-white h-full flex items-center justify-center'>
      <div className='md:w-3/4 pr-8 md:pr-16'>
           <div className='pt-'>
            <h1 className='text-center font-semibold text-gray-300 text-3xl pt-8 pb-3'>My recent work</h1>
          </div>
        <div className='space-y-4  pt-10 w-full'>
        <div className='md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4'>
           <div className='justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2'>
             <div className=''>
              <Link href="https://quoteme-reinhardt254.vercel.app">
                <ExternalLink size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
             <div className=''>
              <Link href="https://github.com/Reinhardt254/Quote-Me">
                 <Github size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
           </div>
        <div className='flex-col md:flex-row flex relative max-sm:justify-center max-sm:items-center'>
            <Image 
             alt="project"
             src="/projects/quotes.png"
             width={400}
             height={200}
             className='rounded-t-md'
             
           />        
          <p className='pt-2 text-base text-gray-400 md:pl-10 md:w-2/5 px-3 md:px-0'>
             A quotes web app that implements CRUD functionalities. With a REST api built by NextJS server side and front end built with Tailwind. The web app allows users to read quotes, create their own accounts and write, delete or update quotes. The authentication was implemented using Next Auth.
          </p>
        </div>
        <div className='w-full'>
          <div className='pb-2 mt-0 '>
            <div className='flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-sm  rounded-b-lg pb-3 px-3'>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3 shadow-2xl shadow-blue-600'>Nextjs</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Tailwind</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>MongoDB</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Mongoose</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>NextAuth</p>
            </div>
            </div> 
            </div>
        </div>
        <div className='md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4'>
        <div className='justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2'>
             <div className=''>
              <Link href="https://e-commerce-saas-admin-cj41d9r8c-reinhardt254.vercel.app">
                <ExternalLink size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
             <div className=''>
              <Link href="https://github.com/Reinhardt254/e-commerce-saas-Admin">
                 <Github size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
           </div>
        <div className='flex-col md:flex-row flex relative max-sm:justify-center max-sm:items-center'>
          <Image 
            alt="project"
            src="/projects/admin.png"
            width={400}
            height={200}
            className='rounded-t-md'
          />     
          <p className='pt-2 text-base text-gray-400 md:pl-10 md:w-2/5 px-3 md:px-0'>
            An Admin dashboard web application for an ecommerce store that implements all admin related tasks with a chart to manage statistics. The dashboard is built with NextJS and Prisma with a MySQL database i.e planet scale. The dashboard allows the admin to create a store or stores and they can add products with their attributes. The dashboard takes it futher by implementing apis for a creation of a client store.
          </p>
        </div>
        <div>
          <div className='pb-2'>
            <div className='flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl  rounded-b-lg pb-3 px-3'>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Nextjs</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Tailwind</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Prisma</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>MySQL</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Clerk Auth</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3'>Shadcn Ui</p>
            </div>
            </div> 
            </div>
        </div>

        <div className='md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4'>
        <div className='justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2'>
             <div className=''>
              <Link href="https://helpingheartsfoundation.vercel.app">
                <ExternalLink size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
             <div className=''>
              <Link href="https://github.com/Reinhardt254/helpingheartsfoundation">
                 <Github size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
           </div>
        <div className='flex-col md:flex-row flex relative'>  
          <Image 
            alt="project"
            src="/projects/helping.png"
            width={400}
            height={200}
            className='rounded-t-md'
          />  
          <p className='pt-2 text-base text-gray-400 md:pl-10 md:w-2/5 px-3 md:px-0'>
            A non-govermental organization website built with NextJs and Tailwind. The website is simple website that describes what the organization do and how to donate for their cause.
          </p>
        </div>
        <div>
          <div className='pb-2 mt-3'>
            <div className='flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl  rounded-b-lg pb-3 px-3'>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300'>Nextjs</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300'>Tailwind</p>
            </div>
            </div>9
            </div>
        </div>

        <div className='md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4'>
        <div className='justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2'>
             <div className=''>
              <Link href="https://g-p-3.vercel.app">
                <ExternalLink size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
             <div className=''>
              <Link href="https://github.com/Reinhardt254/g-p-3">
                 <Github size={24} color="white" fill="white" className=''/>
              </Link>
             </div>
           </div>
        <div className='flex-col md:flex-row flex relative max-sm:justify-center max-sm:items-center'>  
          <Image 
            alt="project"
            src="/projects/gpt.png"
            width={400}
            height={200}
            className='rounded-t-md'
          />
          <p className='pt-2 text-base text-gray-400 md:pl-10 md:w-2/5 px-3 md:px-0'>
            A website with eye catching ui built with React and SAAS.
            The website is inspired with the recent rise of AI technoligies including chatgpt. The website is responsive in all applications with a working navbar in both large and small devices
          </p>
        </div>
        <div>
          <div className=' mt-3 pb-10'>
            <div className='flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl rounded-b-lg pb-3 px-3'>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300'>React</p>
              <p className='bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300'>SAAS</p>
            </div>
            </div> 
            </div>
          </div>
            <div className='pb-10 pt-5'>
             <Button 
             link="/contact"
             text="Convinced, hire me"
            />
           </div>
         </div>
        </div>
    </div>
  )
}

export default Projects
