"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
    const pathname = usePathname()
  return (
    <div>
      <Link className={`${pathname === "/" ? "text-red-600" : ""}`} href="/">Home</Link>
      <Link  className={`${pathname === "/About" ? "text-red-600" : ""}`} href="./baitap/navigation/About">About</Link>
      <Link  className={`${pathname === "/Contact" ? "text-red-600" : ""}`} href="./baitap/navigation/Cbout">Contact</Link>
      <Link  className={`${pathname === "/Login" ? "text-red-600" : ""}`} href="./baitap/navigation/Login">Login</Link>
    </div>
  )
}