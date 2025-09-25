import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight, Package, Users, Heart, Zap } from "lucide-react";

const detailedProducts = [
  {
    name: "Liv Amrit Gold",
    category: "Liver Care",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: "https://images.unsplash.com/photo-1554344728-bbc732aa7dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Heart,
    keySellingPoints: "Targets common issues like fatty liver, aids in detoxification, boosts enzymes and digestion.",
    supplementFacts: "Bhui Amla (100mg), Makoi (100mg), Kalmegh (100mg), Punarnava (60mg), Bhringraj (60mg), Pitpapda (50mg), Rohida (50mg), Goddhi (50mg), Shankhpushpi (50mg), Daruharidra (60mg), Kasodai (60mg), Amla (50mg), Vidang (40mg), Chitrak (40mg), Nishot (40mg), Kutkai (45mg), Cinnamon (40mg), Milk Thistle (5mg)",
    marketStatus: "High Demand Product"
  },
  {
    name: "Shakti Veer Plus",
    category: "Men's Health",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: "https://images.unsplash.com/photo-1571019613540-996a0ad18e36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Zap,
    keySellingPoints: "High-demand vitality and energy booster, promotes vigor and stamina.",
    supplementFacts: "Ashwagandha Ext. (100mg), Shilajit Ext. (100mg), Shatavari Ext. (100mg), Pipamool Ext. (100mg), Trikatu Ext. (75mg), Safed Musli Ext. (75mg), Kali Musli Ext. (80mg), Gokhru Ext. (80mg), Bala Ext. (100mg), Jayphal Ext. (50mg), Vidarikand (50mg), Akarkara Ext. (50mg), Kidajadi (15mg)",
    marketStatus: "Premium Market Position"
  },
  {
    name: "Nari Amrit Gold",
    category: "Women's Health",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: "https://images.unsplash.com/photo-1594824153122-68dfcd6a7b30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Users,
    keySellingPoints: "Addresses hormonal balance and vitality, a key product for the female wellness market.",
    supplementFacts: "Sea Buckthorn (60mg), Dashmool Ext. (60mg), Noni (60mg), Pippali Ext. (60mg), Bhringraj (50mg), Jamun Ext. (40mg), Ginger (30mg), Baheda Ext. (50mg), Lodhra Ext. (40mg), Kachnar Gugal (40mg), Shatavari Ext. (50mg), Licorice Root (30mg), Ashwagandha Ext. (50mg), Akarkara Ext. (50mg), Vidarikand (30mg), Jaipatri (30mg), Nagar Motha (40mg), Mutha Peli (30mg)",
    marketStatus: "Growing Market Segment"
  },
  {
    name: "Super Detox Plus Juice",
    category: "General Wellness / Detox",
    form: "1000ml Juice • 15-30ml twice daily on empty stomach",
    image: "https://images.unsplash.com/photo-1609501676725-7186f78e9b50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    icon: Package,
    keySellingPoints: "A complete body detox solution, popular for general health, immunity, and skin wellness.",
    supplementFacts: "Per 10ml: Lemon Grass (300mg), Amla (100mg), Harda (200mg), Beheda (200mg), Aloevera (300mg), Curcumin (50mg), Punarnava (50mg), Menthol (50mg), Cumin (50mg), Ajwain (50mg), Mulethi (50mg), Dana Methia (50mg), Ashwagandha (90mg), Ginger (50mg), Giloy (100mg), Green Tea (50mg), Tulsi (90mg), Kalmegh (40mg), Guggul (30mg), Louki (50mg), Sanay (30mg), Corn Silk (10mg), Marua (10mg), Hiren Khuri (10mg), Gular Ras (10mg)",
    marketStatus: "High Market Demand"
  }
];

const additionalProducts = [
  {
    name: "True Diabcare Syrup",
    category: "Diabetes Care",
    marketStatus: "Essential Health Category"
  },
  {
    name: "True Kids Care Syrup",
    category: "Children's Health",
    marketStatus: "Parent Priority Market"
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
              Our High-Quality Products: The Foundation of Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A diverse portfolio of FSSAI-approved, natural supplements that address the core wellness needs of Indian families. High demand and premium quality ensure easy sales and customer loyalty for our partners.
            </p>
          </div>
          
          {/* Detailed Product Information */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {detailedProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                data-testid={`card-detailed-product-${index}`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 md:h-full object-cover"
                      data-testid={`img-detailed-product-${index}`}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <product.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary" data-testid={`name-product-${index}`}>
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{product.category} • {product.form}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Key Selling Points for Distributors:</h4>
                      <p className="text-muted-foreground text-sm mb-3">{product.keySellingPoints}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Supplement Facts:</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{product.supplementFacts}</p>
                    </div>
                    
                    <div className="flex items-center text-trust">
                      <TrendingUp className="mr-2" size={16} />
                      <span className="font-medium text-sm" data-testid={`status-detailed-product-${index}`}>
                        {product.marketStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Products */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Complete Product Range</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalProducts.map((product, index) => (
                <div key={index} className="border border-border rounded-lg p-4" data-testid={`card-additional-product-${index}`}>
                  <h3 className="font-semibold text-primary mb-2" data-testid={`name-additional-product-${index}`}>{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`category-additional-product-${index}`}>{product.category}</p>
                  <div className="flex items-center text-trust">
                    <TrendingUp className="mr-2" size={14} />
                    <span className="font-medium text-sm" data-testid={`status-additional-product-${index}`}>{product.marketStatus}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              Contact us for complete product specifications and detailed ingredient information for all our FSSAI-approved supplements.
            </p>
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
