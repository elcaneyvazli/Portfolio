"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "@/redux/features/DarkModeSlice/DarkModeSlice";
import Hero from "@/ui/components/Hero/Hero";
import dynamic from "next/dynamic";
import ExperienceSkeleton from "@/ui/components/Experience/ExperienceSkeleton";
import ProjectSkeleton from "@/ui/components/Project/ProjectSkeleton";

const Experience = dynamic(
  () => import("@/ui/components/Experience/Experience"),
  {
    loading: () => <ExperienceSkeleton />,
    ssr: false,
  }
);
const Project = dynamic(() => import("@/ui/components/Project/Project"), {
  loading: () => <ProjectSkeleton />,
  ssr: false,
});

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStorageChange = () => {
      const darkValue = localStorage.getItem("theme");
      dispatch(setDarkMode(darkValue === "dark"));
    };

    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-64 w-full">
      <Hero />
      <Project />
      <Experience />
    </div>
  );
}
