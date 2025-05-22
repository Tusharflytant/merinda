import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand & About */}
        <div>
          <Link href="/" className="block mb-4">
            <h1 className="text-5xl font-extrabold text-emerald-700 tracking-tight">Merinda</h1>
          </Link>
          <p className="text-sm leading-relaxed text-gray-600">
            Merinda empowers individuals with accurate, up-to-date legal information — built on compassion, clarity, and commitment.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/personalinjury" className="hover:text-emerald-600 transition">Personal Injury</Link></li>
            <li><Link href="/classaction" className="hover:text-emerald-600 transition">Class Action Lawsuits</Link></li>
            <li><Link href="/medicalclaims" className="hover:text-emerald-600 transition">Medical Claims</Link></li>
            <li><Link href="/consumerprotection" className="hover:text-emerald-600 transition">Consumer Protection</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:support@merinda.com" className="hover:text-emerald-600">support@merinda.com</a></li>
            <li>Phone: +1 (555) 123-4567</li>
            <li><Link href="/contact" className="hover:text-emerald-600">Contact Form</Link></li>
            <li><Link href="/about" className="hover:text-emerald-600">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-16 mb-8 mx-6"></div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 pb-8 px-6">
        © {new Date().getFullYear()} <span className="text-emerald-700 font-semibold">Merinda</span> — Supporting justice with clarity and compassion.
      </div>
    </footer>
  );
};

export default Footer;
