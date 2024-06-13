import React from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="flex flex-col gap-32 pb-64">
      <h1 className="text-5xl text-primary dark:text-input-bg">
        Work Experience
      </h1>
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </div>
  );
}
