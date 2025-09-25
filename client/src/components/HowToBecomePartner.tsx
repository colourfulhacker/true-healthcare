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
        
        <div className="grid md:grid-cols-5 gap-8">
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
      </div>
    </section>
  );
}
