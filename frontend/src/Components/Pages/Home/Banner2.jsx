import React from "react";
import banner2_watch from "../../../assets/Image/banner2-watch.webp";
import banner2_phone from "../../../assets/Image/banner2-phone.webp";
import banner2_headphone from "../../../assets/Image/banner2-headphone.webp";

const Banner2 = () => {
  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3 text-white">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="lg:h-[230px] h-[170px] overflow-hidden">
          <div
            className="hover:scale-105 transition-all duration-700 rounded-2xl w-full h-full lg:bg-right bg-center"
            style={{
              backgroundImage: `url(${banner2_phone})`,
              backgroundSize: "cover",
            }}
          >
            <div className="space-y-4 flex flex-col justify-center h-full lg:p-10 p-5">
              <h2 className="text-3xl font-semibold">
                <p>Smiley Man With</p>
                <p>Shot Virtual Glasses</p>
              </h2>
              <h2 className="text-2xl">
                From <span className="text-3xl">$99.00</span>
              </h2>
              <button className="underline uppercase text-sm block font-bold text-start">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="lg:h-[230px] h-[170px] overflow-hidden">
          <div
            className="hover:scale-105 transition-all duration-700 rounded-2xl w-full text-gray-700 font-semibold lg:bg-right bg-center bg-cover"
            style={{
              backgroundImage: `url(${banner2_watch})`,
            }}
          >
            <div className="space-y-4 flex flex-col justify-center h-full lg:p-10 p-5">
              <h2 className="text-3xl font-semibold">
                <p>MacBook Pro</p>
                <p>With Smart Phone</p>
              </h2>
              <h2 className="text-2xl">
                From <span className="text-3xl">$129.00</span>
              </h2>
              <button className="underline uppercase text-sm block font-bold text-start">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="lg:h-[230px] h-[170px] overflow-hidden">
          <div
            className="hover:scale-105 transition-all duration-700 rounded-2xl w-full text-gray-700 font-semibold lg:bg-right bg-center bg-cover"
            style={{
              backgroundImage: `url(${banner2_headphone})`,
            }}
          >
            <div className="space-y-4 flex flex-col justify-center h-full lg:p-10 p-5">
              <h2 className="text-3xl font-semibold">
                <p>MacBook Pro</p>
                <p>With Smart Phone</p>
              </h2>
              <h2 className="text-2xl">
                From <span className="text-3xl">$129.00</span>
              </h2>
              <button className="underline uppercase text-sm block font-bold text-start">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
