import { BookOpen } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 font-sans">
              What is NextRead?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 font-medium">
              Your personal AI-powered reading companion.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Just tell us the last 3 books you've read, and NextRead will recommend your perfect next read. Our smart
              recommendation system helps you discover new authors, genres, and books tailored to your reading habits.
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background circle - smaller on mobile */}
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-50 rounded-full flex items-center justify-center">
                {/* Icon container - smaller on mobile */}
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white" />
                </div>
              </div>

              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-6 h-6 md:w-12 md:h-12 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute top-1/2 -left-4 md:-left-8 w-3 h-3 md:w-6 md:h-6 bg-blue-600 rounded-full opacity-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
