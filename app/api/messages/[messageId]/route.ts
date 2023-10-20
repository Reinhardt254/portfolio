import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export const DELETE = async (req: Request,
   {params}: {params: {messageId: string}}
   ) => {
   try{

      const message = await prismadb.message.deleteMany({
         where :{
            id: params.messageId
         }
      })

      return NextResponse.json(message)
   }catch(error){
      console.log(error)
      new NextResponse("An internal error occurred", {status: 500})
   }
}

