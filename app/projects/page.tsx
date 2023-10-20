import Button from '@/components/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='px-2 w-screen bg-slate-950 border-white h-full flex items-center justify-center'>
      <div className='md:w-3/4 pr-3'>
           <div className='pt-'>
            <h1 className='text-center font-semibold text-white text-3xl'>My recent work</h1>
          </div>
        <div className='space-y-4  pt-10'>
        <div className='md:px-10 px-2'>
        <div className='flex-col md:flex-row flex relative'>
            <Image 
             alt="project"
             src="/projects/quotes.png"
             width={400}
             height={200}
             className='rounded'
             
           />        
           <div className='flex'>
             <div className=''>
              <Link href="">
                <ExternalLink size={24} color="black" fill="black" className='absolute left-10 top-1'/>
              </Link>
             </div>
             <div className=''>
              <Link href="">
                 <Github size={24} color="black" fill="black" className='top-1 absolute left-2'/>
              </Link>
             </div>
           </div>
          <p className='pt-2 text-base text-gray-400 md:pl-10'>
          Discover the ultimate online shopping destination at [Your Website Name]. We are your one-stop destination for a wide range of high-quality products that cater to your every need. Whether you are on the hunt for fashion, electronics, home decor, or more, we have got you covered with a vast selection of curated items. Our user-friendly platform offers a seamless shopping experience, making it easy to find what you are looking for, explore new trends, and make secure, hassle-free transactions. With fast shipping, exceptional customer service, and a commitment to your satisfaction, [Your Website Name] is your trusted partner in e-commerce. Start exploring today and find the perfect products that enhance your lifestyle.
          </p>
        </div>
        <div>
          <div className='pb-2 mt-3'>
            <div className='flex space-x-3 font-semibold text-sm'>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Nextjs</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Tailwind</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Firebase</p>
            </div>
            </div> 
            </div>
        </div>

        <div className='md:px-10 px-2'>
        <div className='flex-col md:flex-row flex relative'>
          <Image 
            alt="project"
            src="/projects/admin.png"
            width={400}
            height={200}
            className='rounded'
          />
            <div className='flex'>
             <div className=''>
              <Link href="">
                <ExternalLink size={24} color="black" fill="black" className='absolute left-10 top-1'/>
              </Link>
             </div>
             <div className=''>
              <Link href="">
                 <Github size={24} color="black" fill="black" className='top-1 absolute left-2'/>
              </Link>
             </div>
           </div>       
          <p className='pt-2 text-base text-gray-400 md:pl-10'>
          Discover the ultimate online shopping destination at [Your Website Name]. We are your one-stop destination for a wide range of high-quality products that cater to your every need. Whether you are on the hunt for fashion, electronics, home decor, or more, we have got you covered with a vast selection of curated items. Our user-friendly platform offers a seamless shopping experience, making it easy to find what you are looking for, explore new trends, and make secure, hassle-free transactions. With fast shipping, exceptional customer service, and a commitment to your satisfaction, [Your Website Name] is your trusted partner in e-commerce. Start exploring today and find the perfect products that enhance your lifestyle.
          </p>
        </div>
        <div>
          <div className='pb-2 mt-3'>
            <div className='flex space-x-3 font-semibold text-sm'>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Nextjs</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Tailwind</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Firebase</p>
            </div>
            </div> 
            </div>
        </div>

        <div className='md:px-10 px-2 '>
        <div className='flex-col md:flex-row flex relative'>  
          <Image 
            alt="project"
            src="/projects/helping.png"
            width={400}
            height={200}
            className='rounded'
          />
           <div className='flex'>
             <div className=''>
              <Link href="">
                <ExternalLink size={24} color="black" fill="black" className='absolute left-10 top-1'/>
              </Link>
             </div>
             <div className=''>
              <Link href="">
                 <Github size={24} color="black" fill="black" className='top-1 absolute left-2'/>
              </Link>
             </div>
           </div>    
          <p className='pt-2 text-base text-gray-400 md:pl-10'>
          Discover the ultimate online shopping destination at [Your Website Name]. We are your one-stop destination for a wide range of high-quality products that cater to your every need. Whether you are on the hunt for fashion, electronics, home decor, or more, we have got you covered with a vast selection of curated items. Our user-friendly platform offers a seamless shopping experience, making it easy to find what you are looking for, explore new trends, and make secure, hassle-free transactions. With fast shipping, exceptional customer service, and a commitment to your satisfaction, [Your Website Name] is your trusted partner in e-commerce. Start exploring today and find the perfect products that enhance your lifestyle.
          </p>
        </div>
        <div>
          <div className='pb-2 mt-3'>
            <div className='flex space-x-3 font-semibold text-sm'>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Nextjs</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Tailwind</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Firebase</p>
            </div>
            </div> 
            </div>
        </div>

        <div className='md:px-10 px-2 '>
        <div className='flex-col md:flex-row flex relative'>  
          <Image 
            alt="project"
            src="/projects/gpt.png"
            width={400}
            height={200}
            className='rounded'
          />
            <div className='flex'>
             <div className=''>
              <Link href="">
                <ExternalLink size={24} color="white" fill="white" className='absolute left-10 top-1'/>
              </Link>
             </div>
             <div className=''>
              <Link href="">
                 <Github size={24} color="white" fill="white" className='top-1 absolute left-2'/>
              </Link>
             </div>
           </div>  
          <p className='pt-2 text-base text-gray-400 md:pl-10'>
          Discover the ultimate online shopping destination at [Your Website Name]. We are your one-stop destination for a wide range of high-quality products that cater to your every need. Whether you are on the hunt for fashion, electronics, home decor, or more, we have got you covered with a vast selection of curated items. Our user-friendly platform offers a seamless shopping experience, making it easy to find what you are looking for, explore new trends, and make secure, hassle-free transactions. With fast shipping, exceptional customer service, and a commitment to your satisfaction, [Your Website Name] is your trusted partner in e-commerce. Start exploring today and find the perfect products that enhance your lifestyle.
          </p>
        </div>
        <div>
          <div className=' mt-3 pb-10'>
            <div className='flex space-x-3 font-semibold text-sm'>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Nextjs</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Tailwind</p>
              <p className='bg-blue-800 rounded-3xl px-3 py-1 text-center text-gray-200'>Firebase</p>
            </div>
            </div> 
            </div>
            <div className='pb-10'>
             <Button 
             link="/contact"
             text="Convinced, hire me"
            />
           </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Projects
