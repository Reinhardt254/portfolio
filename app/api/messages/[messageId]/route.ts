import prismadb from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function DELETE (req: Request, 
   {params}: {params: {messageId: string}}
   ){
   try{

      const message = await prismadb.message.deleteMany({
         where :{
            id: params.messageId
         }
      })

      return NextResponse.json(message)
   }catch(error){
      console.log(error)
      return new NextResponse("An internal error occurred", {status: 500})
   }
}

