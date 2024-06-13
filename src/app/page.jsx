"use client";
import { useDispatch } from "react-redux";
import { setDarkMode } from "@/redux/features/DarkModeSlice/DarkModeSlice";
import { useEffect } from "react";
import Hero from "@/ui/components/Hero/Hero";
import Project from "@/ui/components/Project/Project";
import Experience from "@/ui/components/Experience/Experience";

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
    <div className="container">
      <Hero />
      <Project />
      <Experience />
    </div>
  );
}
