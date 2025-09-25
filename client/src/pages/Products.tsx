import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, ArrowRight, Package, Users, Heart, Zap, Baby, Droplet } from "lucide-react";

// Import actual product images
import livAmritGoldImage from "@/assets/liv-amrit-gold-tablets.jpg";
import shaktiVeerPlusImage from "@/assets/shakti-veer-plus-tablets.jpg";
import nariAmritGoldImage from "@/assets/nari-amrit-gold-tablets.jpg";
import superDetoxPlusImage from "@/assets/super-detox-plus-juice.jpg";
import trueDiabcareImage from "@/assets/true-diabcare-syrup.jpg";
import trueKidsCareImage from "@/assets/true-kids-care-syrup.jpg";
import nariAmritPlusImage from "@/assets/nari-amrit-plus-syrup.jpg";
import livAmritPlusImage from "@/assets/livamrit-plus-syrup.jpg";

// Premium Tablet Products
const tabletProducts = [
  {
    name: "Liv Amrit Gold",
    category: "Liver Care",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: livAmritGoldImage,
    icon: Heart,
    keySellingPoints: "Advanced liver detox & repair. Targets fatty liver & toxins support. Boost enzyme & digestion.",
    supplementFacts: "Bhui Amla (100mg), Makoi (100mg), Kalmegh (100mg), Punarnava (60mg), Bhringraj (60mg), Pitpapda (50mg), Rohida (50mg), Goddhi (50mg), Shankhpushpi (50mg), Daruharidra (60mg), Kasodai (60mg), Amla (50mg), Vidang (40mg), Chitrak (40mg), Nishot (40mg), Kutkai (45mg), Cinnamon (40mg), Milk Thistle (5mg)",
    marketStatus: "High Demand Product",
    productType: "tablet"
  },
  {
    name: "Shakti Veer Plus",
    category: "Men's Health",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: shaktiVeerPlusImage,
    icon: Zap,
    keySellingPoints: "Enhance vitality. Promote vigor. Boost energy for men's wellness and stamina.",
    supplementFacts: "Ashwagandha Ext. (100mg), Shilajit Ext. (100mg), Shatavari Ext. (100mg), Pipamool Ext. (100mg), Trikatu Ext. (75mg), Safed Musli Ext. (75mg), Kali Musli Ext. (80mg), Gokhru Ext. (80mg), Bala Ext. (100mg), Jayphal Ext. (50mg), Vidarikand (50mg), Akarkara Ext. (50mg), Kidajadi (15mg)",
    marketStatus: "Premium Market Position",
    productType: "tablet"
  },
  {
    name: "Nari Amrit Gold",
    category: "Women's Health",
    form: "60 Tablets (1000mg) • 1-2 tablets twice daily",
    image: nariAmritGoldImage,
    icon: Users,
    keySellingPoints: "Hormonal balance & vitality. Energy, strength & blood immunity. Anti-aging support for women.",
    supplementFacts: "Sea Buckthorn (60mg), Dashmool Ext. (60mg), Noni (60mg), Pippali Ext. (60mg), Bhringraj (50mg), Jamun Ext. (40mg), Ginger (30mg), Baheda Ext. (50mg), Lodhra Ext. (40mg), Kachnar Gugal (40mg), Shatavari Ext. (50mg), Licorice Root (30mg), Ashwagandha Ext. (50mg), Akarkara Ext. (50mg), Vidarikand (30mg), Jaipatri (30mg), Nagar Motha (40mg), Mutha Peli (30mg)",
    marketStatus: "Growing Market Segment",
    productType: "tablet"
  }
];

// Liquid Products (Syrups & Juices)
const liquidProducts = [
  {
    name: "Super Detox Plus Juice",
    category: "General Wellness / Detox",
    form: "1000ml Juice • 15-30ml twice daily on empty stomach",
    image: superDetoxPlusImage,
    icon: Package,
    keySellingPoints: "Complete body detox. Daily energy, boost immunity for health, immunity, and skin wellness.",
    supplementFacts: "Per 10ml: Lemon Grass (300mg), Amla (100mg), Harda (200mg), Beheda (200mg), Aloevera (300mg), Curcumin (50mg), Punarnava (50mg), Menthol (50mg), Cumin (50mg), Ajwain (50mg), Mulethi (50mg), Dana Methia (50mg), Ashwagandha (90mg), Ginger (50mg), Giloy (100mg), Green Tea (50mg), Tulsi (90mg), Kalmegh (40mg), Guggul (30mg), Louki (50mg), Sanay (30mg), Corn Silk (10mg), Marua (10mg), Hiren Khuri (10mg), Gular Ras (10mg)",
    marketStatus: "High Market Demand",
    productType: "juice"
  },
  {
    name: "True Diabcare Syrup",
    category: "Diabetes Care",
    form: "500ml Syrup • 15-30ml twice daily",
    image: trueDiabcareImage,
    icon: Heart,
    keySellingPoints: "Balance blood sugar in natural way. Support insulin & pancreas. Increase energy level & boost immunity.",
    supplementFacts: "Jamun Ext., Gudmar Ext., Methi Ext., Karela Ext., Methi Beej Ext., Amla Ext., Giloy Ext., Ashwagandha Ext., Moringa Ext., and other natural ingredients for diabetes management",
    marketStatus: "Essential Health Category",
    productType: "syrup"
  },
  {
    name: "True Kids Care Syrup",
    category: "Children's Health",
    form: "500ml Syrup • 15-30ml twice daily",
    image: trueKidsCareImage,
    icon: Baby,
    keySellingPoints: "Complete health care for children. Helpful in increasing immunity, improve memory & concentration, improve overall body growth.",
    supplementFacts: "Ashwagandha, Shatavari, Brahmi, Guduchi, Triphala, Gokhru, Shilajit, Safed Musli, Tulsi with essential vitamins including Vitamin C, Vitamin D3, Vitamin B, Vitamin A, Iron, Calcium",
    marketStatus: "Parent Priority Market",
    productType: "syrup"
  },
  {
    name: "Nari Amrit Plus Syrup",
    category: "Women's Health",
    form: "500ml Syrup • 15-30ml twice daily",
    image: nariAmritPlusImage,
    icon: Users,
    keySellingPoints: "Hormonal balance & vitality. Energy, strength & blood immunity. Helpful in white discharge problem & anti aging.",
    supplementFacts: "Bhui Amla (375mg), Makoi (375mg), Kalmegh (375mg), Punarnava (275mg), Bhringraj (275mg), Pitpapda (275mg), Rohida (250mg), Goddhi (250mg), Shankhpushpi (200mg), Daruharidra (200mg), Kasodai (125mg), Amla (125mg), Vidang (125mg), Chitrak (100mg), Nishot (100mg), Kutkai (100mg), Cinnamon (50mg), Milk Thistle (10mg)",
    marketStatus: "Growing Market Segment",
    productType: "syrup"
  },
  {
    name: "LivAmrit Plus Syrup",
    category: "Liver Care",
    form: "500ml Syrup • 15-30ml twice daily",
    image: livAmritPlusImage,
    icon: Heart,
    keySellingPoints: "Advanced liver detox & repair. Fatty liver & toxins support. Boost enzyme & digestion.",
    supplementFacts: "Bhui Amla (375mg), Makoi (375mg), Kalmegh (375mg), Punarnava (275mg), Bhringraj (275mg), Pitpapda (275mg), Rohida (250mg), Goddhi (250mg), Shankhpushpi (200mg), Daruharidra (200mg), Kasodai (125mg), Amla (125mg), Vidang (125mg), Chitrak (100mg), Nishot (100mg), Kutkai (100mg), Cinnamon (50mg), Milk Thistle (10mg)",
    marketStatus: "High Demand Product",
    productType: "syrup"
  }
];

const allProducts = [...tabletProducts, ...liquidProducts];


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
          
          {/* Premium Tablet Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Premium Tablet Range</h2>
            <div className="grid lg:grid-cols-1 gap-8 mb-12">
              {tabletProducts.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  data-testid={`card-tablet-product-${index}`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 md:h-full object-contain bg-gray-50 p-4"
                        data-testid={`img-tablet-product-${index}`}
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <product.icon className="text-primary" size={18} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary" data-testid={`name-tablet-product-${index}`}>
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
                        <span className="font-medium text-sm" data-testid={`status-tablet-product-${index}`}>
                          {product.marketStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liquid Products (Syrups & Juices) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Liquid Formulations (Syrups & Juices)</h2>
            <div className="grid lg:grid-cols-1 gap-8 mb-12">
              {liquidProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                data-testid={`card-liquid-product-${index}`}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 md:h-full object-contain bg-gray-50 p-4"
                      data-testid={`img-liquid-product-${index}`}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <product.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary" data-testid={`name-liquid-product-${index}`}>
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
                      <span className="font-medium text-sm" data-testid={`status-liquid-product-${index}`}>
                        {product.marketStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* FSSAI Certification & Quality Assurance */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Quality Assurance & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-trust" size={32} />
                </div>
                <h3 className="font-semibold text-primary mb-2">FSSAI Approved</h3>
                <p className="text-sm text-muted-foreground">All products are certified by Food Safety and Standards Authority of India</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-trust" size={32} />
                </div>
                <h3 className="font-semibold text-primary mb-2">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Manufactured in GMP certified facilities with strict quality control</p>
              </div>
              <div className="p-4">
                <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplet className="text-trust" size={32} />
                </div>
                <h3 className="font-semibold text-primary mb-2">100% Natural</h3>
                <p className="text-sm text-muted-foreground">Made from natural herbs and ingredients without harmful chemicals</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 italic">
              Contact us for complete product specifications and detailed ingredient information for all our FSSAI-approved supplements.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              href="/apply" 
              className="gradient-premium text-white hover:opacity-90 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 premium-shadow inline-flex items-center"
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
