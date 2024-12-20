import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useProductStore } from "../../../assets/Data/product.js";
import { ProductSlide } from "./Slide.jsx";

const LastProduct = () => {
  const { products, setProducts, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className="relative z-0">
      <div className="max-w-[1690px] mx-auto lg:space-y-6 space-y-3 lg:p-8 p-3">
        <div className="flex items-center justify-between border-b">
          <h2 className="text-xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
            Last Product
          </h2>
          <Link className="underline uppercase text-sm ">
            View all products
          </Link>
        </div>
        <ProductSlide product={products} />
      </div>
    </section>
  );
};

export default LastProduct;
