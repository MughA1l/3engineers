'use client'

import { useState, useEffect } from "react"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

const reasons = [
  "Innovative Training Programs",
  "Expert Guidance",
  "Cutting-Edge Solutions",
  "Comprehensive Support",
  "Enhanced ROI",
]

const images = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

export default function WhyChooseUs() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="mb-12 px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Why Choose 3 Engineers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-4">
              {reasons.map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-black dark:text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Carousel image ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}