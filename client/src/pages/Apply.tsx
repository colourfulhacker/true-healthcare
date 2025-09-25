import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TerritoryChecker from "@/components/TerritoryChecker";
import FranchiseForm from "@/components/FranchiseForm";
import SEOHead from "@/components/SEOHead";

export default function Apply() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apply for TRUE Healthcare™ Franchise",
    "description": "Apply for exclusive TRUE Healthcare™ franchise opportunities. Check territory availability and submit your application.",
    "url": "https://truehealthcare.co.in/apply",
    "isPartOf": {
      "@type": "WebSite",
      "name": "TRUE Healthcare™",
      "url": "https://truehealthcare.co.in"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Apply Now | TRUE Healthcare™ Franchise Application Form"
        description="Apply for your exclusive TRUE Healthcare™ franchise today. Check territory availability, fill the application form and start your wellness business journey. Secure your area now!"
        keywords="apply TRUE Healthcare franchise, franchise application form, territory availability, wellness business opportunity, distributorship application, franchise inquiry"
        canonicalUrl="https://truehealthcare.co.in/apply"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Apply Now Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="heading-apply">
              Apply for Your Exclusive TRUE Healthcare™ Franchise
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure your territory and start your journey to business success
            </p>
          </div>
          
          {/* Interactive Slot Checker */}
          <TerritoryChecker />
          
          {/* Franchise Application Form */}
          <FranchiseForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
