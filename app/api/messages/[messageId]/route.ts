// import prismadb from "@/lib/prismadb"
// import { NextResponse } from "next/server"

// export const DELETE = async (req: Request, res: Response,  
//    {params}: {params: {messageId: any}}
//    ) => {
//    try{

//       const message = await prismadb.message.deleteMany({
//          where :{
//             id: params.messageId
//          }
//       })

//       return new Response(JSON.stringify(message))
//    }catch(error){
//       console.log(error)
//       return new Response("An internal error occurred", {status: 500})
//    }
// }

