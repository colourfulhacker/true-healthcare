import { Shield, MapPin, TrendingUp, Users, Rocket, Package } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
