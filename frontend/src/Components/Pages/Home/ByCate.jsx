import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import cat1 from "../../../assets/Image/cat-1.avif";
import cat2 from "../../../assets/Image/cat-2.avif";
import cat3 from "../../../assets/Image/cat-3.avif";
import cat4 from "../../../assets/Image/cat-4.webp";
import cat5 from "../../../assets/Image/cat-5.avif";
import cat6 from "../../../assets/Image/cat-6.avif";
import cat7 from "../../../assets/Image/cat-7.avif";
import cat8 from "../../../assets/Image/cat-8.avif";
import cat9 from "../../../assets/Image/cat-9.avif";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
const ByCate = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const cate = [
    {
      id: 1,
      name: "Apple Ipad",
      image: cat1,
    },
    {
      id: 2,
      name: "Apple Ipad",
      image: cat2,
    },
    {
      id: 3,
      name: "Apple Ipad",
      image: cat3,
    },
    {
      id: 4,
      name: "Apple Ipad",
      image: cat4,
    },
    {
      id: 5,
      name: "Apple Ipad",
      image: cat5,
    },
    {
      id: 6,
      name: "Apple Ipad",
      image: cat6,
    },
    {
      id: 7,
      name: "Apple Ipad",
      image: cat7,
    },
    {
      id: 8,
      name: "Apple Ipad",
      image: cat8,
    },
    {
      id: 9,
      name: "Apple Ipad",
      image: cat9,
    },
  ];
  return (
    <section className="w-full mx-auto bg-[#D9E5E7] mt-4">
      <div className="max-w-[1690px] lg:-8 p-3 mx-auto">
        <div className="flex items-center justify-between border-b border-gray-300">
          <h2 className="text-2xl font-semibold lg:py-5 py-2 border-b border-cyan-500">
            Shop By Category
          </h2>
          <Link className="underline uppercase text-sm ">
            View all products
          </Link>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper w-full mt-4"
        >
          {cate.map((cate) => (
            <SwiperSlide key={cate.id}>
              <Link>
                <div className="w-full group text-center">
                  <img className="w-full rounded-md" src={cate.image} alt="" />
                  <p className="text-lg mt-1 font-semibold">{cate.name}</p>
                  <span className="underline inline-block text-cyan-500 group-hover:opacity-100 opacity-0 uppercase font-semibold text-sm">
                    Shop Now
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div
            ref={prevButtonRef}
            className="custom-button left-0 prev-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormPreviousLink />
          </div>
          <div
            ref={nextButtonRef}
            className="custom-button right-0 next-button bg-cyan-500 z-50 w-6 md:h-8 h-6 md:w-8 rounded-full flex items-center justify-center text-white absolute top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormNextLink />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ByCate;
