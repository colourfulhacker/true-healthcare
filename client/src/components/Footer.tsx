import { Link } from "wouter";
import { MapPin, Phone, Tag, MessageCircle, Mail } from "lucide-react";
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
                <Link href="/opportunity" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-opportunity">
                  The Opportunity
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-products">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-200 hover:text-white transition-colors" data-testid="link-footer-careers">
                  Careers
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
              <li>Liver Care Products</li>
              <li>Detox & Wellness Juices</li>
              <li>Women's Health</li>
              <li>Men's Vitality</li>
              <li>Children's Health</li>
              <li>Diabetes Care</li>
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
                <Mail className="mr-3 flex-shrink-0" size={16} />
                <a 
                  href="mailto:info@truehealthcare.co.in" 
                  className="text-blue-200 hover:text-white transition-colors"
                  data-testid="link-email-contact"
                >
                  info@truehealthcare.co.in
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-3 flex-shrink-0" size={16} />
                <a 
                  href="https://wa.me/919660393455" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  data-testid="link-whatsapp-contact"
                >
                  WhatsApp: +91 96603 93455
                </a>
              </div>
              <div className="flex items-center">
                <Tag className="mr-3 flex-shrink-0" size={16} />
                <span data-testid="text-fssai-license">FSSAI License: 12222026000685</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-blue-200 mb-4 md:mb-0" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} TRUE Healthcare™. All rights reserved. | FSSAI Approved | Premium Quality Wellness Products
            </p>
            <p className="text-blue-200 text-sm">
              Website developed by{' '}
              <a 
                href="https://cehpoint.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 transition-colors font-semibold"
                data-testid="link-cehpoint"
              >
                Cehpoint
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
