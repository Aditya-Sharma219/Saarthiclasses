'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link href="/">SaarthiClasses</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
          <Link href="/courses" className="text-gray-700 hover:text-indigo-600 font-medium">Courses</Link>
          <Link href="/notes" className="text-gray-700 hover:text-indigo-600 font-medium">Notes</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
          <Link href="/courses" className="block text-gray-700 hover:text-indigo-600 font-medium">Courses</Link>
          <Link href="/notes" className="block text-gray-700 hover:text-indigo-600 font-medium">Notes</Link>
          <Link href="/about" className="block text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 font-medium">Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
