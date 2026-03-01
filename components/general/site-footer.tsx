import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Residential Cleaning", href: "/services#residential" },
    { label: "Commercial Cleaning", href: "/services#commercial" },
    { label: "Post Construction", href: "/services#post-construction" },
    { label: "Moving In/Out", href: "/services#moving" },
    { label: "Event Cleaning", href: "/services#events" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Service", href: "/booking" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">Cleaning Co.</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Professional cleaning services in Nairobi. Residential, commercial, post-construction, event, and moving cleaning solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-background/80">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                +254-770-944-720
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                info@cloveroptions.co.ke
              </li>
              <li className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Cleaning Co. Limited. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Professional Cleaning Services in Nairobi
          </p>
        </div>
      </div>
    </footer>
  );
}
