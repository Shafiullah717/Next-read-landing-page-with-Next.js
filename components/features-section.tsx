"use client"

import { BookOpen, FileText, Sparkles, Palette, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: BookOpen,
    title: "Personalized Recommendations",
    description: "Discover books uniquely matched to your reading history.",
  },
  {
    icon: FileText,
    title: "Save Your Reading List",
    description: "Keep track of what you've read and what you want to read.",
  },
  {
    icon: Sparkles,
    title: "Discover New Authors",
    description: "Explore new writers and genres beyond your usual picks.",
  },
  {
    icon: Palette,
    title: "Simple & Minimal UI",
    description: "Clean design that helps you focus on what matters: reading.",
  },
]

export default function FeaturesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section id="features" className="py-20 px-4 bg-[#D1E4F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-sans">Features</h2>
          <p className="text-lg text-[#808080] max-w-2xl mx-auto font-sans">
            Everything you need to discover your next favorite book
          </p>
        </div>

        <div className="relative">
          {/* Features Grid */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 md:contents snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex-shrink-0 w-80 md:w-auto snap-center"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#1A609D] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#1A609D]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-black mb-3 font-sans">{feature.title}</h3>
                    <p className="text-[#808080] leading-relaxed font-sans">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-[#1A609D]" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-[#1A609D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
