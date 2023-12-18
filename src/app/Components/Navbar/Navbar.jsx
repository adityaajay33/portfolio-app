import React from 'react';
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbarHome">

      <Link href="/pages/projects" className="linkOnline">Projects</Link>


      <Link href="/" className="linkOnline">Home</Link>

        
      <Link href="/pages/experiences" className="linkOnline">Experiences</Link>

    </div>
  )
}