import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import slide1 from "../../../assets/Image/slide-1.jfif";
import slide2 from "../../../assets/Image/slide-2.jfif";
import slide3 from "../../../assets/Image/slide-3.jfif";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import CardLink from "../../Card/CardLink";
import imageUrl from "../../../assets/Data/url";

const Slide = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <>
      {/* Slider */}
      <div className="w-full font-semibold">
        <Swiper
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.params.navigation.prevEl = prevButtonRef.current;
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="lg:space-y-8 space-y-4 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 30% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Oculus Rift With</h2>
                    <h2>Touch Virtual Reality</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$149.99</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="space-y-6 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 40% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Boat Rockerz 510</h2>
                    <h2>Wireless Headphones</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$120.36</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="lg:h-[650px] h-[450px] flex items-center"
              style={{
                backgroundImage: `url(${slide3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full px-4">
                <div className="lg:space-y-8 space-y-4 max-w-[1690px] mx-auto">
                  <div>
                    <p className="text-4xl">Flat 30% Discount</p>
                  </div>
                  <div className="text-5xl">
                    <h2>Google Unveils</h2>
                    <h2>Home Mini & Speaker</h2>
                  </div>
                  <div className="text-4xl">
                    <h3>
                      From{" "}
                      <span className="text-cyan-500 text-5xl">$99.89</span>
                    </h3>
                  </div>
                  <div>
                    <button className="w-44 py-3 bg-cyan-500 text-white rounded-xl items-center justify-center">
                      shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            ref={prevButtonRef}
            className="custom-button prev-button bg-cyan-500 z-50 w-7 md:h-8 h-7 md:w-8 rounded-full flex items-center justify-center text-white absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormPreviousLink />
          </div>
          <div
            ref={nextButtonRef}
            className="custom-button next-button bg-cyan-500 z-50 w-7 md:h-8 h-7 md:w-8 rounded-full flex items-center justify-center text-white absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <GrFormNextLink />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Slide;

export const ProductSlide = ({ product }) => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  function newPrice(price, discount) {
    let newPrice = price - (price * discount) / 100;
    return newPrice;
  }

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
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
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }}
      modules={[Navigation]}
      className="mySwiper w-full"
    >
      {product.map((pro) => (
        <SwiperSlide key={pro.id} className="space-y-3 group">
          <CardLink name={pro.name}>
            <div className="lg:space-y-3 space-y-2 relative">
              <div className="w-full md:h-[200px] h-[150px] overflow-hidden relative">
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
              <span className="text-gray-500 text-sm font-semibold inline-block">
                {pro.brand}
              </span>
              <div className="lg:space-y-2 space-y-1">
                <h2 className="text-lg font-semibold group-hover:text-cyan-500 min-h-16">
                  {pro.name}
                </h2>
                <p>
                  <span
                    className={` font-bold text-xl pr-4 ${
                      pro.discount > 0
                        ? "line-through text-gray-500"
                        : "text-cyan-500"
                    }`}
                  >
                    ${pro.price}
                  </span>
                  <span
                    className={`text-cyan-500 font-bold text-xl pr-4 ${
                      pro.discount <= 0 ? "hidden" : ""
                    }`}
                  >
                    ${newPrice(pro.price, pro.discount)}
                  </span>
                </p>
              </div>
              <div className="absolute top-0 left-0">
                <span
                  className={`py-1 px-3 bg-red-500 text-sm text-white rounded-2xl ${
                    pro.discount < 1 ? "hidden" : ""
                  }`}
                >
                  {pro.discount}%
                </span>
              </div>
              <button className="w-full h-10 flex items-center justify-center rounded-lg bg-cyan-500 text-white">
                Shop now
              </button>
            </div>
          </CardLink>
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
  );
};
