"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white text-gray-800">
      {/* Top Section - Hidden on Scroll */}
      {!scrolled && (
        <div className="hidden lg:flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          <Link href="/">
          <div className="text-4xl font-extrabold text-black hover:text-emerald-600 transition cursor-pointer">
            Merinda
          </div>

          </Link>
          <div className="flex items-center space-x-4 text-xl text-gray-700">
            <Link href="#">
              <FaFacebookF className="hover:text-emerald-600" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-emerald-600" />
            </Link>
            <Link href="#">
              <FaXTwitter className="hover:text-emerald-600" />
            </Link>
            <Link
              href="/contact"
              className="ml-4 border border-emerald-600 text-emerald-700 px-3 py-1.5 rounded-full text-md font-medium hover:bg-emerald-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Navigation Bar (Sticky) */}
      <nav
        className={`w-full z-50 ${
          scrolled ? "fixed top-0 bg-white shadow py-2" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          <ul className="hidden lg:flex space-x-10 font-medium text-md text-gray-700">
            <li>
              <Link href="/personalinjury" className="hover:text-emerald-600">
                Personal Injury
              </Link>
            </li>
            <li>
              <Link href="/classaction" className="hover:text-emerald-600">
                Class Action Lawsuits
              </Link>
            </li>
            <li>
              <Link href="/medicalclaims" className="hover:text-emerald-600">
                Medical Claims
              </Link>
            </li>
            <li>
              <Link href="/consumer" className="hover:text-emerald-600">
                Consumer Protection
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <button className="text-2xl text-gray-800" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className="text-3xl font-semibold text-black hover:text-emerald-600">
          Merinda
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4 text-center">
          <ul className="flex flex-col items-center space-y-3 text-sm font-medium text-gray-800">
            <li>
              <Link href="/personalinjury" onClick={handleCloseMenu}>
                Personal Injury
              </Link>
            </li>
            <li>
              <Link href="/classaction" onClick={handleCloseMenu}>
                Class Action Lawsuits
              </Link>
            </li>
            <li>
              <Link href="/medicalclaims" onClick={handleCloseMenu}>
                Medical Claims
              </Link>
            </li>
            <li>
              <Link href="/consumer" onClick={handleCloseMenu}>
                Consumer Protection
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleCloseMenu}
                className="text-emerald-700 px-4 py-2 rounded border border-emerald-600 hover:bg-emerald-50 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-5 pt-4 text-xl text-gray-800">
            <Link href="#">
              <FaFacebookF className="hover:text-emerald-600" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-emerald-600" />
            </Link>
            <Link href="#">
              <FaXTwitter className="hover:text-emerald-600" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
