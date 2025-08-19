"use client"

import { useEffect } from "react"
import Header from "@/components/header"
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
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Zap,
  Users,
  BarChart3,
} from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash navigation for service sections
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  const services = [
    {
      id: "software",
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      image: "/software.jpg",
      features: [
        "Enterprise Application Development",
        "API Development & Integration",
        "Database Design & Management",
        "System Architecture & Design",
        "Legacy System Modernization",
        "Cloud-Native Applications",
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET", "PostgreSQL", "MongoDB", "AWS"],
      benefits: [
        "Scalable and maintainable code architecture",
        "Reduced operational costs and improved efficiency",
        "Enhanced security and data protection",
        "Seamless integration with existing systems",
      ],
    },
    {
      id: "hardware",
      icon: Cpu,
      title: "Hardware Solutions",
      description:
        "Complete hardware infrastructure setup, maintenance, and optimization for your business operations.",
      image: "/hard.jpg",
      features: [
        "Server Setup & Configuration",
        "Network Infrastructure Design",
        "Hardware Procurement & Installation",
        "System Monitoring & Maintenance",
        "Disaster Recovery Planning",
        "Performance Optimization",
      ],
      technologies: ["Dell", "HP", "Cisco", "VMware", "Linux", "Windows Server", "Docker", "Kubernetes"],
      benefits: [
        "Reliable and high-performance infrastructure",
        "24/7 monitoring and support",
        "Cost-effective hardware solutions",
        "Scalable infrastructure that grows with your business",
      ],
    },
    {
      id: "web",
      icon: Globe,
      title: "Web Development",
      description:
        "Responsive and dynamic web applications that deliver exceptional user experiences across all devices.",
      image: "/responsive-web-development.png",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Content Management Systems",
        "Progressive Web Apps (PWA)",
        "Web Application Security",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Angular", "WordPress", "Shopify", "Tailwind CSS", "TypeScript"],
      benefits: [
        "Mobile-first responsive design",
        "Fast loading times and optimal performance",
        "SEO-optimized for better search rankings",
        "Cross-browser compatibility",
      ],
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      image: "/progressive-web-apps.png",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Development",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Firebase", "AWS Mobile", "GraphQL"],
      benefits: [
        "Native performance and user experience",
        "Faster time-to-market with cross-platform solutions",
        "Seamless integration with device features",
        "App store compliance and optimization",
      ],
    },
    {
      id: "design",
      icon: Palette,
      title: "Graphic Design",
      description:
        "Creative visual solutions that elevate your brand identity and communicate your message effectively.",
      image: "/gr.png",
      features: [
        "Brand Identity Design",
        "UI/UX Design",
        "Marketing Materials",
        "Website Graphics",
        "Print Design",
        "Digital Illustrations",
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "InVision", "Canva", "Blender", "After Effects"],
      benefits: [
        "Consistent brand identity across all platforms",
        "User-centered design approach",
        "High-quality visual assets",
        "Increased brand recognition and engagement",
      ],
    },
    {
      id: "marketing",
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description:
        "Strategic digital marketing campaigns that increase your online visibility and drive qualified traffic.",
      image: "/seo.png",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "SEMrush", "Mailchimp", "HubSpot", "Hootsuite"],
      benefits: [
        "Improved search engine rankings",
        "Increased website traffic and conversions",
        "Better ROI on marketing investments",
        "Data-driven marketing strategies",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-primary-foreground">
        <Badge variant="secondary" className="mb-4 text-xl">
          Our Services
        </Badge>
        <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">
          Comprehensive IT & Digital Solutions
        </h1>
        <p className="text-lg mb-8 max-w-3xl opacity-90 leading-relaxed">
          At <strong>Future Teq Solution</strong>, we deliver innovative, end-to-end 
          technology services designed to accelerate your business growth and ensure 
          long-term success in today’s competitive digital era.
          Our expertise covers a wide range of solutions including 
          <strong> custom software development</strong> to streamline your operations, 
          <strong> reliable hardware solutions</strong> for robust IT infrastructure, 
          <strong> modern web development</strong> and <strong>mobile app development</strong> 
          to build engaging digital experiences, 
          <strong> creative graphic design</strong> for impactful branding, and 
          <strong> result-driven digital marketing & SEO strategies</strong> to grow your 
          online visibility and connect with the right audience.
        </p>
      
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          {/*<Button size="lg" variant="secondary">
            Get Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            View Portfolio
          </Button>*/}
        </div>
      </div>
      <div className="relative">
        <img
          src="contact.png"
          alt="Future Teq Solution Office"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>



      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">IT Solutions That Drive Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive technology services are designed to address every aspect of your digital transformation
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="relative z-10 bg-background/95 backdrop-blur-sm">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-sans">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors p-0 h-auto"
                      onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-16 ${index % 2 === 1 ? "bg-card" : ""}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Badge variant="secondary" className="mb-4">
                  {service.title}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-sans font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-sans font-semibold mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-sans font-semibold mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 text-primary mr-2" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  {/*<Button size="lg" className="group">
                    Get Started with {service.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>*/}
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements and business objectives",
                icon: Users,
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap and technical specifications",
                icon: Database,
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution using agile development practices",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching your solution with ongoing support and maintenance",
                icon: Cloud,
              },
            ].map((process, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl font-sans font-bold text-primary/20 mb-2">{process.step}</div>
                  <process.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="font-sans">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project requirements and create a customized solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  )
}
