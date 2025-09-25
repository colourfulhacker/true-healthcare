import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import OpportunitySnapshot from "@/components/OpportunitySnapshot";
import HowToBecomePartner from "@/components/HowToBecomePartner";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TRUE Healthcare™",
    "url": "https://truehealthcare.co.in",
    "logo": "https://truehealthcare.co.in/logo.jpg",
    "description": "India's leading wellness franchise network offering premium health supplements and business opportunities nationwide.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 7, Manda Road, Pachkodiya, Jobner, Phulera",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "303328",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9610485482",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://wa.me/919660393455"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="TRUE Healthcare™ | Premium Wellness Franchise Opportunities in India"
        description="Join TRUE Healthcare™ - India's fastest-growing wellness franchise network. Premium health supplements, proven business model, comprehensive support. Start your distributorship today!"
        keywords="TRUE Healthcare franchise, wellness business opportunity, health supplements distributor, franchise opportunity India, FMCG franchise, healthcare business"
        canonicalUrl="https://truehealthcare.co.in"
        structuredData={structuredData}
      />
      <Navigation />
      <Hero />
      <WhyPartner />
      <OpportunitySnapshot />
      <HowToBecomePartner />
      <Footer />
    </div>
  );
}
