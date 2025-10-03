import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-clinic.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";
import happyPatient from "@/assets/happy-patient.jpg";
import {
  Smile,
  Award,
  Shield,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Dental Implants",
      description: "Permanently replace missing teeth with natural-looking solutions.",
      link: "/services/implants",
    },
    {
      icon: Smile,
      title: "Smile Makeovers",
      description: "Transform your smile with cosmetic treatments like veneers and whitening.",
      link: "/services/smile-makeover",
    },
    {
      icon: Shield,
      title: "Painless Root Canals",
      description: "Relieve pain and save your natural tooth with our advanced techniques.",
      link: "/services/root-canal",
    },
    {
      icon: Users,
      title: "Family Dentistry",
      description: "Comprehensive dental care for all ages, from children to adults.",
      link: "/services",
    },
  ];

  const features = [
    "Experienced & Caring Doctor with decades of expertise",
    "Advanced Technology for safer, faster treatments",
    "Strict Sterilization Protocols for your safety",
    "Patient-Centric Approach with personalized care",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Experience the Art of a{" "}
            <span className="bg-gradient-mint bg-clip-text text-transparent">
              Perfect Smile
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Compassionate, state-of-the-art dental care for you and your family in the heart of
            Mumbai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-strong text-lg px-8 py-6 transition-bounce"
            >
              <Link to="/contact">
                Book Your Appointment <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={doctorImage}
                alt="Dr. [Mother's Name]"
                className="rounded-2xl shadow-strong w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))]">
                Welcome to Dental Perfections
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Dental Perfections, we believe that a healthy smile is a masterpiece. Led by Dr.
                [Mother's Name], our clinic combines advanced dental technology with a gentle,
                personalized touch.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are dedicated to providing you with the highest standard of care in a
                comfortable and friendly environment. Your smile is our passion.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy-light))] text-white shadow-medium"
              >
                <Link to="/about">
                  Meet Our Team <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-smooth cursor-pointer border-2 hover:border-[hsl(var(--mint))] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-mint flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="w-8 h-8 text-[hsl(var(--navy))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[hsl(var(--navy))]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-[hsl(var(--mint-dark))] font-semibold inline-flex items-center hover:gap-2 transition-smooth group"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Dental Perfections Difference
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Why thousands of patients trust us with their smiles
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--mint))] flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Stories That Make Us Smile
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-smooth animate-scale-in">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "Dr. [Mother's Name] is the most gentle and skilled dentist I have ever visited.
                  The clinic is immaculate and the entire team makes you feel at ease. My smile has
                  never looked better!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-mint" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--navy))]">Priya S.</p>
                    <p className="text-sm text-gray-500">Bandra, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-medium hover:shadow-strong transition-smooth animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "I was terrified of dental procedures, but the team at Dental Perfections made me
                  feel so comfortable. The painless root canal treatment was nothing like I feared.
                  Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-mint" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--navy))]">Rajesh K.</p>
                    <p className="text-sm text-gray-500">Andheri, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white"
            >
              <Link to="/gallery">Read More Patient Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))]">
              Ready for Your Healthiest, Brightest Smile?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Your journey to perfect dental health starts here. Schedule a consultation with us
              today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-strong text-lg px-10 py-6 transition-bounce"
            >
              <Link to="/contact">
                Book an Appointment Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
