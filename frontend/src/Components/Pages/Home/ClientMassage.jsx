import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import client1 from "../../../assets/Image/client-1.webp";
import client2 from "../../../assets/Image/client-2.webp";
import client3 from "../../../assets/Image/client-3.webp";
import client4 from "../../../assets/Image/client-4.webp";

const ClientMassage = () => {
  const clinet = [
    {
      id: 1,
      name: "Stefanie Rashford",
      image: client1,
      pos: "Founder",
      comment: "exerlent diliver service",
      message:
        "Generation many variations of passages of even blievable loremIpsum is simply dummy text of the printing and typesetting industry lorem Ipsum available but the have alteration in some form.",
    },
    {
      id: 2,
      name: "Selena Gomez",
      image: client2,
      pos: "Founder",
      comment: "exerlent diliver service",
      message:
        "Generation many variations of passages of even blievable loremIpsum is simply dummy text of the printing and typesetting industry lorem Ipsum available but the have alteration in some form.",
    },
    {
      id: 3,
      name: "Justin Bieber",
      image: client3,
      pos: "Founder",
      comment: "exerlent diliver service",
      message:
        "Generation many variations of passages of even blievable loremIpsum is simply dummy text of the printing and typesetting industry lorem Ipsum available but the have alteration in some form.",
    },
    {
      id: 4,
      name: "Black Pink",
      image: client4,
      pos: "Founder",
      comment: "exerlent diliver service",
      message:
        "Generation many variations of passages of even blievable loremIpsum is simply dummy text of the printing and typesetting industry lorem Ipsum available but the have alteration in some form.",
    },
  ];

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  return (
    <>
      <section className="md:p-8 p-3">
        <div className="max-w-[1690px]">
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
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
            {clinet.map((c) => (
              <SwiperSlide
                key={c.id}
                className="border border-gray-500 rounded-2xl md:p-6 p-4 bg-white space-y-3"
              >
                <h3 className="text-black font-semibold">“{c.comment}”</h3>
                <p className="text-sm">{c.message}</p>
                <div className="flex gap-2">
                  <div className="flex overflow-hidden w-14 h-14 justify-center items-center rounded-full">
                    <img src={c.image} alt="" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 text-sm font-semibold">
                      {c.name}
                    </h3>
                    <span className="text-sm">{c.pos}</span>
                  </div>
                </div>
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
    </>
  );
};

export default ClientMassage;
