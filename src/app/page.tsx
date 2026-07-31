import React from "react";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { ArrowRight, Compass, PlaySquare, ShieldCheck, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-white/10 dark:text-white border border-custom">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
              African-Born News Intelligence Platform
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-primary dark:text-white leading-tight">
              Understand the news in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-gold font-sans font-black">minutes</span>, not hours.
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {brandConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/news"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold rounded-xl bg-primary text-white hover:bg-primary/95 transition-all shadow-md hover:scale-[1.02] duration-200"
              >
                <Compass className="h-5 w-5" />
                Explore NyaVista
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="/videos"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold rounded-xl border border-custom bg-surface text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all shadow-sm hover:scale-[1.02] duration-200"
              >
                <PlaySquare className="h-5 w-5 text-accent-gold" />
                Watch an Explainer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles/Features Section */}
      <section className="py-16 border-t border-custom bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              Our Core Platform Pillars
            </h2>
            <p className="mt-3 text-text-secondary">
              Combining ethical journalism principles with robust AI architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-custom bg-surface space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-accent-violet">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">Editorial Rigor</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Source transparency first. Clear separations between confirmed facts, analysis, opinions, and uncertainties.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-custom bg-surface space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-brand-success">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">Multi-Source Synthesis</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                No single-source rewrites. Our AI ingests reporting across multiple verified networks and details framing differences.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-custom bg-surface space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-accent-gold">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">Premium Localization</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Designed to cover Togo, West Africa, and global affairs comprehensively. Providing French and English route architectures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
