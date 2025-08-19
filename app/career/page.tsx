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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Users,
  Heart,
  Award,
  Coffee,
  Laptop,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Upload,
} from "lucide-react"

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage for you and your family.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO policy.",
    },
    {
      icon: Laptop,
      title: "Latest Technology",
      description: "Top-of-the-line equipment and access to cutting-edge development tools.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and skill development programs.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in an inclusive and supportive environment.",
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Performance-based bonuses, career advancement opportunities, and equity options.",
    },
  ]

  // Placeholder ApplicationForm (kept commented to preserve structure)
  const ApplicationForm = ({ job }: { job: any }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Application submitted:", formData)
      alert("Thank you for your application! We'll be in touch soon.")
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* --- Form Removed since Job Applications are hidden --- */}
      </form>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

     {/* Hero Section */}
<section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="text-primary-foreground">
        <Badge variant="secondary" className="mb-4 text-xl">
          Join Our Team
        </Badge>
        <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">
          Build Your Future with Future Teq
        </h1>
        <p className="text-lg mb-8 opacity-90 leading-relaxed">
          Join a team of <strong>innovators</strong> and <strong>problem-solvers</strong> who are 
          shaping the <strong>future of technology</strong>. At <strong>Future Teq Solution</strong>, 
          we don’t just build software — we create <strong>experiences</strong> that empower businesses 
          and people to thrive in a <strong>digital-first world</strong>.

          We offer <strong>exciting career opportunities</strong> across IT support, web development, 
          ERP solutions, and emerging technologies. Along with <strong>competitive benefits</strong>, 
          <strong> growth programs</strong>, and a culture of <strong>innovation</strong> and 
          <strong> collaboration</strong>, we ensure you achieve your professional goals while 
          maintaining a healthy <strong>work-life balance</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Scroll to Job Section */}
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const section = document.getElementById("job-openings")
              if (section) {
                section.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            View Open Positions
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src="/pexels-divinetechygirl-1181406.jpg"
          alt="Future Teq Team"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>



      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Why Choose Future Teq Solution?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that great people build great products. That's why we've created an environment where talent
              thrives and innovation flourishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="font-sans">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Our Culture & Values</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Future Teq Solution, we foster a culture of innovation, collaboration, and continuous learning. Our
                team members are encouraged to take ownership, think creatively, and grow both personally and
                professionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">Innovation First</h3>
                    <p className="text-muted-foreground">We encourage creative thinking and embrace new technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">Collaborative Environment</h3>
                    <p className="text-muted-foreground">
                      Cross-functional teams working together towards common goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-semibold mb-1">Growth Mindset</h3>
                    <p className="text-muted-foreground">
                      Continuous learning and professional development opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/pexels-mikhail-nilov-7988080.jpg" alt="Future Teq Workspace" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings (REPLACEMENT) */}
      <section id="job-openings" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-6 animate-pulse">
            Job Openings Coming Soon...
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stay tuned! We are preparing some amazing opportunities for you to join our team.
          </p>
        </div>
      </section>

      {/*
      --------------------------
      FULL JOB OPENINGS SECTION 
      COMMENTED OUT BELOW
      --------------------------

      <section className="py-16">
        <div className="container mx-auto ...">
          ... full code for job listings ...
        </div>
      </section>
      */}

      {/*
      --------------------------
      DON'T SEE THE RIGHT ROLE CTA (COMMENTED OUT)
      --------------------------

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Send General Application</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground ...">
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  )
}
