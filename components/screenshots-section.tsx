"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScreenshotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const screenshots = [
    {
      id: 1,
      title: "Book Recommendations",
      image: "/mobile-app-showing-book-recommendations-with-cover.jpg",
    },
    {
      id: 2,
      title: "Reading List",
      image: "/mobile-app-showing-personal-reading-list-with-book.jpg",
    },
    {
      id: 3,
      title: "Book Details",
      image: "/mobile-app-showing-book-details-page-with-descript.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-sans">See NextRead in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            A simple, intuitive interface designed for book lovers.
          </p>
        </div>

        {/* Desktop View - 3 mockups side by side */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={screenshot.id} className="relative group">
              {/* iPhone Mockup */}
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* iPhone notch */}
                  <div className="relative bg-black h-6 rounded-b-2xl mx-auto w-32 mb-1"></div>

                  {/* Screenshot */}
                  <div className="aspect-[9/19.5] bg-gray-100 relative overflow-hidden">
                    <img
                      src={screenshot.image || "/placeholder.svg"}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* iPhone home indicator */}
                  <div className="bg-black h-1 w-32 rounded-full mx-auto my-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative flex justify-center">
            {/* iPhone Mockup */}
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl max-w-xs">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* iPhone notch */}
                <div className="relative bg-black h-6 rounded-b-2xl mx-auto w-32 mb-1"></div>

                {/* Screenshot */}
                <div className="aspect-[9/19.5] bg-gray-100 relative overflow-hidden">
                  <img
                    src={screenshots[currentSlide].image || "/placeholder.svg"}
                    alt={screenshots[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* iPhone home indicator */}
                <div className="bg-black h-1 w-32 rounded-full mx-auto my-2"></div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 shadow-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 shadow-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-[#1A609D]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
