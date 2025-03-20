
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Medicines", path: "/medicines" },
    { name: "Verify", path: "/verify" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-subtle"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary font-display font-bold text-xl"
            >
              <span className="inline-block w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                M
              </span>
              <span>MediVerify</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full px-4">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button asChild size="sm">
              <Link to="/login">Admin Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <Container className="flex flex-col h-full">
            <nav className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = "auto";
                  }}
                  className={({ isActive }) =>
                    cn(
                      "text-lg font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search Medicines
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link to="/login">Admin Login</Link>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
