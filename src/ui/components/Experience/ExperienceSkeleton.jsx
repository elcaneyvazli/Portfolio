import React from "react";

export default function ExperienceSkeleton() {
  return (
    <div className="flex flex-col gap-32 container min-w-full pb-64 animate-pulse">
      <h1 className="text-2xl md:text-4xl text-primary dark:text-input-bg">
        Work Experience
      </h1>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col gap-0 min-w-full">
          <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="flex flex-col gap-4">
            <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
