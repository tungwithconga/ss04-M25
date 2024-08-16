import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
      <Link href={"./navigation/Home"}>Home</Link>
      <Link href={"./navigation/About"}>About</Link>
      <Link href={"./navigation/Contact"}>Contact</Link>
      <Link href={"./navigation/Login"}>Login</Link>
      
    </div>
  )
}