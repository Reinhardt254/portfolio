import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReinhardtDev',
  description: 'Software Engineer',
  icons:{
    icon: "/logo/logo.png",
    apple:"/logo/logo.png"
  },
  keywords:[
    "kipchirchir",
    "Reinhardt Kipchirchir",
    "Reinhardt",
    "Reinhardt Lagat",
    "Reinhardt kipchirchir lagat",
    "Lagat",
    "software engineer",
    "web developer",
    "portfolio",
    "fullstack developer",
    "software developer"
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
        <Analytics />
     </body>
    </html>
    </ClerkProvider>
  )
}
