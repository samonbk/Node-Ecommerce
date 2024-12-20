import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useProductStore } from "../../../assets/Data/product";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import imageUrl from "../../../assets/Data/url";

const DealOfTheDay = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const { products, fetchProducts } = useProductStore();
  const [bestdeal, setBestdeal] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchProducts();
      if (!result.success) {
        console.error(result.message);
      }
      const deal = products.filter((d) => d.discount > 0);
      if (deal) {
        setBestdeal(deal);
      }
    })();
  }, []);

  function newPrice(price, discount) {
    let newPrice = price - (price * discount) / 100;
    return newPrice;
  }

  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3">
      <div className="flex items-center justify-between border-b">
        <h2 className="text-2xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
          Deal Of The Day
        </h2>
        <Link className="underline uppercase text-sm ">View all products</Link>
      </div>
      <div className="w-full mt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
          }}
          // loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          {bestdeal.map((pro) => (
            <SwiperSlide
              key={pro.id}
              className="space-y-3 group p-4 rounded-2xl border border-cyan-500"
            >
              <Link className="lg:space-y-3 space-y-2 relative grid grid-cols-2 gap-4">
                <div className="w-full h-full overflow-hidden relative">
                  <div className="flex items-center w-full h-full absolute top-0 left-0  group-hover:opacity-0 opacity-100 transition-all duration-500">
                    <img
                      className="w-full"
                      src={imageUrl + pro.image1}
                      alt={pro.name}
                    />
                  </div>
                  <div className="flex items-center w-full h-full absolute top-0 left-0  opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <img
                      className="w-full"
                      src={imageUrl + pro.image2}
                      alt={pro.name}
                    />
                  </div>
                </div>
                <div className="flex justify-cente flex-col gap-3 h-full">
                  <span className="text-gray-500 text-sm font-semibold inline-block">
                    {pro.brand}
                  </span>
                  <div className="lg:space-y-2 space-y-1">
                    <h2 className="text-lg font-semibold group-hover:text-cyan-500">
                      {pro.name}
                    </h2>
                    <p>
                      <span className="text-gray-500 font-bold text-xl line-through pr-4">
                        ${pro.price}
                      </span>
                      <span className="text-cyan-500 font-bold text-xl pr-4">
                        ${newPrice(pro.price, pro.discount)}
                      </span>
                    </p>
                  </div>
                  <button className="w-full h-10 flex items-center justify-center rounded-lg bg-cyan-500 text-white">
                    Shop now
                  </button>
                </div>
                <div className="absolute -top-3 -left-2">
                  <span
                    className={`py-1 px-3 bg-red-500 text-sm text-white rounded-2xl ${
                      pro.discount < 1 ? "hidden" : ""
                    }`}
                  >
                    {pro.discount}%
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div
            ref={prevButtonRef}
            className="custom-button prev-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormPreviousLink />
          </div>
          <div
            ref={nextButtonRef}
            className="custom-button next-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormNextLink />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default DealOfTheDay;
