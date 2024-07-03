import React from "react";
import IconButton from "@/ui/block/button/IconButton";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { supabase } from "@/lib/supabase"; // Supabase bağlantısını ekleyin

export default function ProjectCard({ project }) {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col gap-16 rounded-main w-full">
      <div className="w-full h-fit rounded-main">
        <Image
          src={project.Img}
          alt={project.Img}
          width={600}
          height={400}
          className="w-full h-full rounded-main"
          draggable={false}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0 items-start justify-start">
          <h1 className="text-xl text-primary dark:text-input-bg">
            {project.Title}
          </h1>
          <h1 className="text-xl text-light">{project.Desc}</h1>
        </div>
        <IconButton
          link={project.Links}
          icon={
            <ArrowRightCircleIcon className="h-24 w-24 text-primary dark:text-input-bg" />
          }
        />
      </div>
    </div>
  );
}
