import React from "react";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No stories found",
  description = "Check back later, or adjust your selected filters.",
  actionLabel,
  onAction
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-custom bg-surface/50 max-w-md mx-auto my-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-text-secondary mb-4">
        <FolderOpen className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-primary tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-5 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/95 transition-colors shadow-sm"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
