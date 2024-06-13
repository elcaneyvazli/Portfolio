"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { setDarkMode } from "@/redux/features/DarkModeSlice/DarkModeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function DarkModeButton() {
  const dispatch = useDispatch();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeRedux = useSelector((state) => state.darkModeReducer.darkMode);

  useEffect(() => {
    setIsDarkMode(darkModeRedux);
  }, [darkModeRedux]);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    dispatch(setDarkMode(newTheme === "dark"));
    setIsDarkMode(newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 bg-input-bg border dark:border-dark-input-border dark:bg-dark-input-bg border-input-border rounded-main h-40"
    >
      {isDarkMode ? (
        <MoonIcon className="h-24 w-24 text-primary dark:text-input-bg" />
      ) : (
        <SunIcon className="h-24 w-24 text-primary dark:text-input-bg" />
      )}
    </motion.button>
  );
}
