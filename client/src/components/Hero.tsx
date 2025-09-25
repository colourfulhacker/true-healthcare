import { Link } from "wouter";
import { Handshake, Download, Tag, Award, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Start Your Own Business with <span className="text-accent">TRUE Healthcare™</span> – India's Trusted Wellness Brand
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Premium Food Supplements – Detox, Women, Men, Kids & Oral Care Products
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-white/20 glass-effect rounded-lg px-4 py-2 text-white text-sm font-medium">
                <Tag className="inline mr-2" size={16} />
                FSSAI Approved
              </div>
              <div className="bg-white/20 glass-effect rounded-lg px-4 py-2 text-white text-sm font-medium">
                <Award className="inline mr-2" size={16} />
                Premium Quality
              </div>
              <div className="bg-white/20 glass-effect rounded-lg px-4 py-2 text-white text-sm font-medium">
                <Leaf className="inline mr-2" size={16} />
                100% Natural
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/apply" 
                className="gradient-premium text-white hover:opacity-90 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 premium-shadow inline-flex items-center justify-center"
                data-testid="button-apply-franchise"
              >
                <Handshake className="mr-2" size={20} />
                Apply for Franchise
              </Link>
              <a 
                href="#opportunity" 
                className="bg-white/20 glass-effect hover:bg-white/30 text-white border-2 border-accent/50 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 premium-glow inline-flex items-center justify-center"
                data-testid="button-download-kit"
              >
                <Download className="mr-2" size={20} />
                Download Franchise Kit
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Successful business partnership and franchise opportunity" 
                className="rounded-2xl premium-shadow mx-auto w-full max-w-md"
                data-testid="img-hero-entrepreneur"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-6 py-3 shadow-lg">
                <p className="text-primary font-semibold" data-testid="text-partners-count">Join 500+ Successful Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
