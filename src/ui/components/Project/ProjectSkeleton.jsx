import React from "react";

export default function ProjectSkeleton() {
  return (
    <div className="flex flex-col items-start gap-16 min-w-[100%] container animate-pulse">
      <h1 className="text-2xl md:text-4xl text-primary dark:text-input-bg">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-x-64 gap-y-64 w-full">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="col-span-2 md:col-span-1 flex flex-col gap-16 rounded-main w-full"
          >
            <div className="flex flex-col gap-16 min-w-full">
              <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px] bg-gray-300 dark:bg-gray-700 rounded-main w-full"></div>
              <div className="flex flex-row justify-between gap-16 items-center">
                <div className="flex flex-col gap-4 w-full">
                  <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-main w-full"></div>
                  <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-main w-full"></div>
                </div>
                <div className="h-32 w-32 bg-gray-300 dark:bg-gray-700 rounded-main"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
