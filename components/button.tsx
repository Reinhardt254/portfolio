import Link from 'next/link'
import { ArrowRight, ArrowRightToLine } from 'lucide-react'

interface componentProps{
  link: string;
  text: string
}
const Button:React.FC<componentProps> = ({link, text}) => {
  return (
    <div>
     <div className="">
            <div>
               <h1></h1>
            </div>
             <Link
               href={link}
               className='flex justify-start'
             >
             <div className='flex items-center justify-center'>
               <div>
                 <h1 className='text-lg font-semibol text-blue-300'>{text}</h1>
                </div>
                <div className='pl-1 pt-1'>
                  <ArrowRight 
                     size={24}
                     color="#93c5fd"
                  />
               </div>
            </div>
            </Link>
      </div>
    </div>
  )
}

export default Button
