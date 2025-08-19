"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

// 🔹 Import your header (and optionally footer)
import Header from "@/components/Header"
// import Footer from "@/components/Footer" // Uncomment if you already have one

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Future Teq Solution offer?",
          answer:
            "We offer comprehensive technology solutions including software development, hardware solutions, web development, mobile app development, graphic design, and digital marketing & SEO services.",
        },
        {
          question: "How long has Future Teq Solution been in business?",
          answer:
            "Future Teq Solution has been providing professional technology solutions since 2019, building a strong reputation for excellence and innovation in the tech industry.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including healthcare, finance, e-commerce, education, manufacturing, and startups. Our solutions are tailored to meet specific industry requirements.",
        },
      ],
    },
    {
      category: "Services",
      questions: [
        {
          question: "Do you provide custom software development?",
          answer:
            "Yes, we specialize in custom software development tailored to your specific business needs. Our team works closely with clients to understand requirements and deliver scalable solutions.",
        },
        {
          question: "Can you help with mobile app development for both iOS and Android?",
          answer:
            "We develop native and cross-platform mobile applications for both iOS and Android platforms using the latest technologies and frameworks.",
        },
        {
          question: "Do you offer ongoing support and maintenance?",
          answer:
            "Yes, we provide comprehensive support and maintenance services for all our solutions. This includes regular updates, bug fixes, security patches, and technical support.",
        },
      ],
    },
    {
      category: "Process",
      questions: [
        {
          question: "What is your development process?",
          answer:
            "Our development process follows agile methodologies with clear phases: requirement analysis, design, development, testing, deployment, and ongoing support. We maintain regular communication throughout the project.",
        },
        {
          question: "How do you ensure project quality?",
          answer:
            "We implement rigorous quality assurance processes including code reviews, automated testing, manual testing, and continuous integration. Our team follows industry best practices and standards.",
        },
        {
          question: "What is the typical project timeline?",
          answer:
            "Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during project planning.",
        },
      ],
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "How do you price your services?",
          answer:
            "Our pricing is based on project scope, complexity, timeline, and required resources. We offer competitive rates and provide detailed quotes after understanding your specific requirements.",
        },
        {
          question: "Do you offer fixed-price projects?",
          answer:
            "Yes, we offer both fixed-price and hourly billing models. Fixed-price is ideal for well-defined projects, while hourly billing works better for ongoing development or projects with evolving requirements.",
        },
        {
          question: "Is there a minimum project size?",
          answer:
            "We work with projects of all sizes, from small business websites to large enterprise applications. There's no minimum project size - we're committed to helping businesses of all scales.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* ✅ Add Header here */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about our services, processes, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="font-sans font-bold text-2xl text-foreground mb-6 border-b border-border pb-2">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="font-sans font-medium text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="font-sans font-bold text-3xl text-foreground mb-4">
                Still Have Questions?
              </CardTitle>
              <CardDescription className="font-serif text-lg text-muted-foreground">
                Can't find the answer you're looking for? Our team is here to help you with any questions or concerns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </Link>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="h-4 w-4" />
                    <span>Call Us</span>
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent" asChild>
                  <a href="mailto:info@futureteqsolution.com">
                    <Mail className="h-4 w-4" />
                    <span>Email Us</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ Optionally add Footer */}
      {/* <Footer /> */}
    </div>
  )
}
