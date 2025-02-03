import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="dark:bg-primary bg-white w-full pt-64 pb-32 border-t border-input-border dark:border-dark-input-border">
      <div className="container w-full flex flex-col gap-64 items-start">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl sm:text-4xl md:text-[48px] lg:text-[64px] xl:text-[100px] w-full">
            Let&apos;s
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-[48px] lg:text-[64px] xl:text-[100px] w-full">
            Collaborate
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-32">
          <Link href="https://dribbble.com/ElcanEyvazli">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer font-light text-light">
              Dribbble
            </h1>
          </Link>
          <Link href="https://www.behance.net/elcaneyvazli">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer font-light text-light">
              Behance
            </h1>
          </Link>
          <Link href="https://www.linkedin.com/in/elcaneyvazli/">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer font-light text-light">
              Linkedin
            </h1>
          </Link>
          <Link href="mailto:elcaneyvazli77@gmail.com">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer font-light text-light">
              Email
            </h1>
          </Link>
        </div>
        <h1>© Elcan Eyvazlı {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
}
