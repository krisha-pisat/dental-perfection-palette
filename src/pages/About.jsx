import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import doctorImage from "@/assets/doctor-portrait.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import { Award, Heart, Users, Microscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities in every treatment.",
    },
    {
      icon: Award,
      title: "Excellence in Practice",
      description: "Decades of expertise combined with continuous learning and improvement.",
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art equipment ensuring precise, efficient treatments.",
    },
    {
      icon: Users,
      title: "Family Approach",
      description: "Caring for patients of all ages with personalized attention.",
    },
  ];

  const team = [
    {
      name: "Dr. [Mother's Name]",
      role: "Principal Dentist & Founder",
      bio: "With over 25 years of experience in dentistry, Dr. [Mother's Name] has dedicated her career to creating beautiful, healthy smiles. Her gentle approach and attention to detail have earned the trust of thousands of patients.",
    },
    {
      name: "Dr. Sarah Mehta",
      role: "Associate Dentist",
      bio: "Specializing in cosmetic dentistry and smile makeovers, Dr. Mehta brings a creative eye and precision to every procedure.",
    },
    {
      name: "Anjali Sharma",
      role: "Lead Dental Hygienist",
      bio: "Anjali has been our lead dental hygienist for 8 years and is passionate about preventive care and patient education.",
    },
    {
      name: "Rahul Verma",
      role: "Dental Assistant",
      bio: "Rahul ensures every patient feels comfortable and well-cared for throughout their visit.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Dental Perfections
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in">
            Building beautiful smiles and lasting relationships since 1998
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))]">
              Our Commitment to Excellence and Care
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Dental Perfections, we believe in more than just treating teeth – we're dedicated
              to transforming lives through exceptional dental care. Our philosophy centers on
              combining cutting-edge technology with a compassionate, personalized approach that
              makes every patient feel valued and understood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-2 hover:border-[hsl(var(--mint))] hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-mint flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[hsl(var(--navy))]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[hsl(var(--navy))]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Highlight */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={doctorImage}
                alt="Dr. [Mother's Name]"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))]">
                Meet Dr. [Mother's Name]
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Dr. [Mother's Name] founded Dental Perfections with a vision to create a practice
                where advanced dental care meets genuine compassion. Her journey in dentistry began
                over 25 years ago, and she has since become one of Mumbai's most trusted dental
                professionals.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Specializing in cosmetic dentistry, dental implants, and comprehensive family care,
                Dr. [Mother's Name] is known for her gentle touch and meticulous attention to
                detail. She believes that every smile tells a story, and she's passionate about
                helping her patients write theirs with confidence.
              </p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[hsl(var(--mint-dark))]" />
                  <span className="text-gray-700">BDS, MDS (Prosthodontics)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[hsl(var(--mint-dark))]" />
                  <span className="text-gray-700">25+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[hsl(var(--mint-dark))]" />
                  <span className="text-gray-700">Member, Indian Dental Association</span>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy-light))] text-white shadow-medium"
              >
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Our Friendly and Professional Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Dental Perfections special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-mint mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-1 text-[hsl(var(--navy))]">{member.name}</h3>
                  <p className="text-sm text-[hsl(var(--mint-dark))] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Tour Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Tour Our State-of-the-Art Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience comfort and cutting-edge technology in every corner
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-scale-in">
              <img
                src={treatmentRoom}
                alt="Modern Treatment Room"
                className="rounded-xl shadow-medium w-full h-80 object-cover"
              />
              <h3 className="text-2xl font-bold mt-4 text-[hsl(var(--navy))]">
                Modern Treatment Rooms
              </h3>
              <p className="text-gray-600 mt-2">
                Clean, comfortable spaces equipped with the latest dental technology.
              </p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-gradient-mint rounded-xl shadow-medium w-full h-80 flex items-center justify-center">
                <Microscope className="w-24 h-24 text-[hsl(var(--navy))]" />
              </div>
              <h3 className="text-2xl font-bold mt-4 text-[hsl(var(--navy))]">
                Advanced Equipment
              </h3>
              <p className="text-gray-600 mt-2">
                Digital X-rays, laser dentistry, and more for precise treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;