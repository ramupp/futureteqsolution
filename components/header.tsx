"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X, MapPin, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const services = [
    { name: "Software Development", href: "/services#software" },
    { name: "Hardware Solutions", href: "/services#hardware" },
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App Development", href: "/services#mobile" },
    { name: "Graphic Design", href: "/services#design" },
    { name: "Digital Marketing & SEO", href: "/services#marketing" },
  ]

  const careerPage = { name: "Career", href: "/career" }
  const blogPage = { name: "Blog", href: "/blog" }

  // Utility for active link styling (parent + child highlighting)
  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(href + "/") || pathname.startsWith(href + "#")

  const navLinkClass = (href: string, matchChildren: string[] = []) => {
    const isActive =
      isActiveLink(href) || matchChildren.some((child) => isActiveLink(child))

    return `group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors
      hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground
      ${isActive ? "bg-accent/70 text-accent-foreground" : ""}`
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+(91) 900798-4348"
                className="flex items-center space-x-1 hover:text-secondary transition-colors cursor-pointer"
              >
                <Phone className="h-3 w-3" />
                <span>+(91) 900798-4348</span>
              </a>
              <a
                href="mailto:info@futureteqsolution.com"
                className="flex items-center space-x-1 hover:text-secondary transition-colors cursor-pointer"
              >
                <Mail className="h-3 w-3" />
                <span>info@futureteqsolution.com</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Future Teq  Solution  Since  2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group mr-8">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Future Teq Solution Logo"
                className="h-20 w-20 transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl text-foreground leading-tight whitespace-nowrap">
                Future Teq Solution
              </span>
              <span className="font-serif text-xs text-primary font-medium">We Build IT Empire</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass("/")}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass("/about")}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass("/services", ["/services"])}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={careerPage.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass(careerPage.href)}>
                    {careerPage.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={blogPage.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass(blogPage.href)}>
                    {blogPage.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass("/contact")}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center space-x-1"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/AHL6gCj2YioXamzx7",
                  "_blank"
                )
              }
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Location</span>
            </Button>

            {/*<Link href="/contact">
              <Button size="sm" className="hidden md:inline-flex">
                Get Free Quote
              </Button>
            </Link>*/}

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                careerPage,
                blogPage,
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-1 text-sm font-bold rounded ${
                    isActiveLink(item.href) ? "bg-accent text-accent-foreground" : "hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
