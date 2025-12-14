import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=' bg-slate-950 py-10 flex flex-col justify-center items-center gap-5 footer-container'>
      <div className="footer-container flex flex-row justify-center items-center gap-4">
      <div className="text-gray-200 socials-profile-item">
          <Link href="https://www.linkedin.com/in/reinhardtdev">
            <Image
              src="/socials/linkdn.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-gray-200 socials-profile-item">
          <Link href="https://github.com/Reinhardt254">
            <Image
              src="/socials/github.jpg"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-gray-200 socials-profile-item">
          <Link href="https://twitter.com/_chirchirkip">
            <Image
              src="/socials/x.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        {/* <div className="text-gray-200 socials-profile-item">
          <Link href="https://instagram.com/reinhardt_dev?igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              src="/socials/insta.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div> */}
      </div>
      <p className='text-center text-sm text-gray-400'>Made with Love ❤️ by Reinhardt Lagat ⓒ{currentYear}</p>
    </div>
  )
}

export default Footer
