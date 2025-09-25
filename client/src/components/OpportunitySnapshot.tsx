import { Link } from "wouter";
import { Check, Tablet, ArrowRight, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const investmentTiers = [
  {
    amount: "₹50K–₹1L",
    title: "Starter Package",
    features: [
      "Panchayat Level Territory",
      "Initial Product Stock",
      "Marketing Materials",
      "Basic Training"
    ],
    popular: false
  },
  {
    amount: "₹1L–₹3L",
    title: "Growth Package",
    features: [
      "Tehsil Level Territory",
      "Enhanced Product Range",
      "Premium Marketing Kit",
      "Advanced Training",
      "Dashboard Access"
    ],
    popular: true
  },
  {
    amount: "₹3L+",
    title: "Enterprise Package",
    features: [
      "District/State Level",
      "Complete Product Portfolio",
      "Custom Marketing Support",
      "Master Distributor Training",
      "Sub-distributor Rights"
    ],
    popular: false
  }
];

export default function OpportunitySnapshot() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="heading-opportunity">
            A Snapshot of Your Opportunity
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the investment level that suits your business goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {investmentTiers.map((tier, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg text-center border-2 transition-colors relative flex flex-col h-full ${
                tier.popular 
                  ? "border-accent shadow-xl" 
                  : "border-transparent hover:border-accent"
              }`}
              data-testid={`card-investment-${index}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-accent text-4xl font-bold mb-4" data-testid={`text-amount-${index}`}>
                {tier.amount}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{tier.title}</h3>
              <ul className="text-muted-foreground space-y-2 text-left mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="text-trust mr-2 mt-0.5 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-3 mt-auto">
                <Link href="/apply">
                  <Button 
                    className="w-full gradient-premium text-white"
                    data-testid={`button-apply-${index}`}
                  >
                    <FileText className="mr-2" size={16} />
                    Apply for {tier.title}
                  </Button>
                </Link>
                
                <Button
                  variant="outline"
                  className="w-full border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => {
                    const message = `🌿 *TRUE Healthcare™ Franchise Inquiry*

*Package Interest:* ${tier.title} (${tier.amount})

*Request:* I would like detailed information about the ${tier.title} franchise package including:
- Territory allocation details
- Product portfolio included
- Training and support provided
- Expected ROI and timeline
- Investment breakdown

Please share comprehensive details about this opportunity.

Thank you! 🙏`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/919660393455?text=${encodedMessage}`, '_blank');
                  }}
                  data-testid={`button-whatsapp-${index}`}
                >
                  <MessageCircle className="mr-2" size={16} />
                  WhatsApp Inquiry
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Highlight */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Tablet className="text-primary text-xl" />
            </div>
            <h3 className="text-2xl font-semibold text-primary" data-testid="heading-dashboard">
              Advanced Distributor Dashboard
            </h3>
          </div>
          <p className="text-muted-foreground text-lg">
            Includes access to our cutting-edge technology platform for easy order management, stock tracking, and business analytics
          </p>
        </div>
        
        {/* Slot Availability Tracker */}
        <div className="bg-gradient-to-r from-urgency to-red-600 rounded-xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse-slow mr-3"></div>
            <h3 className="text-2xl font-bold" data-testid="heading-slot-availability">
              Check Live Slot Availability
            </h3>
          </div>
          <p className="text-lg mb-6">
            Limited territories available! Secure your exclusive area before someone else does.
          </p>
          <Link 
            href="/apply" 
            className="bg-white text-urgency px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            data-testid="button-check-area"
          >
            Check Your Area Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
