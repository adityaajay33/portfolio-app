import React from 'react';
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="websitePages">
      <div className="linksAbout">
        <Link href="/about" className="linkWeb">About</Link>
      </div>
      <div className="linksProject">
        <Link href="/projects" className="linkWeb">Projects</Link>
      </div>
      <div className="linksExp">
        <Link href="/experiences" className="linkWeb">Experiences</Link>
      </div>
    </div>
  )
}