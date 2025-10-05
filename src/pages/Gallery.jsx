import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Veneers", "Whitening", "Implants", "Smile Makeovers"];

  const testimonials = [
    {
      name: "Priya S.",
      location: "Bandra, Mumbai",
      treatment: "Porcelain Veneers",
      review:
        "Dr. [Mother's Name] is the most gentle and skilled dentist I have ever visited. The clinic is immaculate and the entire team makes you feel at ease. My smile has never looked better!",
      rating: 5,
    },
    {
      name: "Rajesh K.",
      location: "Andheri, Mumbai",
      treatment: "Root Canal Treatment",
      review:
        "I was terrified of dental procedures, but the team at Dental Perfections made me feel so comfortable. The painless root canal treatment was nothing like I feared. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sneha M.",
      location: "Juhu, Mumbai",
      treatment: "Teeth Whitening",
      review:
        "The professional teeth whitening treatment gave me results beyond my expectations! My confidence has skyrocketed and I can't stop smiling. Thank you, Dental Perfections!",
      rating: 5,
    },
    {
      name: "Arjun P.",
      location: "Powai, Mumbai",
      treatment: "Dental Implants",
      review:
        "After years of hiding my smile due to missing teeth, Dr. [Mother's Name] restored my confidence with dental implants. The process was smooth, painless, and the results are phenomenal!",
      rating: 5,
    },
    {
      name: "Kavita R.",
      location: "Worli, Mumbai",
      treatment: "Smile Makeover",
      review:
        "My complete smile makeover transformed not just my teeth but my entire life. The attention to detail and personalized care I received was exceptional. Worth every penny!",
      rating: 5,
    },
    {
      name: "Vikram N.",
      location: "Colaba, Mumbai",
      treatment: "Crown & Bridge",
      review:
        "The crown work done at Dental Perfections is flawless. You can't even tell which tooth was treated - it blends perfectly with my natural teeth. Amazing craftsmanship!",
      rating: 5,
    },
  ];

  const cases = [
    { id: 1, treatment: "Veneers", category: "Veneers" },
    { id: 2, treatment: "Whitening", category: "Whitening" },
    { id: 3, treatment: "Implants", category: "Implants" },
    { id: 4, treatment: "Smile Makeover", category: "Smile Makeovers" },
    { id: 5, treatment: "Veneers", category: "Veneers" },
    { id: 6, treatment: "Whitening", category: "Whitening" },
  ];

  const filteredCases =
    filter === "All" ? cases : cases.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Before & After Smile Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in">
            Real patients, life-changing results
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore the smile transformations we have created for our wonderful patients. All
              photos are of actual patients of Dental Perfections and have been shared with their
              kind permission.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Gallery */}
      <section className="py-12 bg-gradient-card">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? "default" : "outline"}
                className={
                  filter === filterName
                    ? "bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy-light))] text-white"
                    : "border-2 border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white"
                }
              >
                {filterName}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-smooth bg-white animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-mint flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-[hsl(var(--navy))] font-semibold text-lg">
                      Before & After
                    </p>
                    <p className="text-[hsl(var(--navy))] text-sm mt-2">
                      {caseItem.treatment} Transformation
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[hsl(var(--navy))] mb-2">
                    Case: {caseItem.treatment}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Treatment: {caseItem.treatment === "Smile Makeover" 
                      ? "Combination of Veneers and Professional Whitening"
                      : caseItem.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--navy))]">
              Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from our patients about their transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-xl shadow-medium hover:shadow-strong transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">{testimonial.review}</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[hsl(var(--navy))]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-[hsl(var(--mint-dark))] mt-1 font-semibold">
                    Treatment: {testimonial.treatment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Imagine Your Own Transformation
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Your beautiful smile story starts with a simple consultation
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-strong px-8"
            >
              <Link to="/contact">
                Book Your Smile Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;