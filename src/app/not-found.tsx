import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
      <p className="text-sm font-extrabold text-accent-gold tracking-widest uppercase">
        404 Error
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary dark:text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-base text-text-secondary max-w-md mx-auto leading-relaxed">
        Sorry, we couldn’t find the page you are looking for. It might have been moved or deleted.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-bold rounded-xl bg-primary text-white hover:bg-primary/95 transition-all shadow-sm"
        >
          <Home className="h-4 w-4" />
          Go Back Home
        </Link>
        <Link
          href="/news"
          className="flex items-center gap-2 w-full sm:w-auto px-5 py-3 text-sm font-bold rounded-xl border border-custom bg-surface text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all shadow-sm"
        >
          <Compass className="h-4 w-4 text-accent-gold" />
          Explore News Feed
        </Link>
      </div>
    </div>
  );
}
