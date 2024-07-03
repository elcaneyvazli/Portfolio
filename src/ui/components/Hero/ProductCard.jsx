// ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-[600px] w-[600px] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail.src}
        height={product.thumbnail.height}
        width={product.thumbnail.width}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt="Product Thumbnail"
        placeholder="blur"
        blurDataURL={product.thumbnail.blurDataURL}
      />
    </motion.div>
  );
};

export default ProductCard;
