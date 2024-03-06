import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
const Navbar = () => {
  return (
   <nav className="w-full relative flex mx-auto p-10  items-center justify-between max-w-2xl ">
   <Link href="/" className="text-primary text-2xl">
    Revand's <span className="text-zinc-700">Blog</span>
   </Link>
   <ModeToggle />
   </nav>
  )
}

export default Navbar