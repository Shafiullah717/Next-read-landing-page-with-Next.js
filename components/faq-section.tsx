"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does NextRead work?",
    answer: "Add up to 3 books you've read, and our AI will recommend similar titles.",
  },
  {
    question: "Is NextRead free?",
    answer: "Yes, the basic version is free. Premium features will be added soon.",
  },
  {
    question: "When will the app be available?",
    answer: "Coming soon to App Store and Google Play.",
  },
  {
    question: "Can I use NextRead offline?",
    answer: "NextRead requires an internet connection for recommendations.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 font-poppins">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-black font-poppins">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1A609D] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed font-inter">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
