import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--mint))] flex items-center justify-center text-[hsl(var(--navy))] font-bold">
                DP
              </div>
              <h3 className="text-xl font-bold">Dental Perfections</h3>
            </div>
            <p className="text-sm text-gray-300">
              Excellence in dental care with a commitment to your perfect smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--mint))]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[hsl(var(--mint))] transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--mint))]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-[hsl(var(--mint))]" />
                <span>+91 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-[hsl(var(--mint))]" />
                <span>info@dentalperfections.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-[hsl(var(--mint))]" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-[hsl(var(--mint))]">Clinic Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-[hsl(var(--mint))]" />
                <span>Mon - Fri: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="ml-6">Saturday: 9:00 AM - 3:00 PM</li>
              <li className="ml-6 text-gray-400">Sunday: Closed</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[hsl(var(--mint))] transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[hsl(var(--mint))] transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[hsl(var(--mint))] transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Dental Perfections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
