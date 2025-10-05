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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const { scrollYProgress: welcomeScroll } = useScroll({
    target: welcomeRef,
    offset: ["start end", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0.3]);
  const welcomeY = useTransform(welcomeScroll, [0, 0.5, 1], [100, 0, -50]);
  const welcomeImageX = useTransform(welcomeScroll, [0, 0.5], [-100, 0]);

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

      {/* Hero Section - Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.7), rgba(0, 30, 60, 0.5)), url(${heroImage})`,
            y: heroY,
          }}
        />
        <motion.div 
          className="relative z-10 container mx-auto px-4 text-center text-white"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the Art of a{" "}
            <span className="bg-gradient-mint bg-clip-text text-transparent">
              Perfect Smile
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Compassionate, state-of-the-art dental care for you and your family in the heart of
            Mumbai
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
          </motion.div>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Welcome Section - Scroll Animation */}
      <section ref={welcomeRef} className="py-20 bg-gradient-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ x: welcomeImageX }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={doctorImage}
                alt="Dr. [Mother's Name]"
                className="rounded-2xl shadow-strong w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              style={{ y: welcomeY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Stagger Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-strong transition-smooth cursor-pointer border-2 hover:border-[hsl(var(--mint))] h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-mint flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-[hsl(var(--navy))]" />
                    </motion.div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Scale In */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Dental Perfections Difference
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Why thousands of patients trust us with their smiles
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-smooth"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--mint))] flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Floating Cards */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Stories That Make Us Smile
            </h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="shadow-medium hover:shadow-strong transition-smooth h-full">
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="shadow-medium hover:shadow-strong transition-smooth h-full">
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
            </motion.div>
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white"
            >
              <Link to="/gallery">Read More Patient Stories</Link>
            </Button>
          </motion.div>
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
