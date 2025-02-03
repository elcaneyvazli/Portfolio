import Image from "next/image";
import React from "react";
import logo from "@/ui/assert/logodark.svg";
import DarkModeButton from "@/ui/block/button/DarkModeButton/DarkModeButton";

export default function Navbar() {
  return (
    <div className="flex fixed top-0 min-w-full container flex-row justify-between items-center py-16 bg-white dark:bg-primary z-30">
      <div className="flex flex-row gap-8 items-center z-20">
        <div className="w-24 h-[1px] bg-primary dark:bg-input-bg z-20"></div>
        <div className="h-48 w-48 z-20">
          <Image src={logo} alt="logo" width={96} height={96} />
        </div>
      </div>
      <div className="flex flex-row gap-32 items-center z-20">
        <DarkModeButton />
      </div>
    </div>
  );
}
