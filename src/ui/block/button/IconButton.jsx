"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IconButton({ icon, link }) {
  return (
    <motion.button
      className="px-8 bg-input-bg border dark:border-dark-input-border dark:bg-dark-input-bg border-input-border rounded-main h-40"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
    >
      <a href={link} target="_blank">
        {icon}
      </a>
    </motion.button>
  );
}
