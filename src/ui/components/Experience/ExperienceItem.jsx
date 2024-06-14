import React from "react";

export default function ExperienceItem({ item }) {
  return (
    <div className="flex flex-col gap-0 min-w-full">
      <h1 className="text-md text-light">{item.Date}</h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-primary dark:text-input-bg w-full">
        {item.TItle}
      </h1>
      <div className="flex flex-col gap-4">
        <h1 className="text-md text-light">{item.Des1}</h1>
        <h1 className="text-md text-light">{item.Des2}</h1>
        <h1 className="text-md text-light">{item.Des3}</h1>
      </div>
    </div>
  );
}
