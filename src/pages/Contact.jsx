import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Appointment request sent! We'll contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in">
            We're here to help you achieve your perfect smile
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--navy))]">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Have questions or ready to schedule your appointment? We're here to help!
                </p>
              </div>

              <Card className="border-2 border-[hsl(var(--mint))] shadow-medium">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-mint flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[hsl(var(--navy))] mb-1">Phone</h3>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-gray-700 hover:text-[hsl(var(--mint-dark))] transition-smooth"
                      >
                        +91 XXXX XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-mint flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[hsl(var(--navy))] mb-1">Email</h3>
                      <a
                        href="mailto:info@dentalperfections.in"
                        className="text-gray-700 hover:text-[hsl(var(--mint-dark))] transition-smooth"
                      >
                        info@dentalperfections.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-mint flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[hsl(var(--navy))] mb-1">Address</h3>
                      <p className="text-gray-700">
                        [Full Clinic Address]
                        <br />
                        Mumbai, Maharashtra
                        <br />
                        [Pincode]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-mint flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[hsl(var(--navy))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[hsl(var(--navy))] mb-1">Clinic Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p className="text-gray-500">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-card p-6 rounded-xl">
                <h3 className="font-bold text-[hsl(var(--navy))] mb-3">
                  How to Find Us
                </h3>
                <p className="text-gray-700 mb-2">
                  We are located near [Famous Landmark].
                </p>
                <p className="text-gray-700 mb-2">
                  The closest train station is [Station Name].
                </p>
                <p className="text-gray-700">
                  Paid parking is available on the street.
                </p>
              </div>
            </div>

            {/* Appointment Request Form */}
            <div className="animate-slide-in-right">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--navy))]">
                    Request an Appointment
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[hsl(var(--navy))] mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="border-2 focus:border-[hsl(var(--mint))]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[hsl(var(--navy))] mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="border-2 focus:border-[hsl(var(--mint))]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[hsl(var(--navy))] mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="border-2 focus:border-[hsl(var(--mint))]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-sm font-semibold text-[hsl(var(--navy))] mb-2"
                      >
                        Preferred Date & Time
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="datetime-local"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="border-2 focus:border-[hsl(var(--mint))]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[hsl(var(--navy))] mb-2"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dental concerns or questions..."
                        rows={4}
                        className="border-2 focus:border-[hsl(var(--mint))]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-medium text-lg"
                    >
                      Send Request <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-[hsl(var(--navy))] animate-fade-in">
              Visit Our Clinic
            </h2>
            <div className="rounded-xl overflow-hidden shadow-strong animate-scale-in">
              <div className="w-full h-96 bg-gradient-mint flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[hsl(var(--navy))] mx-auto mb-4" />
                  <p className="text-[hsl(var(--navy))] font-semibold text-lg">
                    Interactive Map
                  </p>
                  <p className="text-[hsl(var(--navy))] text-sm mt-2">
                    [Embed Google Maps here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;