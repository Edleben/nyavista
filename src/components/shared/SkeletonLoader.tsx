import React from "react";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 ${className}`}
      {...props}
    />
  );
}

export function StoryCardSkeleton() {
  return (
    <div className="p-6 rounded-2xl border border-custom bg-surface space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-7 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="pt-4 flex justify-between items-center">
        <Skeleton className="h-5 w-32" />
        <div className="flex gap-1">
          <Skeleton className="h-5 w-8 rounded-full" />
          <Skeleton className="h-5 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function StoryDetailSkeleton() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 py-8">
      <Skeleton className="h-5 w-32" />
      <Skeleton className="h-10 w-full" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
      </div>
      <hr className="border-custom" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
