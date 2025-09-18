"use client"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#1A609D] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-balance">Get Ready to Read Smarter</h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">Coming soon to iOS and Android.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="bg-white text-[#1A609D] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.open("#", "_blank")}
          >
            Download for iOS
          </Button>
          <Button
            className="bg-white text-[#1A609D] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.open("#", "_blank")}
          >
            Download for Android
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
