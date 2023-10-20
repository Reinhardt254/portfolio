import Button from "@/components/button"
import {  languages,  } from "@/lib/languages"
import Image from "next/image"
import Link from "next/link"


const Stack = () => {

  const data = languages

  return (
    <div className="w-screen bg-slate-950 h-full flex justify-center items-center py-6">
      <div className="md:w-1/2 px-6">
        <div className="pt-0">
          <div>
            <h1 className="text-blue-200 text-2xl">Front end</h1>
            <p className="text-gray-400 pl-0">
              In front-end , I have expertise in crafting dynamic and user-friendly web applications using an array of cutting-edge technologies. I specialize in React and Next.js to create responsive and efficient interfaces, ensuring a seamless user experience. Tailwind CSS and Material-UI are my go-to tools for crafting visually stunning designs, while Shadcn UI adds a touch of elegance to my projects. My attention to detail and commitment to accessibility and responsiveness make me adept at creating delightful web experiences.
            </p>
          </div>
          <div className="pt-6">
            <h1 className="text-blue-200 text-2xl">Back end</h1>
            <p className="text-gray-400 pl-0">
               In back end I have expertise in building robust and scalable server-side solutions. My toolkit includes SQL, MySQL, postgress, and MongoDB for managing data efficiently, and I leverage Prisma and Mongoose as ORM frameworks to streamline database interactions. With Express, NodeJs and nextJs, I build powerful APIs and server applications, ensuring smooth communication between the front end and back end. Additionally, I utilize FastAPI to create high-performance and intuitive RESTful APIs with python, solidifying my proficiency in the back-end development realm.
            </p>
          </div>

          <div className="pt-6">
            <h1 className="text-blue-200 text-2xl">Android / IOS mobile development</h1>
            <p className="text-gray-400 pl-0">
                I utilise React native to create and design cutting edge applications that are cross platform running seamlessly in both android and ios devices. My passion for this approach to mobile app development lies in its ability to streamline development process and its versatility in development.
            </p>
          </div>
        </div>
      <div className="">
        <div>
          <h1 className=" text-2xl text-start pt-9 text-blue-300">Tools & Langauges</h1>
        </div>

      <div className="flex mr-3 flex-wrap pt-5 mb-5 md:w-2/3">
      {data.map((item) =>(
      <div key={item.name}>
      <div className=" p-3">
        <div>
        <div>
          <Image
            alt="language"
            src={item.photo}
            width={40}
            height={40}
            className="rounded shadow-blue-200 shadow-2xl"
          />
        </div>
        </div>
        </div>
      </div>
      ))}
      </div>
    </div>
      <div className="pb-8 pt-5">
        <Button 
          link="/experience"
          text="Check my experience"
        />
      </div>
      </div>
    </div>
  )
}

export default Stack;
