"use client"

import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Cpu,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies",
      features: ["Enterprise Applications", "API Development", "System Integration"],
    },
    {
      icon: Cpu,
      title: "Hardware Solutions",
      description: "Complete hardware infrastructure and maintenance services",
      features: ["Server Setup", "Network Infrastructure", "Hardware Maintenance"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive and scalable web applications for modern businesses",
      features: ["E-commerce Platforms", "CMS Development", "Progressive Web Apps"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "Cross-platform Apps"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions that elevate your brand identity",
      features: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description: "Strategic digital marketing to grow your online presence",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy"],
    },
  ]

  const stats = [
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "200+", label: "Projects Completed" },
    { icon: Clock, number: "3+", label: "Years Experience" },
    { icon: CheckCircle, number: "10+", label: "Team Members" },
  ]

  function handleViewServicesClick() {
    router.push("/services#solutions-section")
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 text-xl">
              About Future Teq Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Future Teq Solution, we are passionate about leveraging technology to solve complex business challenges.
              Our team of experienced professionals delivers innovative solutions that drive growth, efficiency, and
              success for businesses across various industries.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-sans font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="home-services-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xl">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a full spectrum of technology services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="font-sans">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="group" onClick={handleViewServicesClick}>
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-xl">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Your Trusted Technology Partner</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business acumen to deliver solutions that not only meet your current
                needs but also position you for future growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Skilled professionals with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous testing and quality control processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/technology-team-collaboration.png" alt="Future Teq Solution Team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
