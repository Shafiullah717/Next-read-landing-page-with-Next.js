"use client"
import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#E9F3FA] text-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Get Ready to Read Smarter
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600">
          Coming soon to iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            className="flex items-center gap-2 bg-[#1A609D] text-white hover:bg-[#154c7a] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            onClick={() => window.open("#", "_blank")}
          >
            <Apple className="w-5 h-5" /> Download for iOS
          </Button>
          <Button
            className="flex items-center gap-2 bg-[#1A609D] text-white hover:bg-[#154c7a] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            onClick={() => window.open("#", "_blank")}
          >
            <Smartphone className="w-5 h-5" /> Download for Android
          </Button>
        </div>
      </div>
    </section>
  )
}
