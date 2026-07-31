import React from "react";

type StatusType = 
  | "draft" 
  | "awaiting_review" 
  | "changes_requested" 
  | "approved" 
  | "published"
  | "high" 
  | "medium" 
  | "low"
  | "rss" 
  | "manual"
  | "licensed"
  | "primary"
  | "established"
  | "specialist"
  | "official";

interface StatusBadgeProps {
  status: StatusType;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStyles = () => {
    switch (status) {
      // Editorial Status
      case "draft":
        return "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
      case "awaiting_review":
        return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800/50";
      case "changes_requested":
        return "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800/50";
      case "approved":
        return "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50";
      case "published":
        return "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50";
      
      // Confidence & Risk Levels
      case "high":
        return "bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300 border-green-200 dark:border-green-900/50";
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-900/50";
      case "low":
        return "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-900/50";

      // Credibility Tiers
      case "primary":
      case "official":
        return "bg-purple-100 text-purple-800 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-900/50";
      case "established":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-900/50";
      case "specialist":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900/50";

      // Source Ingest Type
      case "rss":
        return "bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-300 border-orange-200 dark:border-orange-900/50";
      case "licensed":
        return "bg-teal-100 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200 dark:border-teal-900/50";
      case "manual":
        return "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300 border-slate-200 dark:border-slate-800";
      
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-custom";
    }
  };

  const label = status.replace("_", " ").toUpperCase();

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border tracking-wider transition-colors ${getStyles()}`}>
      {label}
    </span>
  );
}
