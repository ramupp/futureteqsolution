"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="text-6xl font-extrabold font-sans text-foreground mb-4 animate-pulse">
          Coming Soon...
        </h1>
        <p className="text-xl font-serif text-muted-foreground max-w-xl">
          Exciting content is on its way! Stay tuned for the latest tech insights, updates, and much more.
        </p>
      </div>
      <Footer />
    </>
  )
}
