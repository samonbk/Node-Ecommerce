import React from "react";
import smile_man from "../../../assets/Image/smile-man.webp";
import apple_product from "../../../assets/Image/apple-product.webp";

const Banner = () => {
  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3 text-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="lg:h-[230px] h-[170px] overflow-hidden">
          <div
            className="hover:scale-105 transition-all duration-700 rounded-2xl w-full h-full lg:bg-right bg-center"
            style={{
              backgroundImage: `url(${smile_man})`,
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
              backgroundImage: `url(${apple_product})`,
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

export default Banner;
