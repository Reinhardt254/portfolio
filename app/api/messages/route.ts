import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST (req: Request) {

   try{
      const body = await req.json();
      const {name, email,  message} = body;

      const sentMessage  = await prismadb.message.create({
         data: {
            name: name,
            email: email,
            message: message,
         }
      })

      return NextResponse.json(sentMessage)
   }catch(error){
      console.log("an error occured")
      return new NextResponse("Internal error occured", {status: 500})
   }
};


export async function GET (req: Request, res: Response){

   try{

     const data = await prismadb.message.findMany()

     return NextResponse.json(data)
   } catch(error){
      console.log(error)
      return new NextResponse("internal error occurred", {status: 500})
   }
}


