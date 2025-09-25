import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, MapPin, TrendingUp, Users, Rocket, Package, Award, Star, Target, Handshake } from "lucide-react";
import supportImage from "@assets/stock_images/business_training_su_bc3744d5.jpg";

const franchiseAdvantages = [
  {
    icon: Shield,
    title: "Proven Business Model",
    description: "Established healthcare brand with track record of success across India"
  },
  {
    icon: MapPin,
    title: "Territory Protection",
    description: "Exclusive rights to your area - no competition from other TRUE Healthcare distributors"
  },
  {
    icon: TrendingUp,
    title: "Growing Market",
    description: "Health supplement market in India growing at 15%+ annually"
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "Marketing materials, training, and ongoing business guidance"
  },
  {
    icon: Rocket,
    title: "Quick ROI",
    description: "Most partners see returns within 6-12 months of operation"
  },
  {
    icon: Package,
    title: "Complete Product Range",
    description: "Diverse portfolio covering all major wellness categories"
  }
];

const successMetrics = [
  {
    icon: Star,
    value: "500+",
    label: "Successful Partners",
    description: "Distributors across India"
  },
  {
    icon: Target,
    value: "25-40%",
    label: "Profit Margins",
    description: "On all products"
  },
  {
    icon: Award,
    value: "FSSAI",
    label: "Approved",
    description: "All products certified"
  },
  {
    icon: TrendingUp,
    value: "6-12",
    label: "Months ROI",
    description: "Average payback period"
  }
];

const supportServices = [
  "Initial product training and certification",
  "Marketing materials and promotional content",
  "Territory mapping and customer identification",
  "Ongoing business mentorship and guidance",
  "Advanced distributor dashboard and analytics",
  "Regular product updates and new launches"
];

export default function Opportunity() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="heading-opportunity-main">
              The TRUE Healthcare™ Opportunity
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Join India's most trusted wellness brand and build a sustainable, profitable business in the growing health supplement market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply" 
                className="gradient-premium text-white hover:opacity-90 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 premium-shadow inline-flex items-center justify-center"
                data-testid="button-apply-now"
              >
                <Handshake className="mr-2" size={20} />
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center"
                data-testid={`metric-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-primary text-2xl" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-muted-foreground text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Advantages */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="heading-advantages">
              Why Choose TRUE Healthcare™ Franchise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for success with a proven model, exclusive territories, and comprehensive support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseAdvantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`advantage-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <advantage.icon className="text-primary text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6" data-testid="heading-support">
                Complete Support System
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We don't just give you products - we give you a complete business solution with ongoing support to ensure your success.
              </p>
              <ul className="space-y-4">
                {supportServices.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                    data-testid={`support-item-${index}`}
                  >
                    <div className="w-6 h-6 bg-trust/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-trust rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <img 
                src={supportImage} 
                alt="Business support and training" 
                className="rounded-xl shadow-lg"
                data-testid="img-support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers Detail */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="heading-investment">
              Investment Opportunities
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the investment level that matches your business goals and market reach
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center border-r border-gray-200 pr-8" data-testid="tier-starter">
                <div className="text-accent text-3xl font-bold mb-4">₹50K–₹1L</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Starter Package</h3>
                <p className="text-muted-foreground">Perfect for testing the market at Panchayat level with manageable investment</p>
              </div>
              <div className="text-center border-r border-gray-200 pr-8" data-testid="tier-growth">
                <div className="text-accent text-3xl font-bold mb-4">₹1L–₹3L</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Growth Package</h3>
                <p className="text-muted-foreground">Ideal for serious entrepreneurs targeting Tehsil level territories</p>
              </div>
              <div className="text-center" data-testid="tier-enterprise">
                <div className="text-accent text-3xl font-bold mb-4">₹3L+</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Enterprise Package</h3>
                <p className="text-muted-foreground">For ambitious partners wanting District or State level operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">
            Ready to Start Your Healthcare Business?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of successful partners who have built profitable businesses with TRUE Healthcare™
          </p>
          <Link 
            href="/apply" 
            className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
            data-testid="button-apply-franchise-bottom"
          >
            <Handshake className="mr-2" size={20} />
            Apply for Franchise
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}