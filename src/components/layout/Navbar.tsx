"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/providers/ThemeProvider";
import { brandConfig } from "@/config/brand";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Globe, 
  Compass, 
  PlaySquare, 
  Volume2, 
  Search, 
  User, 
  Layers
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/news", label: "News Feed", icon: Compass },
    { href: "/videos", label: "Explainers", icon: PlaySquare },
    { href: "/audio", label: "Briefings", icon: Volume2 },
    { href: "/topics", label: "Topics", icon: Layers },
    { href: "/pricing", label: "Premium", icon: Globe },
  ];

  const marketingLinks = [
    { href: "/about", label: "About" },
    { href: "/editorial-standards", label: "Standards" },
  ];

  const isActive = (path: string) => {
    if (path === "/news") {
      return pathname.startsWith("/news") || pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-custom bg-surface/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg shadow-md transition-transform group-hover:scale-105 duration-200">
                Nya
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold tracking-tight text-xl text-primary flex items-center gap-1">
                  {brandConfig.name}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                </span>
                <span className="text-[10px] text-text-secondary tracking-widest uppercase font-semibold">
                  News Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                        : "text-text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right Side Elements */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search link */}
            <Link 
              href="/search" 
              className="p-2 text-text-secondary hover:text-primary rounded-lg transition-colors"
              title="Search stories"
            >
              <Search className="h-5 w-5" />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Language indicator / selector preview */}
            <div className="flex items-center gap-1.5 text-xs text-text-secondary border-l border-custom pl-4 py-1">
              <span className="font-semibold text-primary">EN</span>
              <span className="opacity-40">|</span>
              <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
            </div>

            {/* User action */}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-primary text-primary hover:bg-primary hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white/10 transition-all duration-200"
            >
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-custom bg-surface px-4 py-4 space-y-3 transition-all duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                    active
                      ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-custom pt-3 space-y-1">
            {marketingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-custom pt-4 flex flex-col gap-2">
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-foreground"
            >
              <Search className="h-4.5 w-4.5" />
              Search NyaVista
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold rounded-lg bg-primary text-white dark:bg-white dark:text-primary"
            >
              <User className="h-4.5 w-4.5" />
              Sign In / Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
