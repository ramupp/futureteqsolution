import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to these
              terms.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using Future Teq Solution's services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Services Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>Future Teq Solution provides technology services including but not limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom software development</li>
                  <li>Hardware solutions and consulting</li>
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Graphic design services</li>
                  <li>Digital marketing and SEO services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Make payments according to agreed terms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use our services in compliance with applicable laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>Payment terms are established in individual project agreements. Generally:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Work may be suspended for overdue accounts</li>
                  <li>All prices are exclusive of applicable taxes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>Upon full payment, clients receive ownership of custom-developed solutions. However:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Future Teq Solution retains rights to general methodologies and know-how</li>
                  <li>Third-party components remain subject to their respective licenses</li>
                  <li>Future Teq Solution may use project experience for future development</li>
                  <li>Confidential information will be protected as agreed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  Future Teq Solution's liability is limited to the amount paid for the specific service. We are not
                  liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Third-party actions or services</li>
                  <li>Force majeure events</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>Either party may terminate services with written notice. Upon termination:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>Work completed to date will be delivered upon payment</li>
                  <li>Confidentiality obligations continue</li>
                  <li>Each party retains their respective rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="font-serif text-muted-foreground leading-relaxed">
                <p>For questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Email:</strong> legal@futureteqsolution.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Tech Street, Innovation City, IC 12345
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
