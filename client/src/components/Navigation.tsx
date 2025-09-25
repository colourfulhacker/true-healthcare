import { Link, useLocation } from "wouter";
import { Plus } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" data-testid="link-home">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                <Plus className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">TRUE Healthcare™</h1>
                <p className="text-xs text-muted-foreground">Premium Wellness Solutions</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                data-testid="link-nav-home"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === "/products" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                data-testid="link-nav-products"
              >
                Our Products
              </Link>
              <Link 
                href="/apply" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-md text-sm font-semibold transition-colors"
                data-testid="button-nav-apply"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
