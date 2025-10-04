import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tips for a Healthy Smile",
      excerpt: "Discover the essential daily habits that will keep your teeth strong and your smile bright for years to come.",
      category: "Oral Health",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "/placeholder.svg",
      delay: "0s"
    },
    {
      id: 2,
      title: "What to Do in a Dental Emergency",
      excerpt: "Quick action can save your tooth. Learn the crucial steps to take when faced with a dental emergency.",
      category: "Emergency Care",
      readTime: "7 min read",
      date: "March 10, 2024",
      image: "/placeholder.svg",
      delay: "0.1s"
    },
    {
      id: 3,
      title: "The Benefits of Invisalign",
      excerpt: "Straighten your teeth discreetly. Explore how Invisalign can transform your smile without traditional braces.",
      category: "Cosmetic Dentistry",
      readTime: "6 min read",
      date: "March 5, 2024",
      image: "/placeholder.svg",
      delay: "0.2s"
    },
    {
      id: 4,
      title: "Root Canal Treatment: What to Expect",
      excerpt: "Nervous about your root canal? We break down the process step-by-step to ease your mind.",
      category: "Treatments",
      readTime: "8 min read",
      date: "February 28, 2024",
      image: "/placeholder.svg",
      delay: "0.3s"
    },
    {
      id: 5,
      title: "Teeth Whitening: Professional vs At-Home",
      excerpt: "Compare the pros and cons of professional whitening treatments versus at-home solutions.",
      category: "Cosmetic Dentistry",
      readTime: "5 min read",
      date: "February 20, 2024",
      image: "/placeholder.svg",
      delay: "0.4s"
    },
    {
      id: 6,
      title: "Dental Implants: A Permanent Solution",
      excerpt: "Why dental implants are considered the gold standard for tooth replacement and what the process involves.",
      category: "Treatments",
      readTime: "10 min read",
      date: "February 15, 2024",
      image: "/placeholder.svg",
      delay: "0.5s"
    }
  ];

  const categories = ["All", "Oral Health", "Treatments", "Cosmetic Dentistry", "Emergency Care"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--mint))] rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--mint-light))]/30 px-6 py-2 rounded-full mb-6 animate-scale-in">
              <Sparkles className="w-5 h-5 text-[hsl(var(--mint-dark))]" />
              <span className="text-[hsl(var(--navy))] font-semibold">Patient Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--navy))] mb-6">
              Your Dental Health Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice, tips, and insights to help you maintain a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sticky top-20 bg-background/95 backdrop-blur-sm z-40 shadow-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer whitespace-nowrap transition-smooth hover:scale-105 ${
                  index === 0 
                    ? "bg-[hsl(var(--navy))] text-white" 
                    : "hover:bg-[hsl(var(--mint-light))] hover:border-[hsl(var(--mint))]"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card 
                key={article.id}
                className="group overflow-hidden border-2 hover:border-[hsl(var(--mint))] transition-smooth hover:shadow-mint animate-fade-in-up cursor-pointer"
                style={{ animationDelay: article.delay }}
              >
                <div className="relative overflow-hidden h-48 bg-gradient-mint">
                  <div className="absolute inset-0 bg-[hsl(var(--navy))]/20 group-hover:bg-[hsl(var(--navy))]/0 transition-smooth"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))]">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-[hsl(var(--mint-dark))] transition-smooth">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center gap-2 text-[hsl(var(--navy))] font-semibold group-hover:gap-4 transition-smooth"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[hsl(var(--mint))] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[hsl(var(--gold))] rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Stay Informed About Your Dental Health
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Subscribe to our newsletter for the latest tips, articles, and special offers.
          </p>
          <div className="flex gap-4 max-w-md mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
            />
            <button className="px-8 py-3 bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-light))] text-[hsl(var(--navy))] font-semibold rounded-full transition-bounce shadow-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
