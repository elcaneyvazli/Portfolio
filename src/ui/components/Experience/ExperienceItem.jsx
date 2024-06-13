import React from "react";

export default function ExperienceItem() {
  return (
    <div className="flex flex-col gap-0">
      <h1 className="text-md text-light">OCT, 2023 - CURRENT</h1>
      <h1 className="text-[48px] text-primary dark:text-input-bg">
        UX/UI Designer Frontend Developer, Azerbaijan Technical University
      </h1>
      <div className="flex flex-col gap-4">
        <h1 className="text-md text-light">
          Developed frontend solutions to enhance user experience and
          accessibility.
        </h1>
        <h1 className="text-md text-light">
          Designed user interfaces for educational platforms and digital tools.
        </h1>
        <h1 className="text-md text-light">
          Conducted user research and usability testing to inform design
          decisions and iterate on prototypes.
        </h1>
      </div>
    </div>
  );
}
