"use client";

import React, { useState } from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { Send, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerLinks = {
    product: [
      { href: "/news", label: "News Intelligence" },
      { href: "/videos", label: "Video Explainers" },
      { href: "/audio", label: "Audio Briefings" },
      { href: "/pricing", label: "Premium Plans" },
    ],
    editorial: [
      { href: "/editorial-standards", label: "Editorial Standards" },
      { href: "/source-methodology", label: "Source Methodology" },
      { href: "/ai-disclosure", label: "AI Disclosure" },
      { href: "/corrections-policy", label: "Corrections Policy" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/features", label: "Product Features" },
      { href: "/newsletter", label: "Daily Newsletter" },
      { href: "/contact", label: "Get in Touch" },
    ],
    legal: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/copyright", label: "Copyright & DMCA" },
    ]
  };

  return (
    <footer className="border-t border-custom bg-surface transition-colors duration-300">
      {/* Top Newsletter CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-b border-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold tracking-tight text-primary">
              Subscribe to the NyaVista Daily Briefing
            </h3>
            <p className="mt-2 text-sm text-text-secondary max-w-xl">
              Get the day&apos;s essential African and global intelligence summaries, source comparison reviews, and explainer highlights delivered directly to your inbox.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 text-brand-success rounded-lg text-sm font-semibold text-center border border-emerald-500/20">
                Welcome aboard! You are now subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-sm rounded-lg border border-custom bg-background text-foreground focus:outline-none focus:border-accent-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/95 transition-colors flex items-center gap-1.5"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Links Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Brand Info Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-sm">
                Nya
              </span>
              <span className="font-sans font-extrabold tracking-tight text-lg text-primary">
                {brandConfig.name}
              </span>
            </Link>
            <p className="text-sm text-text-secondary">
              {brandConfig.tagline}
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent-gold" />
                <span>{brandConfig.legal.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent-gold" />
                <span>{brandConfig.legal.address}</span>
              </div>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {footerLinks.product.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Trust</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {footerLinks.editorial.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {footerLinks.company.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {footerLinks.legal.map(link => (
                <li key={link.href}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="border-t border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-secondary">
            © {brandConfig.legal.copyrightYear} {brandConfig.legal.businessName}. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href={`https://twitter.com/${brandConfig.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors" aria-label="Twitter">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href={`https://linkedin.com/company/${brandConfig.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`https://facebook.com/${brandConfig.socials.facebook}`} target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href={`https://instagram.com/${brandConfig.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
