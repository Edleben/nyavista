import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "An error occurred while loading this section. Please try again.",
  retryLabel = "Try Again",
  onRetry
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/10 max-w-md mx-auto my-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 dark:bg-rose-950/30 text-brand-danger mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-brand-danger tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-danger text-white hover:bg-brand-danger/90 transition-colors shadow-sm"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
