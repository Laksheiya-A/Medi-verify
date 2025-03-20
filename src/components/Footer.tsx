
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/50 border-t border-border mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">About MediVerify</h3>
            <p className="text-sm text-muted-foreground">
              We provide a secure platform for verifying medicine quality and checking medicine
              compatibility with different diseases.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { title: "Home", path: "/" },
                { title: "Medicines", path: "/medicines" },
                { title: "Verify Medicine", path: "/verify" },
                { title: "Contact Us", path: "/contact" },
                { title: "Admin Login", path: "/login" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Resources</h3>
            <ul className="space-y-2">
              {[
                { title: "Health Articles", path: "/articles" },
                { title: "FAQ", path: "/faq" },
                { title: "Privacy Policy", path: "/privacy" },
                { title: "Terms of Service", path: "/terms" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  123 Health Street, Medical District, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <a
                  href="mailto:info@mediverify.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@mediverify.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-sm text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} MediVerify. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
