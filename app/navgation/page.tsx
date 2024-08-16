import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>menu thanh dieu huong
        <Link href={"./navgation/about"}>about</Link>
        <Link href={"./navgation/news"}>news</Link>
    </div>
  )
}
