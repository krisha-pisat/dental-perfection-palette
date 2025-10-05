import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--mint))] rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--mint-dark))] flex items-center justify-center text-white font-bold">
                DP
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--navy))]">Dental Perfections</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Excellence in dental care with a commitment to your perfect smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--navy))] text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--navy))] text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth">
                <Phone size={16} className="mt-1 text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span>+91 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth">
                <Mail size={16} className="mt-1 text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span>info@dentalperfections.in</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 hover:text-[hsl(var(--navy))] transition-smooth">
                <MapPin size={16} className="mt-1 text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--navy))] text-lg">Clinic Hours</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span className="font-semibold text-[hsl(var(--navy))]">Mon - Fri:</span>
              </li>
              <li className="ml-6">9:00 AM - 7:00 PM</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock size={16} className="text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span className="font-semibold text-[hsl(var(--navy))]">Saturday:</span>
              </li>
              <li className="ml-6">9:00 AM - 3:00 PM</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock size={16} className="text-[hsl(var(--mint-dark))] flex-shrink-0" />
                <span className="font-semibold text-[hsl(var(--navy))]">Sunday:</span>
              </li>
              <li className="ml-6 text-muted-foreground">Closed</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--mint-light))]/30 hover:bg-[hsl(var(--mint))] text-[hsl(var(--navy))] hover:text-white flex items-center justify-center transition-bounce hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--mint-light))]/30 hover:bg-[hsl(var(--mint))] text-[hsl(var(--navy))] hover:text-white flex items-center justify-center transition-bounce hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--mint-light))]/30 hover:bg-[hsl(var(--mint))] text-[hsl(var(--navy))] hover:text-white flex items-center justify-center transition-bounce hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dental Perfections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;