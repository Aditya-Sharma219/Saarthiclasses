'use client'

import Link from 'next/link'
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">SaarthiClasses</h2>
          <p className="text-sm text-gray-400 mt-1">
            Guiding Students Towards Excellence
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="/courses" className="hover:text-indigo-400 transition">Courses</Link>
          <Link href="/notes" className="hover:text-indigo-400 transition">Notes</Link>
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Right - Contact Info + Socials */}
        <div className="text-center md:text-right text-sm">
          <p>📍B-193 Gate No. 3, Sec - 52, </p>
          <p> Near Adarsh public school,</p>
          <p>  Noida, India</p>
          <p>
            📧{' '}
            <a
              href="mailto:support@saarthiclasses.com"
              className="hover:text-indigo-400 transition"
            >
              support@saarthiclasses.com
            </a>
          </p>
          <p>📞 +91 70679 47276</p>
          <p>📞 +91 95996 64973</p>

          <div className="flex justify-center md:justify-end mt-3 gap-4 text-lg">
            <a
              href="https://www.instagram.com/saarthiclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@saarthiclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:support@saarthiclasses.com"
              className="hover:text-yellow-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SaarthiClasses. All rights reserved.
      </div>
    </footer>
  )
}
