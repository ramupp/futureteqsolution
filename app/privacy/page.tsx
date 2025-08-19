import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, contact us, or
                  use our services. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                  <li>Payment and billing information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who assist us in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transaction</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>You have certain rights regarding your personal information, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to erase your personal information in certain circumstances</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="font-serif text-muted-foreground leading-relaxed">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@futureteqsolution.com
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
