import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import partner1 from "../../../assets/Image/partner-1.png";
import partner2 from "../../../assets/Image/partner-2.png";
import partner3 from "../../../assets/Image/partner-3.png";
import partner4 from "../../../assets/Image/partner-4.png";
import partner5 from "../../../assets/Image/partner-5.png";
import partner6 from "../../../assets/Image/partner-6.png";
import partner7 from "../../../assets/Image/partner-7.png";
import { Autoplay } from "swiper/modules";

const Partner = () => {
  const partner = [
    { id: 1, image: partner1 },
    { id: 2, image: partner2 },
    { id: 3, image: partner3 },
    { id: 4, image: partner4 },
    { id: 5, image: partner5 },
    { id: 6, image: partner6 },
    { id: 7, image: partner7 },
  ];
  return (
    <section className="md:p-8 md:px-20 px-3 p-3">
      <div className="max-w-[1690px] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          autoplay={{ delay: 3000 }}
          // centeredSlides={true}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {partner.map((p) => (
            <SwiperSlide key={p.id} className="flex justify-center">
              <img className="w-full" src={p.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;
