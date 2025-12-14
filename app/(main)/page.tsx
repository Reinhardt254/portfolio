import HomeSection from '@/components/homeSection'
import About from '@/components/homeSection'

const Page = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
       <main className='home h-full flex flex-col justify-center items-center'>
            <HomeSection/>
        </main>
    </div>
  )
}

export default Page
  