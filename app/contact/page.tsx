"use client"

import Button from '@/components/button'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod';
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"
import { ChevronDownSquare } from 'lucide-react';
import Lottie from "lottie-react"
import animationData from "@/public/lottie/arrowdown.json";

const messageSchema = z.object({
  name: z.string().min(3, "name should be at least three characters"),
  email: z.string().email(),
  message: z.string().min(1, "cannot be empty"),
})

type TmessageSchema = z.infer<typeof messageSchema>

const Contact = () => {

  const [disabled, setIsDisabled] = useState(false)

  const { 
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema)
  });

  const onSubmit = async (data: FieldValues) => {
    setIsDisabled(true)
    try{
      await axios.post("/api/messages", data)
      toast.success("successfully sent")
    }catch(error){
      toast.error("an error occured") 
    }finally{
      setIsDisabled(false)
      reset()
    }  
  }

  return (
    <div className='h-full bg-slate-950 w-screen pb-20 flex items-center justify-center'>
      <div className='h-full md:w-1/3 w-full px-8 sm:w-2/3'>
        <Toaster />
        <div className='pr-0'>
          <div className='pt-10 flex justify-start items-center'>
            <h1 className='text-blue-300 text-xl md:text-xl text-start font-semibold pl-8 pr-'>Send me a message</h1>
              <Lottie 
                  animationData={animationData}
                  className='h-14 w-14'
               />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}
            className='flex space-y-4 h-full flex-col justify-center items-center pt-7'
          >
            <input 
              {...register("name")}
              type="name"
              placeholder='name'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}

            <input 
              {...register("email")}
              type="email"
              placeholder='email'
              className='px-4 py-3 rounded sm:w-96 bg-gray-300 w-full'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}

            <textarea 
              {...register("message")}
              placeholder='Enter message here'
              className='px-4 py-2 rounded h-60 sm:w-96 bg-gray-300 w-full'
            />
            {errors.message && (
              <p className='text-red-500'>{errors.message.message}</p>
            )}
             
            <button 
              disabled={disabled}
              type="submit"
              className='bg-blue-700 disabled:bg-gray-500 py-2 px-5 rounded'
              >
               <p className='text-gray-300'>Submit</p>
            </button>
              <div>
             <div>
              <div className='flex pt-3'>
                <p className='text-gray-400 text-lg'>send an email instead</p>
                <Link href="mailto:reinhardtlagat@gmail.com">
                  <p className='text-blue-500 pl-2 hover:text-gray-400 text-lg'>email</p>
                </Link>
              </div>
             </div>
             </div>
          </form>
        </div>
        <div className='pt-10'>
          <Button
            text="Go back home"
            link="/"
          />
        </div>
      </div>
   </div>
  )
}

export default Contact
