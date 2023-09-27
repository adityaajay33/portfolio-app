import React from 'react'
import "./Navbar.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="websitePages">
      <ul className="navLinks">
        <li className="indLink">
        <Link href="/about" className="linkWeb">About</Link>
        </li>
        <li className="indLink">
        <Link href="/projects" className="linkWeb">Projects</Link>
        </li>
        <li className="indLink">
        <Link href="/experiences" className="linkWeb">Experiences</Link>
        </li>
      </ul>
    </div>
  )
}
