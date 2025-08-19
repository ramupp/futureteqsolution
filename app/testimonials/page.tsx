import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CEO",
      company: "RetailMax Inc.",
      image: "/testimonial-sarah-mitchell.png",
      rating: 5,
      testimonial:
        "Future Teq Solution transformed our e-commerce platform completely. The new design increased our conversion rate by 300% and the team's professionalism was outstanding throughout the project.",
      project: "E-Commerce Platform Redesign",
    },
    {
      name: "Dr. James Wilson",
      position: "Medical Director",
      company: "MedCare Solutions",
      image: "/testimonial-james-wilson.png",
      rating: 5,
      testimonial:
        "The healthcare management system they developed has revolutionized our operations. Patient satisfaction has improved significantly, and our administrative efficiency has increased by 60%.",
      project: "Healthcare Management System",
    },
    {
      name: "Michael Rodriguez",
      position: "CTO",
      company: "SecureBank Corp",
      image: "/testimonial-michael-rodriguez.png",
      rating: 5,
      testimonial:
        "Working with Future Teq Solution on our mobile banking app was exceptional. They delivered a secure, user-friendly application that exceeded our expectations and achieved over 1M downloads.",
      project: "Mobile Banking Application",
    },
    {
      name: "Emily Chen",
      position: "Marketing Director",
      company: "TechStart Innovations",
      image: "/testimonial-emily-chen.png",
      rating: 5,
      testimonial:
        "The rebranding campaign was phenomenal! Our brand recognition increased by 40% and the design work won multiple industry awards. Highly recommend their creative team.",
      project: "Corporate Rebranding Campaign",
    },
    {
      name: "David Thompson",
      position: "Founder",
      company: "GrowthCo Ltd",
      image: "/testimonial-david-thompson.png",
      rating: 5,
      testimonial:
        "Their digital marketing expertise is unmatched. We saw a 250% increase in organic traffic and 150% more qualified leads. The ROI has been incredible.",
      project: "SEO & Digital Marketing Campaign",
    },
    {
      name: "Lisa Park",
      position: "Operations Manager",
      company: "SmartFactory Inc",
      image: "/testimonial-lisa-park.png",
      rating: 5,
      testimonial:
        "The IoT infrastructure setup has transformed our manufacturing process. We've reduced downtime by 30% and now have real-time monitoring capabilities we never thought possible.",
      project: "IoT Infrastructure Setup",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Successful Projects" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-xl">
              Client Testimonials
            </Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">What Our Clients Say</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with
              Future Teq Solution.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-sans font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/20 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>

                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-sans font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  <Badge variant="outline" className="mt-4 text-xs">
                    {testimonial.project}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xl">
              Featured Testimonial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Hear From Our CEO Client</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                  <img src="/video-testimonial-placeholder.png" alt="Video Testimonial" className="rounded-lg" />
                </div>
                <div className="text-center">
                  <Quote className="h-12 w-12 text-primary/20 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    "Future Teq Solution didn't just deliver a project; they delivered a transformation. Their expertise,
                    dedication, and innovative approach have made them our go-to technology partner."
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/testimonial-featured-ceo.png" alt="Robert Johnson" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-sans font-semibold text-lg">Robert Johnson</div>
                      <div className="text-muted-foreground">CEO, Innovation Corp</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
