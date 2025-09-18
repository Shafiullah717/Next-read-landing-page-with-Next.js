"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Apple, Play, X, Menu } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <section className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 lg:px-8 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Mobile Menu Button - Left Side */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Logo - Desktop left, Mobile center */}
          <div className="flex items-center gap-2 md:flex-none absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none lg:relative lg:left-auto lg:transform-none">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-bold text-foreground">NextRead</span>
          </div>

          {/* Empty space for mobile balance, Navigation for desktop */}
          <div className="md:hidden lg:hidden w-10"></div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="text-secondary hover:text-foreground transition-colors font-sans cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })}
              className="text-secondary hover:text-foreground transition-colors font-sans cursor-pointer"
            >
              Screenshots
            </button>
            <button
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="text-secondary hover:text-foreground transition-colors font-sans cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-secondary hover:text-foreground transition-colors font-sans cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={() => {
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="text-secondary hover:text-foreground transition-colors font-sans px-2 py-1 text-left cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => {
                  document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="text-secondary hover:text-foreground transition-colors font-sans px-2 py-1 text-left cursor-pointer"
              >
                Screenshots
              </button>
              <button
                onClick={() => {
                  document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="text-secondary hover:text-foreground transition-colors font-sans px-2 py-1 text-left cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="text-secondary hover:text-foreground transition-colors font-sans px-2 py-1 text-left cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="px-6 py-12 lg:px-8 lg:py-20 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                  Your Next Favorite Book Awaits
                </h1>
                <p className="text-lg lg:text-xl text-secondary font-sans leading-relaxed text-pretty">
                  Add your last 5 books, and we'll recommend what you should read next.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToFeatures}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-8 py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Button>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-secondary font-sans">Coming Soon</span>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-border hover:bg-accent font-sans px-4 py-2 rounded-lg bg-transparent"
                    >
                      <Apple className="w-4 h-4" />
                      App Store
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-border hover:bg-accent font-sans px-4 py-2 rounded-lg bg-transparent"
                    >
                      <Play className="w-4 h-4" />
                      Google Play
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* iPhone Frame */}
                <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 bg-white">
                      <span className="text-sm font-medium text-black">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                        <div className="w-6 h-2 bg-black rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4 space-y-6">
                      {/* Header */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary rounded-xl mx-auto mb-3 flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-lg font-bold text-black">NextRead</h2>
                        <p className="text-sm text-gray-600">Book Recommendations</p>
                      </div>

                      {/* Recent Books */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-black">Your Recent Books</h3>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-2 bg-accent rounded-lg">
                              <div className="w-8 h-10 bg-primary/20 rounded"></div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-300 rounded mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommendation Button */}
                      <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                        Get Recommendations
                      </button>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
