"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // --- UPDATED handleSubmit FUNCTION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const dataToSend = {
        ...formData,
        access_key: "76efbabc-d210-43e7-afec-12bfd0635f1c", // Your access key!
      }
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
      const result = await response.json()

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          service: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["305/3, SN Roy Road, Banstala Ln, Sahapur, Kolkata, West Bengal 700038"],
      action: () =>
        window.open("https://maps.app.goo.gl/AHL6gCj2YioXamzx7", "_blank"),
      actionText: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+(91) 900798-4348", "+(91) 700317-6135"],
      action: () => (window.location.href = "tel:+(91) 900798-4348"),
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@futureteqsolution.com", "futureteqsolutions2021@gmail.com"],
      action: () => (window.location.href = "mailto:info@futureteqsolution.com" ),
      actionText: "Send Email",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday-Sunday: Closed ", ""],
      action: null,
      actionText: null,
    },
  ]

  const services = [
    "Software Development",
    "Hardware Solutions",
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Digital Marketing & SEO",
    "IT Consulting",
    "Other",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      {/* ...ALL REMAINING CODE IS UNCHANGED AND CAN REMAIN AS IN YOUR VERSION... */}
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <Badge variant="secondary" className="mb-4 text-xl">
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-lg mb-8 max-w-3xl opacity-90 leading-relaxed">
                Ready to transform your business with <strong>cutting-edge technology solutions</strong>?
                Get in touch with our team of <strong>experts</strong> and let’s explore how
                <strong> Future Teq Solution</strong> can help you achieve your <strong>goals</strong>,
                enhance <strong>efficiency</strong>, and drive <strong>growth</strong>.
                We value every partnership and are committed to building <strong>long-term success</strong> together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                {/*<Button size="lg" variant="secondary">
                    Schedule a Call
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                    >
                    Get Free Quote
                  </Button>*/}
              </div>
            </div>
            <div className="relative">
              <img
                src="/office.png"
                alt="Future Teq Solution Office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="font-sans text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={info.action}
                    >
                      {info.actionText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form & Office Image */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form + Social Card on Left */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="p-8 text-center border-primary/20 bg-primary/5">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-sans font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </Card>
              ) : (
                <Card className="p-6 mb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Suraj Paswan"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="suraj@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+(91) 900798-4348"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              )}

              {/* Connect With Us Social Card */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-sans flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    Follow us on social media for the latest updates and insights.
                  </p>
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/futureteqsolution"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </a>
                    {/* Twitter */}
                    <a
                      href="https://x.com/future_teq"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/future-teq-solutions-5128a237b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/futureteqsolution21/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="p-2">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Office Image on Right */}
            <div className="space-y-8">
              <div>
                <img
                  src="/gree.jpg"
                  alt="Future Teq Solution Office"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes updates, security patches, and technical support.",
              },
              {
                question: "What is your development process?",
                answer:
                  "We follow an agile development methodology with regular client communication, iterative development, and continuous testing to ensure high-quality deliverables.",
              },
              {
                question: "Can you work with our existing systems?",
                answer:
                  "We specialize in system integration and can work with your existing infrastructure to create seamless solutions that enhance your current operations.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-sans font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      {/*<section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Don't wait to transform your business. Contact us today for a free consultation and discover how Future Teq
                Solution can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Call Us Now
                </Button>
              </div>
            </div>
          </section>*/}
      <Footer />
    </div>
  )
}
