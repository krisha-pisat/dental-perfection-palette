import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "Do you accept new patients?",
          answer: "Yes! We warmly welcome new patients of all ages. Our friendly team is here to make your first visit comfortable and informative. Simply call us or use our online booking system to schedule your initial consultation."
        },
        {
          question: "What are your payment options?",
          answer: "We accept cash, credit/debit cards, UPI, and digital wallets. We also offer flexible payment plans for extensive treatments. Many insurance plans are accepted - please contact us to verify your coverage."
        },
        {
          question: "Do you treat children?",
          answer: "Absolutely! We provide comprehensive family dentistry for patients of all ages, from toddlers to seniors. Our gentle approach and child-friendly environment help young patients feel comfortable and build positive dental experiences."
        },
        {
          question: "What should I bring to my first appointment?",
          answer: "Please bring a valid ID, your insurance card (if applicable), a list of current medications, and any previous dental records or X-rays if available. Arriving 10 minutes early to complete paperwork is appreciated."
        }
      ]
    },
    {
      category: "Appointments & Scheduling",
      questions: [
        {
          question: "How do I book an appointment?",
          answer: "You can book an appointment by calling our clinic, using WhatsApp, or through our online booking system on this website. We'll confirm your appointment and send you a reminder before your visit."
        },
        {
          question: "What are your clinic hours?",
          answer: "We're open Monday to Friday from 9:00 AM to 7:00 PM, and Saturdays from 9:00 AM to 3:00 PM. We're closed on Sundays and public holidays. For emergencies outside these hours, please call our emergency line."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We understand that plans change. Please give us at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient."
        },
        {
          question: "Do you offer emergency dental services?",
          answer: "Yes, we prioritize dental emergencies. If you're experiencing severe pain, trauma, or a knocked-out tooth, call us immediately. We'll do our best to see you the same day."
        }
      ]
    },
    {
      category: "Treatments & Procedures",
      questions: [
        {
          question: "Will my treatment be painful?",
          answer: "We use advanced anesthesia techniques and modern equipment to ensure your comfort. Most procedures are painless, and we always prioritize your comfort. If you're anxious, let us know - we can discuss sedation options."
        },
        {
          question: "How long does a typical dental visit take?",
          answer: "A routine cleaning and check-up typically takes 45-60 minutes. More complex procedures vary - we'll give you an estimated time when you book. We respect your time and run on schedule."
        },
        {
          question: "Do you offer teeth whitening?",
          answer: "Yes! We offer both in-office professional whitening for immediate results and take-home kits for gradual whitening. During your consultation, we'll recommend the best option based on your goals and tooth sensitivity."
        },
        {
          question: "How often should I visit the dentist?",
          answer: "We recommend a professional cleaning and check-up every six months for most patients. However, if you have gum disease or other oral health issues, we may suggest more frequent visits."
        }
      ]
    },
    {
      category: "Anxiety & Comfort",
      questions: [
        {
          question: "What if I'm anxious about my dental visit?",
          answer: "Dental anxiety is very common, and we're experienced in helping nervous patients feel at ease. We offer a calm environment, clear communication, and sedation options if needed. Let us know about your concerns - we're here to help."
        },
        {
          question: "Can I listen to music during my treatment?",
          answer: "Absolutely! Many patients find music helps them relax. You're welcome to bring headphones or we can provide them. Just let us know what helps you feel comfortable."
        },
        {
          question: "How do you ensure cleanliness and sterilization?",
          answer: "Your safety is our top priority. We follow strict sterilization protocols that exceed industry standards. All instruments are thoroughly sterilized, and we use disposable items whenever possible. Our clinic undergoes regular hygiene audits."
        }
      ]
    },
    {
      category: "Costs & Insurance",
      questions: [
        {
          question: "How much does a dental check-up cost?",
          answer: "Our routine check-up and cleaning packages are competitively priced. The exact cost depends on your specific needs. We'll always provide a detailed treatment plan and cost estimate before proceeding with any work."
        },
        {
          question: "Do you accept dental insurance?",
          answer: "We work with most major insurance providers. Please bring your insurance details to your first visit, and our team will help you understand your coverage and file claims on your behalf."
        },
        {
          question: "Do you offer payment plans for expensive treatments?",
          answer: "Yes, we understand that some treatments require a significant investment. We offer flexible payment plans to make quality dental care accessible. Discuss your situation with our financial coordinator to find a solution that works for you."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(var(--mint))] rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "1.5s" }}></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--mint-light))]/30 px-6 py-2 rounded-full mb-6 animate-scale-in">
              <HelpCircle className="w-5 h-5 text-[hsl(var(--mint-dark))]" />
              <span className="text-[hsl(var(--navy))] font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--navy))] mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our clinic, treatments, and what to expect during your visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category}
              className="p-8 shadow-medium hover:shadow-strong transition-smooth animate-fade-in-up border-2 hover:border-[hsl(var(--mint-light))]"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[hsl(var(--gold))]" />
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--mint-dark))] transition-smooth">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 px-4 bg-gradient-card relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-[hsl(var(--mint))] rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-[hsl(var(--navy))] mb-6 animate-fade-in-up">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Our friendly team is always ready to help. Reach out to us through your preferred channel.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 hover:shadow-mint transition-bounce cursor-pointer group">
              <Phone className="w-12 h-12 text-[hsl(var(--mint-dark))] mb-4 mx-auto group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our team</p>
              <Button variant="outline" className="w-full group-hover:bg-[hsl(var(--mint-light))] group-hover:border-[hsl(var(--mint))] transition-smooth">
                +91 XXXX XXXX
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-mint transition-bounce cursor-pointer group">
              <MessageCircle className="w-12 h-12 text-[hsl(var(--mint-dark))] mb-4 mx-auto group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick chat with our team</p>
              <Button variant="outline" className="w-full group-hover:bg-[hsl(var(--mint-light))] group-hover:border-[hsl(var(--mint))] transition-smooth">
                Chat Now
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-mint transition-bounce cursor-pointer group">
              <HelpCircle className="w-12 h-12 text-[hsl(var(--mint-dark))] mb-4 mx-auto group-hover:scale-110 transition-smooth" />
              <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">Book Visit</h3>
              <p className="text-muted-foreground mb-4">Schedule a consultation</p>
              <Button asChild className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] group-hover:scale-105 transition-bounce">
                <Link to="/contact">Book Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
