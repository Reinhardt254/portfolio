
import prismadb from '@/lib/prismadb'
import { UserButton, auth } from '@clerk/nextjs'
import axios from 'axios'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
// import FormButton from './components/form'

const Dashboard = async () => {

  const data = await prismadb.message.findMany()

  return (
    <div className='h-full w-screen'>
      <div className='flex w-full'>
      <div className='md:w-1/5 max-sm:hidden'>
      <div className=' bg-slate-950 fixed  top-0 h-screen'>
        <div className='flex flex-col justify-center items-center h-full'>
          <div>
            <Image
             src="/admin/profile.jpg"
             width={150}
             height={150}
             alt="profile"
             className='rounded-full pb-3'
            />
          </div>
          {/* <h1 className='text-blue-500 text-xl pt-5'>Admin</h1> */}
          <div className=''>
          <p className='text-blue-300 text-xl pt-2'>.  Reinhardt Lagat</p>
          <p className='text-blue-300 text-xl pt-2'>. Software Engineer</p>
          <p className='text-blue-300 text-xl pt-2'>. Fullstack Developer</p>
          <p className='text-blue-300 text-xl pt-2'>. Computer Science</p>
          </div>
          <p className='text-blue-100 pt-3 px-2'>`If it aint painful you aint working harder enough`</p>
        </div>
       </div>
      </div>


      <div className='flex-col pl-10 md:w-2/3 ml-auto bg-slate-900 min-h-screen w-screen'>
        <Toaster />
        <div>
          <h1 className='text-blue-400 text-2xl pt-5 px-4'>Messages</h1>
        </div>
           <div>
           {data.length === 0  && (<div>
             <p className='text-blue-300'>
              No messages available right now
            </p>
          </div>)}
         </div>
      {data.map((item) =>( 
      <div 
        className=''
        key={item.id}
      >
      <div className='md:px-4 pt-4 pr-4'>
        <div className='md:w-1/2'>
        <div>
          <div>
            <div className='flex justify-start items-center'> 
            <p className='text-blue-300'>{item.name}</p>
            <div className='pl-8'>
              <div>
                {/* <FormButton data={item.id} /> */}
              </div>
            </div>
            </div>
           <p className='text-blue-300'>{item.createdAt.toDateString()}</p>
          </div>
          <div>
           <p className='text-blue-200'>{item.email}</p>
           <p className='text-gray-300'>{item.message}</p>
          </div>
        </div>
        </div>
      </div>
      </div>
       ))}
      </div>
      </div>
    </div>
  )
}

export default Dashboard
