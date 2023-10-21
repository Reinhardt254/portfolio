import Errormessage from "@/components/errormessage"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import  { Toaster } from "react-hot-toast"

export default function DasboardLayout({children}: {children: React.ReactNode}) {

   const id = "user_2WtseCCgLWrnQqdf48qE28t5VHD"

   const { userId } = auth()

   if(!userId){
      redirect("/sign-in")
   }

   const uuid = userId.toString()
   

   if(uuid !== id){
      redirect("/")
   }

   return (
      <>
        {children}
      </>
   )
 }
