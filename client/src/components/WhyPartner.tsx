import { Shield, MapPin, TrendingUp, Users, Rocket, Package, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Shield,
    title: "Trusted Brand",
    description: "Strong market presence with established reputation in the healthcare industry"
  },
  {
    icon: MapPin,
    title: "Exclusive Territories",
    description: "Monopoly rights from State down to Panchayat level - no competition in your area"
  },
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "25%–40% Profit Margins on all products"
  },
  {
    icon: Users,
    title: "Full Support",
    description: "Marketing materials and comprehensive training provided by our expert team"
  },
  {
    icon: Rocket,
    title: "Fast ROI",
    description: "High demand ensures quick returns on your investment within 6-12 months"
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Diverse portfolio covering major wellness categories for maximum market reach"
  }
];

export default function WhyPartner() {
  return (
    <section id="opportunity" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="heading-why-partner">
            Why Partner With TRUE Healthcare™?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's most trusted wellness brand and build a profitable business with our proven franchise model
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              data-testid={`card-benefit-${index}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="text-primary text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">
                {benefit.title === "High Profit Margins" ? (
                  <>
                    <span className="text-trust font-bold text-xl">25%–40%</span> Profit Margins on all products
                  </>
                ) : (
                  benefit.description
                )}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-trust to-primary rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4" data-testid="heading-convinced">
            Convinced About the Opportunity?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Don't wait - limited territories available. Secure your exclusive area and start building your wellness empire today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold"
                data-testid="button-secure-territory"
              >
                Secure Your Territory Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold"
              onClick={() => {
                const message = `🌿 *TRUE Healthcare™ Partnership Questions*

*Interest:* I'm interested in the TRUE Healthcare™ franchise opportunity

*Questions:* I would like to know more about:
- Territory availability in my area
- Investment requirements and options
- Training and support provided
- Expected profit margins and ROI
- Success stories from existing partners

Please share detailed information to help me make an informed decision.

Thank you! 🙏`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919660393455?text=${encodedMessage}`, '_blank');
              }}
              data-testid="button-ask-questions"
            >
              <MessageCircle className="mr-2" size={20} />
              Ask Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
