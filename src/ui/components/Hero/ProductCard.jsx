// ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-[300px] w-[300px] md:w-[400px] md:h-[400px] xl:h-[500px] xl:w-[500px] 2xl:w-[600px] 2xl:h-[600px] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail.src}
        height={product.thumbnail.height}
        width={product.thumbnail.width}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt="Product Thumbnail"
        placeholder="blur"
        blurDataURL={product.thumbnail.blurDataURL}
        draggable="false"
      />
    </motion.div>
  );
};

export default ProductCard;
