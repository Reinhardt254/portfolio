// "use client"

// import axios from 'axios'
// import { Trash } from 'lucide-react'
// import toast from 'react-hot-toast'

// interface formButtonProps{
//   data: string
// }

// const FormButton: React.FC<formButtonProps> = ({data}) => {

//   const handleClick = async(data: string) => {
//     try{
//       axios.delete(`/api/messages/${data}`)
//       toast.success("successfully deleted")
//     }catch(error){
//       console.log(error)
//       toast.error("an error occured")
//     }
//     window.location.reload()
//   }

//   return (
//     <div>
//       <button
//         type="submit"
//         name="button"
//         onClick={()=>handleClick(data)}
//       >
//         <Trash color="red" size={15}/>
//       </button>
//    </div>
//   )
// }

// export default FormButton

