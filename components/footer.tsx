"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/logo2.png"
                  alt="Future Teq Solution"
                  className="h-20 w-20 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl">Future Teq Solution</span>
                <span className="font-serif text-xs text-white-600 font-medium">We Build IT Empire</span>

              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Leading technology solutions provider specializing in software development, hardware solutions, and
              digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/futureteqsolution" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://twitter.com/futureteqsolution" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/future-teq-solutions-5128a237b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/futureteqsolution21/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-secondary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm hover:text-secondary transition-colors">
                Services
              </Link>
              <Link href="/career" className="text-sm hover:text-secondary transition-colors">
                Career
              </Link>
              <Link href="/contact" className="text-sm hover:text-secondary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/services#software" className="text-sm hover:text-secondary transition-colors">
                Software Development
              </Link>
              <Link href="/services#hardware" className="text-sm hover:text-secondary transition-colors">
                Hardware Solutions
              </Link>
              <Link href="/services#web" className="text-sm hover:text-secondary transition-colors">
                Web Development
              </Link>
              <Link href="/services#mobile" className="text-sm hover:text-secondary transition-colors">
                Mobile Apps
              </Link>
              <Link href="/services#design" className="text-sm hover:text-secondary transition-colors">
                Graphic Design
              </Link>
              <Link href="/services#marketing" className="text-sm hover:text-secondary transition-colors">
                Digital Marketing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div
                className="flex items-center space-x-2 cursor-pointer hover:text-secondary transition-colors"
                onClick={() =>
                  window.open("https://maps.app.goo.gl/AHL6gCj2YioXamzx7", "_blank")
                }
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">305/3, SN Roy Road, Banstala Ln, Sahapur, Kolkata, West Bengal 700038</span>
              </div>
              <a href="tel:+(91) 900798-4348" className="flex items-center space-x-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+(91) 900798-4348</span>
              </a>
              <a
                href="mailto:info@futureteqsolution.com"
                
                
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@futureteqsolution.com</span>
              </a>
              <a
                href="mailto:futureteqsolutions2021@gmail.com"
                
                
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">futureteqsolutions2021@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Future Teq Solution. All rights reserved.
            
          </p>
        </div>
      </div>
    </footer>
  )
}
