import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      client: "RetailMax Inc.",
      description:
        "Complete redesign and development of a modern e-commerce platform with advanced features and mobile optimization.",
      image: "/portfolio-ecommerce-platform.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      results: ["300% increase in conversion rate", "50% faster page load times", "Mobile-first responsive design"],
      duration: "4 months",
      teamSize: "6 developers",
    },
    {
      title: "Healthcare Management System",
      category: "Software Development",
      client: "MedCare Solutions",
      description:
        "Custom healthcare management system with patient records, appointment scheduling, and billing integration.",
      image: "/portfolio-healthcare-system.png",
      technologies: ["React", "Python", "PostgreSQL", "AWS", "Docker"],
      results: ["Reduced administrative time by 60%", "Improved patient satisfaction", "HIPAA compliant security"],
      duration: "8 months",
      teamSize: "8 developers",
    },
    {
      title: "Mobile Banking Application",
      category: "Mobile App Development",
      client: "SecureBank Corp",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/portfolio-mobile-banking.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Biometric API"],
      results: ["1M+ downloads in first year", "99.9% uptime", "Bank-grade security"],
      duration: "6 months",
      teamSize: "5 developers",
    },
    {
      title: "Corporate Rebranding Campaign",
      category: "Graphic Design",
      client: "TechStart Innovations",
      description: "Complete corporate rebranding including logo design, marketing materials, and digital assets.",
      image: "/portfolio-corporate-branding.png",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines", "Print Design"],
      results: ["40% increase in brand recognition", "Consistent brand identity", "Award-winning design"],
      duration: "3 months",
      teamSize: "4 designers",
    },
    {
      title: "SEO & Digital Marketing Campaign",
      category: "Digital Marketing",
      client: "GrowthCo Ltd",
      description:
        "Comprehensive SEO strategy and digital marketing campaign to increase online visibility and lead generation.",
      image: "/portfolio-digital-marketing.png",
      technologies: ["Google Analytics", "SEMrush", "Social Media", "Content Marketing"],
      results: ["250% increase in organic traffic", "150% more qualified leads", "Top 3 Google rankings"],
      duration: "12 months",
      teamSize: "3 marketers",
    },
    {
      title: "IoT Infrastructure Setup",
      category: "Hardware Solutions",
      client: "SmartFactory Inc",
      description:
        "Complete IoT infrastructure setup for smart manufacturing with real-time monitoring and automation.",
      image: "/portfolio-iot-infrastructure.png",
      technologies: ["IoT Sensors", "Raspberry Pi", "Cloud Computing", "Data Analytics"],
      results: ["30% reduction in downtime", "Real-time monitoring", "Predictive maintenance"],
      duration: "5 months",
      teamSize: "4 engineers",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-xl">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">Showcasing Our Success Stories</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our portfolio of successful projects that demonstrate our expertise across various industries and
              technologies.
            </p>
            <img src="/portfolio-hero-showcase.png" alt="Portfolio Showcase" className="rounded-lg shadow-xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-sans text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{project.client}</CardDescription>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-sans font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize}
                    </div>
                  </div>

                  <Button className="w-full group">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve similar success with your next technology project.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Project Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
