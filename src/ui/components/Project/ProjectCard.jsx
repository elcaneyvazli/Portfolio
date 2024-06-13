import IconButton from "@/ui/block/button/IconButton";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import photo from "@/ui/assert/1.png";

export default function ProjectCard() {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col gap-16 rounded-main w-full">
      <div className="w-full h-fit rounded-main">
        <Image
          src={photo}
          alt="Project 1"
          width={0}
          height={0}
          className="w-full h-full rounded-main"
          draggable={false}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0 items-start justify-start">
          <h1 className="text-xl text-primary dark:text-input-bg">AlfinX</h1>
          <h1 className="text-xl text-light">Web Design</h1>
        </div>
        <IconButton
          icon={
            <ArrowRightCircleIcon className="h-24 w-24 text-primary dark:text-input-bg" />
          }
        />
      </div>
    </div>
  );
}
