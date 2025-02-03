import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { supabase } from "@/lib/supabase"; // Supabase bağlantısını ekleyin

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from("Portfolio").select("*");

        if (error) {
          throw new Error(error.message);
        }

        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);

  return (
    <div className="flex flex-col items-start gap-16 min-w-[100%] container">
      <h1 className="text-2xl md:text-4xl text-primary dark:text-input-bg">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-x-64 gap-y-64 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
