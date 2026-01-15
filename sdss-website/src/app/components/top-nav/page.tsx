"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "";
  const toggleMenu = () => setIsOpen((v) => !v);

  // Desktop (md+) brand color by route
  let brandByRoute = "";
  if (pathname === "/") {
    brandByRoute = "text-white";
  } else if (pathname.startsWith("/events") || pathname.startsWith("/our-teams") || pathname.startsWith("/thanks") ||  pathname.startsWith("/newsletter")) {
    brandByRoute = "secondary-purple"; 
  } else {
    brandByRoute = ""; // default
  }

  return (
    <>
      <div
        className={`w-full h-20 top-0 ${
          isOpen
            ? "bg-dark-purple"
            : "lg:bg-transparent lg:backdrop-blue-none bg-dark-purple bg-opacity-10"
        } transition-colors duration-300`}
      >
        <div className="container lg:mx-20 px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" passHref className="flex flex-row gap-x-2 items-center">
              <img className="w-10 object-contain" src="/sdss-icon-bottom.png" alt="SDSS Logo" />

              {/* Mobile: always white (nav is purple on mobile) */}
              <div className="body-large text-white md:hidden">SDSS</div>

              {/* Desktop: route-based color */}
              <div className={`body-large hidden md:block ${brandByRoute}`}>SDSS</div>
            </Link>

            <ul className="hidden md:flex lg:gap-x-6 body-regular">
              <li>
                <Link
                  href="/"
                  passHref
                  className="btn bg-white secondary-purple meet-teams-button hover:text-white border-none rounded-full lg:px-4 py-2"
                  style={{ textTransform: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-teams"
                  passHref
                  className="btn bg-white border-none secondary-purple meet-teams-button hover:text-white rounded-full lg:px-4 py-2"
                  style={{ textTransform: "none" }}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  passHref
                  className="btn bg-white border-none secondary-purple meet-teams-button hover:text-white rounded-full lg:px-4 py-2"
                  style={{ textTransform: "none" }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:sdss.uoft@gmail.com"
                  passHref
                  className="btn bg-white border-none secondary-purple meet-teams-button hover:text-white rounded-full lg:px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textTransform: "none" }}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/member-registration" 
                  className="btn bg-white border-none secondary-purple meet-teams-button hover:text-white rounded-full lg:px-4 py-2"
                  style={{ textTransform: 'none' }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>

            <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle navigation">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobile menu */}
            <div
              className={`absolute top-20 left-0 w-full bg-dark-purple shadow-lg flex flex-col pl-10 gap-y-4 heading transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
              }`}
            >
              <ul className="space-y-4 mb-10 text-white body-regular">
                <li>
                  <Link href="/" passHref onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/our-teams" passHref onClick={toggleMenu}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/events" passHref onClick={toggleMenu}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="mailto:sdss.uoft@gmail.com" passHref target="_blank" rel="noopener noreferrer" style={{ textTransform: "none" }}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/member-registration" passHref onClick={toggleMenu}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
