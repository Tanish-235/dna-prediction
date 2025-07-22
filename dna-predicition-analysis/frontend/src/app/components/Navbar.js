"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          DNA Sequencing Tool
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/mutation_detected">Mutation Detection</Link>
          </li>
          <li>
            <Link href="/performance_analysis">Performance Analysis</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
