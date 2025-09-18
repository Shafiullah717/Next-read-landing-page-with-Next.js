import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import ScreenshotsSection from "@/components/screenshots-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="screenshots">
        <ScreenshotsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <div className="py-16" />
      <Footer />
    </main>
  )
}
