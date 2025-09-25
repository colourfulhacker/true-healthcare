import { Link } from "wouter";
import { MapPin, Phone, Tag } from "lucide-react";
import logoUrl from "../assets/true-healthcare-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3 flex items-center justify-center">
                <img 
                  src={logoUrl} 
                  alt="TRUE Healthcare™ Logo" 
                  className="w-10 h-10 object-contain rounded-full bg-white p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">TRUE Healthcare™</h3>
                <p className="text-sm text-blue-200">Premium Wellness Solutions</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              India's trusted wellness brand helping entrepreneurs build successful franchise businesses nationwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-apply">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Detox & Juices</li>
              <li>Women's Wellness</li>
              <li>Men's Vitality</li>
              <li>Kids' Health</li>
              <li>Oral Care</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span data-testid="text-company-address">
                  Shop No. 7, Manda Road, Pachkodiya, Jobner, Phulera, Jaipur (Raj.)-303328
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={16} />
                <span data-testid="text-company-phone">+91 9610485482</span>
              </div>
              <div className="flex items-center">
                <Tag className="mr-3 flex-shrink-0" size={16} />
                <span data-testid="text-fssai-license">FSSAI License: 12222026000685</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200" data-testid="text-copyright">
            &copy; 2024 TRUE Healthcare™. All rights reserved. | FSSAI Approved | Premium Quality Wellness Products
          </p>
        </div>
      </div>
    </footer>
  );
}
