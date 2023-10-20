import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'ReinhardtDev',
//   description: 'My profile',
// }

export const metadata = {
  title: 'ReinhardtDev',
  description: 'Portfolio',
  icons:{
    icon: "/logo/logo.png",
    apple:"/logo/logo.png"
  },
  keywords:[
    "software engineer",
    "portfolio",
    "web developer",
   ]
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body 
        className={inter.className}
      >
        <div className='bg-slate-950 min-h-screen'>
          <div className='z-50 sticky top-0'>
            <div>
             <Navbar />
            </div>
          </div>
        {children}
        </div>
     </body>
    </html>
    </ClerkProvider>
  )
}
