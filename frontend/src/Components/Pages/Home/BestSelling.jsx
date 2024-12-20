import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import best_laptop from "../../../assets/Image/best-sell-laptop.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useProductStore } from "../../../assets/Data/product.js";
import imageUrl from "../../../assets/Data/url.js";
import { ProductSlide } from "./Slide.jsx";

const BestSelling = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    (async () => {
      const result = await fetchProducts();
      if (!result.success) {
        console.error(result.message);
      }
    })();
  }, []);

  function newPrice(price, discount) {
    let newPrice = price - (price * discount) / 100;
    return newPrice;
  }

  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3 relative z-0">
      <div className="flex items-center justify-between border-b">
        <h2 className="text-3xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
          Best Selling
        </h2>
        <Link className="underline uppercase text-sm ">View all products</Link>
      </div>
      <div className="flex flex-col lg:grid grid-cols-12 lg:gap-8 gap-4 mt-4">
        <div
          className="col-span-4 flex justify-end lg:p-8 p-3 bg-cover lg:h-auto h-[250px]"
          style={{
            backgroundImage: `url(${best_laptop})`,
          }}
        >
          <div className="w-[43%] flex flex-col justify-center h-full lg:gap-3 gap-1">
            <h2 className="text-2xl font-semibold">Galaxy Book3 Laptop</h2>
            <p className="text-lg font-semibold">
              from <span className="text-3xl text-cyan-500">$199.00</span>
            </p>
            <button className="bg-cyan-500 lg:w-32 text-white px-3 lg:px-5 py-2 rounded mt-5">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-8">
          <ProductSlide product={products} />
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
