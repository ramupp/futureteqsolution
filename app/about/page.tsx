"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Zap,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Shield,
  CheckCircle,
  Mail,
  Linkedin,
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation while maintaining the highest standards of quality and customer satisfaction.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading technology partner that businesses trust to navigate the digital future, creating lasting value through cutting-edge solutions and exceptional service.",
    },
    {
      icon: Zap,
      title: "Strength",
      description:
        "Our diverse team of experts, proven track record of successful projects, and commitment to staying ahead of technology trends make us the reliable partner for your digital journey.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously explore emerging technologies and methodologies to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.",
    },
  ]

  const teamMembers = [
    {
      name: "Kiran Chandra Prabhakar",
      role: "Co-Founder & CEO",
      image: "kiran.jpg",
      description: "CEO and Co-Founder of Future Teq Solution with 15+ years of industry experience – driving business growth and delivering innovative tech solutions.",
      email: "rajkiranprabhakar@gmail.com",
      linkedin: "https://www.linkedin.com/in/kiran-prabhakar-523bb247/",
    },
    {
      name: "Prem Kumar Paswan",
      role: "Co-Founder & CTO",
      image: "prem.jpg",
      description: "Senior Software Developer, CTO, and Co-Founder at Future Teq Solution with 10+ years expert in building innovative software solutions and leading teams to deliver scalable digital products.",
      email: "rkpbitmesra@gmail.com",
      linkedin: "https://www.linkedin.com/in/prem-paswan-011379122/",
    },
    {
      name: "Jyoti Bharti",
      role: "Lead Graphic Designer",
      image: "jyoti.jpg",
      description: "Lead Graphic Designer – crafting visually stunning designs and creative experiences that bring Future Teq Solution’s ideas to life.",
      email: "futureteqsolutions2021@gmail.com",
      linkedin: "https://www.linkedin.com/in/jyoti-bharti-39745a18a/",
    },
    {
      name: "Suraj Paswan",
      role: "Web Developer",
      image: "suraj.png",
      description: "Web Developer – building dynamic, user-friendly, and responsive websites that drive Future Teq Solution’s digital presence and deliver seamless online experiences.",
      email: "surajpaswan13211@gmail.com",
      linkedin: "https://www.linkedin.com/in/suraj-paswan-285940319/",
    },
  ]

  const achievements = [
    { icon: Users, number: "150+", label: "Satisfied Clients" },
    { icon: Award, number: "200+", label: "Successful Projects" },
    { icon: TrendingUp, number: "98%", label: "Client Retention Rate" },
    { icon: Shield, number: "3+", label: "Years of Excellence" },
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
          About Future Teq Solution
        </Badge>
        <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6">
          Pioneering the Future of Technology
        </h1>
        <p className="text-lg mb-6 opacity-90 leading-relaxed">
          At <strong>Future Teq Solution</strong>, we go beyond providing IT services — 
          we deliver transformative technology experiences. With expertise in 
          <strong> IT support, Hosted Telephony, and ERP solutions</strong>, we empower 
          businesses to streamline operations and achieve measurable growth.
          As a full-service IT company, we specialize in <strong>interactive website 
          development</strong> and <strong>web-based software applications</strong> 
          built with advanced technologies. Our team holds the highest level of 
          technical certifications and expertise, ensuring that every challenge is 
          met with precision and innovation.
        </p>
        
        {/* <Button size="sm" variant="secondary">
          Get to Know Us Better
        </Button> */}
      </div>
      <div className="relative">
        <img
          src="/software-team-collaboration.png"
          alt="Future Teq Solution Office"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Future Teq Solution was born from a simple yet powerful vision: to bridge the gap between cutting-edge
                technology and real-world business needs. Since our inception, we have been dedicated to delivering
                innovative solutions that not only solve today's challenges but also prepare our clients for tomorrow's
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-sans font-semibold mb-4">What We Do</h3>
                <p className="text-muted-foreground mb-4">
                  We specialize in comprehensive technology services including software development, hardware solutions,
                  web and mobile applications, graphic design, and digital marketing. Our holistic approach ensures that
                  every aspect of your digital presence works in harmony.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Custom Software Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Enterprise Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Digital Transformation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-sans font-semibold mb-4">How We Work</h3>
                <p className="text-muted-foreground mb-4">
                  Our collaborative approach combines technical expertise with deep business understanding. We work
                  closely with our clients to understand their unique challenges and deliver tailored solutions that
                  drive measurable results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Agile Development Methodology</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Continuous Communication</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Quality-First Approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Strength, Innovation */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="font-sans text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-sans font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-xl">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Meet the Experts Behind Future Teq Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of professionals brings together years of experience, creativity, and technical expertise
              to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                    />
                  </div>
                  <CardTitle className="font-sans text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => (window.location.href = `mailto:${member.email}`)}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the hundreds of satisfied clients who have transformed their businesses with Future Teq Solution. Let's
            discuss how we can help you achieve your goals.
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
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  )
}
