
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronRight, Check, Shield, Search, Database, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/layouts/MainLayout";
import medicines from "@/data/medicines";
import MedicineCard from "@/components/MedicineCard";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const featuredMedicines = medicines.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 border-b border-border">
        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-md">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-sm">
                Medicine Quality Verification
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in">
                Verify medicine quality with confidence
              </h1>
              <p className="text-muted-foreground text-lg fade-in stagger-1">
                Check if a medicine is suitable for a specific disease, verify its authenticity, and ensure it's not expired.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 fade-in stagger-2">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to="/verify">
                    Verify Medicine
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link to="/medicines">Browse Medicines</Link>
                </Button>
              </div>
            </div>
            <div className="relative fade-in">
              <div className="relative backdrop-blur-sm bg-white/30 border border-white/30 rounded-2xl shadow-glass overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Medicine verification"
                  className="w-full h-full object-cover rounded-xl aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                
                {/* Floating stats */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                  <Badge className="bg-white/80 backdrop-blur-sm text-foreground border-white/30 shadow-sm px-3 py-1.5">
                    <Check className="h-3.5 w-3.5 mr-1 text-medicine-green" /> Verified Medicines
                  </Badge>
                  <Badge className="bg-white/80 backdrop-blur-sm text-foreground border-white/30 shadow-sm px-3 py-1.5">
                    <Shield className="h-3.5 w-3.5 mr-1 text-primary" /> Secure Platform
                  </Badge>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/3 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-medicine-blue/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform provides multiple ways to verify and check medicine quality and suitability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-primary" />,
                title: "Medicine Search",
                description: "Extensive database of medicines with detailed information about each product.",
                delay: "stagger-1"
              },
              {
                icon: <Activity className="h-8 w-8 text-medicine-green" />,
                title: "Disease Compatibility",
                description: "Check if a medicine is suitable for treating a specific disease or condition.",
                delay: "stagger-2"
              },
              {
                icon: <Database className="h-8 w-8 text-medicine-blue" />,
                title: "Quality Verification",
                description: "Verify medicine quality, check expiry dates, and ensure authenticity.",
                delay: "stagger-3"
              }
            ].map((feature, index) => (
              <Card key={index} className={`fade-in ${feature.delay} border-border/50`}>
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-accent mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Medicines */}
      <section className="py-16 md:py-24 bg-accent/30 border-y border-border">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div className="max-w-lg fade-in">
              <h2 className="text-3xl font-bold tracking-tight">Featured Medicines</h2>
              <p className="mt-3 text-muted-foreground">
                Browse our collection of verified medicines with detailed information
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full fade-in stagger-1">
              <Link to="/medicines">
                View All Medicines
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMedicines.map((medicine, index) => (
              <div key={medicine.id} className={`fade-in stagger-${index + 1}`}>
                <MedicineCard medicine={medicine} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-medicine-blue text-white p-8 md:p-12">
            <div className="max-w-2xl relative z-10 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to verify your medicines?</h2>
              <p className="text-white/90 text-lg mb-8">
                Our platform helps you ensure that you're using safe and appropriate medicines for your health needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/verify">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                  <Link to="/medicines">Browse Medicines</Link>
                </Button>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-32 -ml-32"></div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default Index;
