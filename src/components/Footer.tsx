import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--mint))] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--mint))] flex items-center justify-center text-[hsl(var(--navy))] font-bold">
                DP
              </div>
              <h3 className="text-xl font-bold text-white">Dental Perfections</h3>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              Excellence in dental care with a commitment to your perfect smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--gold))] text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/90 hover:text-[hsl(var(--gold))] transition-smooth hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--gold))] text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/90 hover:text-white transition-smooth">
                <Phone size={16} className="mt-1 text-[hsl(var(--mint))] flex-shrink-0" />
                <span>+91 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-white/90 hover:text-white transition-smooth">
                <Mail size={16} className="mt-1 text-[hsl(var(--mint))] flex-shrink-0" />
                <span>info@dentalperfections.in</span>
              </li>
              <li className="flex items-start gap-2 text-white/90 hover:text-white transition-smooth">
                <MapPin size={16} className="mt-1 text-[hsl(var(--mint))] flex-shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--gold))] text-lg">Clinic Hours</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-[hsl(var(--mint))] flex-shrink-0" />
                <span className="font-semibold">Mon - Fri:</span>
              </li>
              <li className="ml-6">9:00 AM - 7:00 PM</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock size={16} className="text-[hsl(var(--mint))] flex-shrink-0" />
                <span className="font-semibold">Saturday:</span>
              </li>
              <li className="ml-6">9:00 AM - 3:00 PM</li>
              <li className="flex items-center gap-2 mt-2">
                <Clock size={16} className="text-[hsl(var(--mint))] flex-shrink-0" />
                <span className="font-semibold">Sunday:</span>
              </li>
              <li className="ml-6 text-[hsl(var(--gold))]">Closed</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--mint))] flex items-center justify-center transition-bounce hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--mint))] flex items-center justify-center transition-bounce hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--mint))] flex items-center justify-center transition-bounce hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 text-center text-sm text-white/90">
          <p>&copy; {new Date().getFullYear()} Dental Perfections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
