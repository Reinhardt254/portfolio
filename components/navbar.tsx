"use client"

import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { AlignCenter, BarChart3, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Navbar = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)

  const pathname = usePathname();

  const routes = [
    {
      href:"/",
      label:"Home",
      active: pathname === "/",
    },
    {
      href:"/skills",
      label:"About",
      active: pathname === "/skills",
    },
    {
      href:"/experience",
      label:"Experience",
      active: pathname === "/experience",
    },
    {
      href:"/projects",
      label:"Projects",
      active: pathname === "/projects",
    },
    {
      href:"/contact",
      label:"Contact",
      active: pathname === "/contact",
    },
    {
      href:"/dashboard",
      label:"Dashboard",
      active: pathname === "/dashboard",
    },
  ]

  return (
    <div className='flex flex-row pt-5 pb-2  px-2 bg-slate-950 justify-between  items-center w-screen'>
      <div className='pl-3 flex space-x-0 font-bold flex-row  items-center justify-center'>
       <Link 
          href="/"
       >
       <Image 
        src="/logo/logo.png"
        alt="profile"
        width={40}
        height={40}
        className='rounded-full shadow-2xl shadow-blue-300'
       />
       </Link>
      </div>

      <div className='max-sm:hidden'>
        <div className='flex space-x-3'>
          {routes.map((route)=>(
           <div key={route.label}> 
            <Link
            href={route.href}
            className={cn(route.active? "text-gray-200" : "text-blue-300")}
             >
             <p className="hover:text-white">{route.label}</p>
             </Link>
           </div>
          ))}
        </div>
      </div>
  

      <div className='flex  mr-7 space-x-4 font-bold text-lg flex-row justify-center items-center h-full'>
        <div className='text-gray-200'>
          <Link href="https://www.linkedin.com/in/reinhardt-lagat-281634201">
           <Image 
           src="/socials/linkdn.png"
           alt="profile"
           width={20}
           height={20}
           className='rounded'
        />
          </Link>
        </div>
          <div className='text-gray-200'>
          <Link href="https://github.com/Reinhardt254">
           <Image 
           src="/socials/github.jpg"
           alt="profile"
           width={20}
           height={20}
           className='rounded'
        />
          </Link>
        </div>
        <div className='text-gray-200'>
          <Link href="https://twitter.com/_chirchirkip">
            <Image 
            src="/socials/x.png"
            alt="profile"
            width={20}
            height={20}
            className='rounded'
            />
          </Link>
        </div>
        <div className='pl-5 max-sm:hidden'>
          <UserButton afterSignOutUrl="/"/>
        </div>
        </div>

        <div className='sm:hidden mr-8'>
        <div onClick={()=>setToggleDropDown(true)}>
          <AlignCenter size={24} color="white"/>
        </div>
        </div>
{/* =======================Small devices=========================== */}
       {toggleDropDown && (
       <div className='z-50 h-screen w-screen absolute inset-0'>
          <div className='h-full w-full flex'>
            <div className='w-1/3 bg-black opacity-70'>
            </div>
            <div className='bg-slate-950 w-2/3'>
              <div 
                 onClick={()=>setToggleDropDown(false)}
                 className=''
                 >
                <X size={24} color="white"
                   className='top-4 right-10 absolute '
                />
               </div>
               <div className=' absolute top-4 pl-2'>
                 <UserButton afterSignOutUrl="/"/>
               </div>
                <div className='flex flex-col items-center justify-center h-4/5 space-y-5'>
                  {routes.map((route)=>(
                  <div key={route.label}> 
                    <Link
                      href={route.href}
                      onClick={()=>setToggleDropDown(false)}
                      className={cn(route.active? "text-gray-300" : "text-blue-300")}
                    >
                      <p className="text-xl">{route.label}</p>
                    </Link>
                  </div>
                  ))} 
                </div>
                <div>
              </div>
            </div>
          </div>
       </div>
       )}

{/* ==================================Large devices=============================== */}
    </div>
  )
}

export default Navbar
