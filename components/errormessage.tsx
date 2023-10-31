"use client"

import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const Errormessage = () => {
   const [timer, setTimer] = useState(false)

   useEffect(()=>{
      setTimeout(()=>{
        setTimer(true)
      }, 3500)
   }, [])

   if(timer){
      return(
       redirect("/")
      )
   }

  return (
    <div className='min-h-screen w-screen'>
      <div className='h-full justify-center items-center flex'>
         <div className='h-64 flex justify-center items-center bg-slate-900 rounded flex-col mt-32 shadow-blue-200 shadow-sm'>
            <div className="justify-center items-center flex flex-col px-12 md:px-20">
               <p className='text-blue-400 text-3xl font-bold'>Ooooops!</p>
               <p className='text-gray-300 pt-5 text-lg'>Only Admins can access this page</p>
               <p className='text-gray-300 pt-5 text-lg'>You will be redirected to home</p>
            </div>
            {/* <div className="bg-blue-800 px-6 mt-7 py-3 rounded hover:bg-gray-500">
               <Link 
                href="/"
               >
                  <p className="text-gray-100 font-semibold">Home</p>
               </Link>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Errormessage