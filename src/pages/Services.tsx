import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Smile,
  Shield,
  Users,
  Stethoscope,
  Zap,
  Crown,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Dental Implants",
      description:
        "Restore your smile permanently with titanium implants that look, feel, and function like natural teeth.",
      features: [
        "Single tooth replacement",
        "Multiple teeth solutions",
        "Full arch restoration",
        "3D imaging & planning",
      ],
      link: "/services/implants",
    },
    {
      icon: Smile,
      title: "Smile Makeovers",
      description:
        "Transform your smile with a customized combination of cosmetic treatments tailored to your goals.",
      features: [
        "Porcelain veneers",
        "Professional teeth whitening",
        "Gum contouring",
        "Digital smile design",
      ],
      link: "/services/smile-makeover",
    },
    {
      icon: Shield,
      title: "Root Canal Treatment",
      description:
        "Save your natural tooth with painless, precision root canal therapy using advanced techniques.",
      features: [
        "Painless procedures",
        "Single-visit treatment",
        "Microscopic precision",
        "High success rates",
      ],
      link: "/services/root-canal",
    },
    {
      icon: Crown,
      title: "Crowns & Bridges",
      description:
        "Restore damaged teeth and replace missing ones with durable, natural-looking crowns and bridges.",
      features: [
        "Ceramic crowns",
        "Porcelain bridges",
        "Same-day options",
        "Custom color matching",
      ],
      link: "/services",
    },
    {
      icon: Users,
      title: "Family Dentistry",
      description:
        "Comprehensive dental care for the whole family, from preventive check-ups to restorative treatments.",
      features: [
        "Pediatric dentistry",
        "Regular check-ups",
        "Preventive care",
        "Dental hygiene education",
      ],
      link: "/services",
    },
    {
      icon: Zap,
      title: "Teeth Whitening",
      description:
        "Achieve a brighter, whiter smile with our professional teeth whitening treatments.",
      features: [
        "In-office whitening",
        "Take-home kits",
        "Safe for enamel",
        "Long-lasting results",
      ],
      link: "/services",
    },
    {
      icon: Stethoscope,
      title: "Gum Disease Treatment",
      description:
        "Protect your oral health with comprehensive periodontal care and gum disease treatment.",
      features: [
        "Deep cleaning",
        "Laser therapy",
        "Gum grafting",
        "Maintenance programs",
      ],
      link: "/services",
    },
    {
      icon: Shield,
      title: "Emergency Dental Care",
      description:
        "Quick relief for dental emergencies with same-day appointments available.",
      features: [
        "Toothache relief",
        "Broken tooth repair",
        "Lost filling replacement",
        "Urgent extractions",
      ],
      link: "/contact",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Dental Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in">
            Comprehensive dental solutions to keep your smile healthy, beautiful, and confident
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-smooth border-2 hover:border-[hsl(var(--mint))] animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-mint flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-8 h-8 text-[hsl(var(--navy))]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--navy))]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--mint-dark))]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy-light))] text-white"
                  >
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))] animate-fade-in">
              Why Choose Dental Perfections?
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed animate-fade-in">
              We combine cutting-edge technology with compassionate care to deliver exceptional
              results that exceed your expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-scale-in">
                <div className="text-5xl font-bold text-[hsl(var(--mint-dark))] mb-2">25+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-5xl font-bold text-[hsl(var(--mint-dark))] mb-2">10,000+</div>
                <p className="text-gray-700">Happy Patients</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-5xl font-bold text-[hsl(var(--mint-dark))] mb-2">98%</div>
                <p className="text-gray-700">Success Rate</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-medium px-8"
            >
              <Link to="/contact">
                Schedule Your Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
