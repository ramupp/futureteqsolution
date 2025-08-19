"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/software-team-collaboration.png",
    title: "Software Development",
    description: "Cutting-edge software solutions tailored to your business needs",
  },
  {
    src: "hardware.jpg",
    title: "Hardware Solutions",
    description: "Comprehensive hardware infrastructure and support services",
  },
  {
    src: "/responsive-web-development.png",
    title: "Web Development",
    description: "Responsive and dynamic web applications for modern businesses",
  },
  {
    src: "/mobile-app-development.png",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    src: "/graphic.jpg",
    title: "Graphic Design",
    description: "Creative visual solutions that elevate your brand identity",
  },
  {
    src: "/digital-marketing-dashboard-seo.png",
    title: "Digital Marketing & SEO",
    description: "Strategic digital marketing to grow your online presence",
  },
  {
    src: "/futuristic-ai-robotics-lab.png",
    title: "Innovation & Technology",
    description: "Leading the future with innovative technology solutions",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 animate-fade-in">{image.title}</h1>
              <p className="text-lg md:text-xl mb-8 animate-fade-in animation-delay-200">{image.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
                {/*<Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>*/}
                {/*<Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Learn More
                </Button>*/}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
