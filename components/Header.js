'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      {/* Topbar */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-12 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 +44 7469 340373</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>We serve areas within a 50-mile radius of Manchester.</span>
          </div>
          <div className="hidden md:block">
            📧 primeepc.design@gmail.com
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-800">
            Prime EPC and Design Consultants
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium">About</Link>
            <Link href="/why-us" className="text-gray-700 hover:text-green-700 font-medium">Why Us</Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium">Blog</Link>
            <Link href="/#faqs" className="text-gray-700 hover:text-green-700 font-medium">FAQs</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</Link>
            <Link href="/booking" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Book Your EPC
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium">About</Link>
              <Link href="/why-us" className="text-gray-700 hover:text-green-700 font-medium">Why Us</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium">Blog</Link>
              <Link href="/#faqs" className="text-gray-700 hover:text-green-700 font-medium">FAQs</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-700 font-medium">Contact</Link>
              <Link href="/booking" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-center">
                Book Your EPC
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}