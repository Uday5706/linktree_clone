import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full py-4 pl-12 pr-4'>
        <div className='logo flex gap-20 items-center'>
          <Link href="/">
            <img width={125} loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" ></img>
          </Link>
        <ul className='flex gap-10'>
            <Link href="/"><li>Templates</li></Link>
            <Link href="/"><li>Marketplace</li></Link>
            <Link href="/generate"><li>Discover</li></Link>
            <Link href="/"><li>Pricing</li></Link>
            <Link href="/"><li>Learn</li></Link>
        </ul>
        </div>
        <div className='flex gap-5'>
            <button className="login bg-gray-200 py-4 px-6 rounded-md font-bold">Log in</button>
            <button className="signup bg-[#1e2330] text-white p-4 px-6 rounded-full font-bold"> Sign up free</button>
        </div>
    </nav>
  )
}

export default Navbar
