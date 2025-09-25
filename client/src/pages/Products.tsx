import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight } from "lucide-react";

const productCategories = [
  {
    title: "Detox & Juices",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Our Super Detox Plus range addresses the growing demand for natural cleansing solutions, ensuring a consistent customer base for health-conscious consumers.",
    marketStatus: "High Market Demand"
  },
  {
    title: "Women's Wellness",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Our Nari Amrit range addresses key women's health concerns including hormonal balance and vitality, ensuring a dedicated customer following.",
    marketStatus: "Growing Market Segment"
  },
  {
    title: "Men's Vitality",
    image: "https://images.unsplash.com/photo-1571019613540-996a0ad18e36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Our Shakti Veer Plus and LivAmrit products target men's energy, vitality, and liver health - a rapidly expanding market segment.",
    marketStatus: "Premium Market Position"
  },
  {
    title: "Kids' Health & Nutrition",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Our True Kids Care range focuses on immunity and growth, tapping into parents' priority for children's health and development.",
    marketStatus: "Parent Priority Market"
  },
  {
    title: "Oral Care",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Our dental care solutions address everyday oral health needs, providing partners with products that customers use regularly.",
    marketStatus: "Daily Use Products"
  },
  {
    title: "Complete Wellness Portfolio",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    description: "Access to our entire range ensures you can serve every customer's wellness needs, maximizing your revenue potential.",
    marketStatus: "Maximum Revenue Potential"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4" data-testid="heading-products">
              Our Diverse Range of High-Demand Products
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium wellness solutions that ensure consistent customer demand for our partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-testid={`card-product-${index}`}
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-product-${index}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`title-product-${index}`}>
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-trust">
                    <TrendingUp className="mr-2" size={16} />
                    <span className="font-medium" data-testid={`status-product-${index}`}>
                      {category.marketStatus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/apply" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
              data-testid="button-become-distributor"
            >
              Become a Distributor for These Best-Selling Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
