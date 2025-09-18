"use client"

import Link from "next/link"
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A609D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="text-2xl font-bold font-poppins">
              NextRead
            </Link>
          </div>

          {/* Quick Links */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              <li>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("screenshots")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Screenshots
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center text-white/80 text-sm">© 2025 NextRead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
