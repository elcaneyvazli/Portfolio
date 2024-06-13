import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="flex flex-col items-start gap-16 pb-64 w-full">
      <h1 className="text-5xl text-primary dark:text-input-bg">Projects</h1>
      <div className="grid grid-cols-2 gap-x-64 gap-y-64 w-full">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
