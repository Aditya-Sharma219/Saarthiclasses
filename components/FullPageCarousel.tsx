'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function FullPageCarousel() {
  const landscapeImages = [
    '/images/landscape1.jpg',
    '/images/landscape2.jpg',
    '/images/landscape3.jpg',
  ]

  const portraitImages = [
    '/images/portrait1.jpg',
    '/images/portrait2.jpg',
    '/images/portrait3.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const images = isMobile ? portraitImages : landscapeImages
  const total = images.length

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image */}
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        fill
        className="object-cover transition-all duration-700"
        priority
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
