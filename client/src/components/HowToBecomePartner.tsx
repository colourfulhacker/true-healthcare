import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Fill Enquiry Form",
    description: "Quick and easy application process"
  },
  {
    number: 2,
    title: "Verification & Area Mapping",
    description: "Our team verifies your details and territory"
  },
  {
    number: 3,
    title: "Sign Agreement + Training",
    description: "Formalize partnership and comprehensive training"
  },
  {
    number: 4,
    title: "Start Business in Your Area",
    description: "Launch your distributorship with full support"
  },
  {
    number: 5,
    title: "Ongoing Support & Updates",
    description: "We are with you at every step of growth"
  }
];

export default function HowToBecomePartner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="heading-how-to-become">
            How to Become a Partner
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple 5-step process to start your TRUE Healthcare™ business
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center ${index < steps.length - 1 ? 'step-connector' : ''}`}
              data-testid={`step-${index}`}
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="heading-ready-to-start">
            Ready to Start Your TRUE Healthcare™ Journey?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Take the first step towards building your wellness business empire. Join hundreds of successful partners across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold"
                data-testid="button-start-application"
              >
                <FileText className="mr-2" size={20} />
                Start Your Application
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-2 border-white hover:border-green-100 px-8 py-4 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                const message = `🌿 *TRUE Healthcare™ Partnership Inquiry*

*Interest:* I want to become a TRUE Healthcare™ franchise partner

*Request:* Please provide detailed information about:
- Partnership process and requirements
- Investment levels and territory options
- Training and support program
- Expected returns and business model
- Next steps to get started

I'm ready to start building my wellness business with TRUE Healthcare™.

Thank you! 🙏`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919660393455?text=${encodedMessage}`, '_blank');
              }}
              data-testid="button-whatsapp-partnership"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            ✨ Our team typically responds within 2 hours during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
