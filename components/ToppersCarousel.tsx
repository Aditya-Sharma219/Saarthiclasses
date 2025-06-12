'use client'

import { useState } from 'react'
import Image from 'next/image'

type Topper = {
  name: string
  score: string
  designation: string
  image: string
}

const toppers: Topper[] = [
  {
    name: 'Aarav Sharma',
    score: '99.82%',
    designation: '12th CBSE Topper',
    image: '/images/toppers/aarav.jpg',
  },
  {
    name: 'Isha Verma',
    score: '99.91 Percentile',
    designation: 'JEE Mains',
    image: '/images/toppers/isha.jpg',
  },
  {
    name: 'Rohan Mehta',
    score: '680 / 720',
    designation: 'NEET Topper',
    image: '/images/toppers/rohan.jpg',
  },
  // Add more toppers
]

export default function ToppersCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prev) => (prev - 1 + toppers.length) % toppers.length)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % toppers.length)
  }

  return (
    <div className="w-full h-[25vh] bg-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-6 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
      >
        &#10094;
      </button>

      {/* Carousel */}
      <div className="flex transition-all duration-500 ease-in-out space-x-6 overflow-hidden px-4">
        {toppers.map((topper, index) => {
          const isVisible = index === current

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center transition-opacity duration-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
              }`}
              style={{ minWidth: '200px' }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                <Image
                  src={topper.image}
                  alt={topper.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-semibold mt-2">{topper.name}</h3>
              <p className="text-xs text-gray-600">{topper.designation}</p>
              <p className="text-indigo-600 font-bold text-sm">{topper.score}</p>
            </div>
          )
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 md:right-6 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
      >
        &#10095;
      </button>
    </div>
  )
}
