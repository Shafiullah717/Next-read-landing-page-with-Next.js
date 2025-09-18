"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      quote: "NextRead makes it so easy to find my next favorite book!",
      avatar: "/professional-woman-smiling.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      quote: "I discovered authors I never would have tried before.",
      avatar: "/professional-man-smiling.png",
    },
    {
      id: 3,
      name: "Emma Davis",
      quote: "Finally, a reading app that understands me.",
      avatar: "/young-woman-reading.jpg",
    },
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">What Readers Say</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid / Mobile Scroll Container */}
          <div
            ref={scrollRef}
            className="md:grid md:grid-cols-3 md:gap-8 flex md:flex-none overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 min-w-[280px] md:min-w-0 snap-center"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#1A609D] text-[#1A609D]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-black mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-[#808080]">NextRead User</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#1A609D]" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#1A609D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
