"use client"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

// Sample data for intern cards
const interns = [
  {
    id: 1,
    name: "Subham Soni",
    role: "Java Developer Intern",
    duration: "6 Months",
    startDate: "1st July 2026",
    endDate: "31st Dec 2026",
    image: "/Subham.jpeg", // Note: Ensure image paths start with '/' if stored in /public directory
  },
  {
    id: 2,
    name: "Krishna Kumar",
    role: "Java Developer Intern",
    duration: "6 Months",
    startDate: "1st September 2026",
    endDate: "28th February 2027",
    image: "/Krishna.jpeg",
  },
  {
    id: 3,
    name: "Bittu Soni",
    role: "Java Developer Intern",
    duration: "6 Months",
    startDate: "1st October 2026",
    endDate: "30th March 2027",
    image: "/Bittu.jpeg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* HERO SECTION WITH GRADIENT BACKGROUND */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-primary-foreground space-y-6">
              <Badge variant="secondary" className="text-sm font-semibold uppercase tracking-wider px-3 py-1">
                Empowering Future Talent
              </Badge>

              <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight">
                Transforming Students into <span className="underline decoration-white/40 underline-offset-4">Job-Ready Professionals</span>
              </h1>

              <p className="text-lg opacity-90 leading-relaxed font-serif">
                Our immersive internship program bridges the gap between academic learning and industry expectations. We provide hands-on experience on live real-world projects, mentorship from industry experts, and a modern tech ecosystem designed to kickstart your career at <strong>Future Teq Solution</strong>.
              </p>

              <div className="space-y-3 font-sans opacity-95 pt-2">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  <span>Real-world project experience with production codebases</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  <span>1-on-1 career guidance and code reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  <span>Proven pathway to full-time employment & tech roles</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Students collaborating on tech projects during internship"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* INTERNS GRID SECTION */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-foreground">
              Meet Our Current Interns
            </h2>
            <p className="text-lg font-serif text-muted-foreground">
              Meet the passionate, driven candidates currently building innovative solutions and accelerating their tech careers with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {interns.map((student) => (
              <div
                key={student.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Full-width Square Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details Container Below Image */}
                <div className="p-5 flex flex-col flex-grow text-left space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground tracking-wide">
                      {student.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-1">
                      {student.role}
                    </p>
                  </div>

                  {/* Detailed Information Grid */}
                  <div className="mt-auto pt-3 border-t border-border text-xs text-muted-foreground space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground/80">Duration:</span>
                      <span className="font-semibold text-foreground">{student.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground/80">Start Date:</span>
                      <span>{student.startDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground/80">End Date:</span>
                      <span>{student.endDate}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}