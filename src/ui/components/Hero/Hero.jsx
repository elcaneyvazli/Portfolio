import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ProductCard from "./ProductCard";
import img1 from "@/ui/assert/1.png";
import img2 from "@/ui/assert/2.png";
import img3 from "@/ui/assert/3.png";
import img4 from "@/ui/assert/4.png";
import img5 from "@/ui/assert/5.png";
import img6 from "@/ui/assert/6.jpg";
import img7 from "@/ui/assert/7.jpg";
import img8 from "@/ui/assert/8.jpg";

export default function Hero() {
  const products = [
    {
      thumbnail: img6,
    },
    {
      thumbnail: img5,
    },
    {
      thumbnail: img3,
    },
    {
      thumbnail: img3,
    },
    {
      thumbnail: img4,
    },
    {
      thumbnail: img1,
    },
    {
      thumbnail: img2,
    },
    {
      thumbnail: img8,
    },
    {
      thumbnail: img7,
    },
    {
      thumbnail: img6,
    },
    {
      thumbnail: img5,
    },
    {
      thumbnail: img1,
    },
    {
      thumbnail: img2,
    },
    {
      thumbnail: img6,
    },
    {
      thumbnail: img5,
    },
  ];

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 200, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-800, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] xl:h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] dark:bg-primary"
    >
      <div className="flex flex-col gap-0 items-start justify-center pt-[80px] container relative">
        <h2 className="text-4xl xl:text-2xl text-primary dark:text-input-bg">
          Hello! I&apos;m Elcan.
        </h2>
        <h1 className="text-[48px] sm:text-[56px] md:text-[48px] lg:text-[64px] xl:text-[100px] w-full text-primary dark:text-input-bg">
          Your UX/UI Design Partner. Let&apos;s elevate your digital product.
        </h1>
      </div>
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="flex flex-col gap-0 items-start justify-center container relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
