import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const ServiceDetail = () => {
  const { service } = useParams();

  const serviceData = {
    implants: {
      title: "Dental Implants",
      subtitle: "Restore Your Smile Permanently",
      description:
        "Dental implants are the gold standard for replacing missing teeth, giving you a strong, stable, and natural-looking smile that can last a lifetime.",
      icon: Sparkles,
      what: "A dental implant is a titanium post that is surgically placed into your jawbone, acting as an artificial tooth root. Once healed, a custom-made crown is attached, creating a replacement tooth that looks, feels, and functions just like your natural teeth.",
      candidates: [
        "You have one or more missing teeth",
        "You want a permanent solution instead of dentures",
        "You have a healthy jawbone and gums",
        "You want to restore your ability to chew and speak confidently",
      ],
      process: [
        {
          step: "Consultation & Planning",
          description: "We use 3D imaging to create a precise treatment plan for you.",
        },
        {
          step: "Implant Placement",
          description: "A gentle procedure to place the titanium post into your jaw.",
        },
        {
          step: "Healing & Integration",
          description: "The implant fuses with your bone over a few months.",
        },
        {
          step: "Final Restoration",
          description: "We attach your beautiful, custom-made crown.",
        },
      ],
      faqs: [
        {
          question: "Is the procedure painful?",
          answer:
            "The procedure is performed under local anesthesia, so you won't feel pain during the treatment. Most patients report minimal discomfort afterward, which can be managed with over-the-counter pain medication.",
        },
        {
          question: "How long do dental implants last?",
          answer:
            "With proper care and maintenance, dental implants can last 20-30 years or even a lifetime. Regular dental check-ups and good oral hygiene are essential for longevity.",
        },
        {
          question: "What is the cost of a dental implant in Mumbai?",
          answer:
            "The cost varies depending on several factors including the number of implants needed and any additional procedures. We offer personalized treatment plans and transparent pricing. Schedule a consultation for a detailed quote.",
        },
        {
          question: "How do I care for my new implant?",
          answer:
            "Care for your implant just like your natural teeth - brush twice daily, floss regularly, and visit us for routine check-ups. Avoid smoking and maintain good oral hygiene for best results.",
        },
      ],
    },
    "smile-makeover": {
      title: "Smile Makeovers",
      subtitle: "Transform Your Smile Completely",
      description:
        "A smile makeover combines multiple cosmetic dental treatments to create your dream smile, addressing color, alignment, shape, and overall aesthetics.",
      icon: Sparkles,
      what: "A smile makeover is a comprehensive, customized treatment plan that may include veneers, teeth whitening, crowns, bonding, and other cosmetic procedures. Using digital smile design, we show you a preview of your new smile before we begin.",
      candidates: [
        "You're unhappy with the appearance of your smile",
        "You have multiple cosmetic concerns (color, gaps, chips)",
        "You want a complete transformation",
        "You're getting married or have a special event coming up",
      ],
      process: [
        {
          step: "Digital Smile Design",
          description: "We create a digital preview of your future smile.",
        },
        {
          step: "Treatment Planning",
          description: "We develop a customized plan combining the right procedures.",
        },
        {
          step: "Progressive Treatments",
          description: "We perform the treatments in a logical sequence.",
        },
        {
          step: "Final Reveal",
          description: "You see your stunning new smile!",
        },
      ],
      faqs: [
        {
          question: "How long does a smile makeover take?",
          answer:
            "The duration depends on your specific treatment plan. Simple makeovers may take 2-3 visits over a few weeks, while comprehensive transformations might take 2-3 months.",
        },
        {
          question: "Will my new smile look natural?",
          answer:
            "Absolutely! We design your smile to complement your facial features, skin tone, and personality. Our goal is a beautiful, natural-looking smile that enhances your unique appearance.",
        },
        {
          question: "Is a smile makeover permanent?",
          answer:
            "Many treatments like veneers and crowns last 10-15 years or longer with proper care. We'll provide detailed maintenance instructions to help you preserve your beautiful results.",
        },
        {
          question: "Can I see what my smile will look like beforehand?",
          answer:
            "Yes! We use advanced digital smile design technology to show you a preview of your new smile before we begin any treatment.",
        },
      ],
    },
    "root-canal": {
      title: "Root Canal Treatment",
      subtitle: "Painless Treatment to Save Your Tooth",
      description:
        "Modern root canal therapy is a comfortable, effective procedure that relieves pain and saves your natural tooth from extraction.",
      icon: Sparkles,
      what: "A root canal removes infected or damaged pulp from inside your tooth, cleans and disinfects the root canals, then seals them to prevent future infection. A crown is typically placed to protect and restore the tooth.",
      candidates: [
        "You have severe tooth pain or sensitivity",
        "You have a deep cavity or crack exposing the pulp",
        "You have an abscess or swelling in your gum",
        "You want to save your natural tooth",
      ],
      process: [
        {
          step: "Diagnosis & Anesthesia",
          description: "We examine your tooth and numb the area completely.",
        },
        {
          step: "Pulp Removal",
          description: "We carefully remove the infected tissue using microscopic precision.",
        },
        {
          step: "Cleaning & Sealing",
          description: "We clean, disinfect, and seal the root canals.",
        },
        {
          step: "Crown Placement",
          description: "We restore your tooth with a protective crown.",
        },
      ],
      faqs: [
        {
          question: "Is root canal treatment painful?",
          answer:
            "No! With modern anesthesia and techniques, root canal treatment is no more uncomfortable than getting a filling. We ensure you're completely numb and comfortable throughout.",
        },
        {
          question: "How long does the procedure take?",
          answer:
            "Most root canals can be completed in a single visit lasting 60-90 minutes. Complex cases may require a second appointment.",
        },
        {
          question: "What happens if I don't get a root canal?",
          answer:
            "Without treatment, the infection will spread, causing severe pain, abscess, and ultimately tooth loss. Root canal therapy saves your natural tooth and prevents these complications.",
        },
        {
          question: "How long will my treated tooth last?",
          answer:
            "With a proper crown and good oral hygiene, a root canal-treated tooth can last a lifetime. Regular dental check-ups help ensure long-term success.",
        },
      ],
    },
  };

  const currentService = service
    ? serviceData[service as keyof typeof serviceData]
    : serviceData.implants;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-mint flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <currentService.icon className="w-10 h-10 text-[hsl(var(--navy))]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {currentService.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in">
            {currentService.subtitle}
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-xl text-gray-700 leading-relaxed">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[hsl(var(--navy))] animate-fade-in">
              What Are {currentService.title}?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              {currentService.what}
            </p>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--navy))] text-center animate-fade-in">
              Who is a Candidate?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentService.candidates.map((candidate, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[hsl(var(--mint))] transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--mint-dark))] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{candidate}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
              The {currentService.title} Process at Our Clinic
            </h2>
            <div className="space-y-6">
              {currentService.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--mint))] flex items-center justify-center flex-shrink-0 text-[hsl(var(--navy))] font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.step}</h3>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[hsl(var(--navy))] text-center animate-fade-in">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {currentService.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-gray-200 rounded-xl px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="text-lg font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--mint-dark))] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--navy))]">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Schedule your consultation today and take the first step towards your perfect smile.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold shadow-strong text-lg px-10 py-6"
            >
              <Link to="/contact">
                Book Your Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
