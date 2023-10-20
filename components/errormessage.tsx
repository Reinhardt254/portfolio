"use client"

import Link from "next/link"

const Errormessage = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='h-full justify-center items-center flex'>
         <div className='h-64 flex justify-center items-center bg-slate-900 rounded flex-col'>
            <div className="justify-center items-center flex flex-col px-12 md:px-20">
               <p className='text-red-700 text-3xl font-bold'>Unauthorized</p>
               <p className='text-gray-200 pt-5'>Only Admins can access this page</p>
            </div>
            <div className="bg-blue-800 px-6 mt-7 py-3 rounded hover:bg-gray-500">
               <Link 
                href="/"
               >
                  <p className="text-gray-100 font-semibold">Home</p>
               </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Errormessage