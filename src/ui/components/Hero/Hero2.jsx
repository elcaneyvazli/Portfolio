"use client";
import React from "react";
import Bg from "./bg";

export default function Hero() {
  return (
    <div className="h-screen w-full relative z-20">
      <div className="flex flex-col gap-0 items-start justify-center pt-[100px] container z-20">
        <h2 className="text-lg sm:text-2xl text-primary dark:text-input-bg z-20">
          Hello! I&apos;m Elcan.
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-[48px] lg:text-[64px] xl:text-[100px] w-ful text-primary dark:text-input-bg z-20">
          Your UX/UI Design Partner. Let&apos;s elevate your digital product.
        </h1>
      </div>
    </div>
  );
}
