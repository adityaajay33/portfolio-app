import React from 'react';
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbarHome">
      <Link href="/about" className="linkOnline">About</Link>

      <Link href="/projects" className="linkOnline">Projects</Link>

      <Link href="/experiences" className="linkOnline">Experiences</Link>

    </div>
  )
}