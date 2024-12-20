import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { ImLoop2 } from "react-icons/im";
import { IoWalletSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { RiCustomerServiceLine } from "react-icons/ri";

const Service = () => {
  return (
    <section className="max-w-[1690px] mx-auto lg:p-8 p-3">
      <div className="w-full rounded-2xl border-cyan-500 border flex flex-wrap justify-center">
        <Link className="lg:min-w-[15%] lg:max-w-[20%] min-w-[45%] flex lg:flex-row flex-col items-center button-wrapper p-4">
          <button className="button-style">
            <div className="flex items-center justify-center">
              <span className="text-5xl">
                <LiaShippingFastSolid />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-5xl text-cyan-500">
                <LiaShippingFastSolid />
              </span>
            </div>
          </button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="lg:text-base text-sm">For all Orders Over $100</p>
          </div>
        </Link>
        <Link className="lg:min-w-[15%] lg:max-w-[20%] min-w-[45%] flex lg:flex-row flex-col items-center button-wrapper p-4">
          <button className="button-style">
            <div className="flex items-center justify-center">
              <span className="text-4xl">
                <ImLoop2 />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl text-cyan-500">
                <ImLoop2 />
              </span>
            </div>
          </button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">30 Days Returns</h3>
            <p className="lg:text-base text-sm">For an Exchange Product</p>
          </div>
        </Link>
        <Link className="lg:min-w-[15%] lg:max-w-[20%] min-w-[45%] flex lg:flex-row flex-col items-center button-wrapper p-4">
          <button className="button-style">
            <div className="flex items-center justify-center">
              <span className="text-4xl">
                <IoWalletSharp />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl text-cyan-500">
                <IoWalletSharp />
              </span>
            </div>
          </button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Secured Payment</h3>
            <p className="lg:text-base text-sm">Payment Cards Accepted</p>
          </div>
        </Link>
        <Link className="lg:min-w-[15%] lg:max-w-[20%] min-w-[45%] flex lg:flex-row flex-col items-center button-wrapper p-4">
          <button className="button-style">
            <div className="flex items-center justify-center">
              <span className="text-4xl">
                <FaGift />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl text-cyan-500">
                <FaGift />
              </span>
            </div>
          </button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Special Gifts</h3>
            <p className="lg:text-base text-sm">Contact us Anytime</p>
          </div>
        </Link>
        <Link className="lg:min-w-[15%] lg:max-w-[20%] min-w-[45%] flex lg:flex-row flex-col items-center button-wrapper p-4">
          <button className="button-style">
            <div className="flex items-center justify-center">
              <span className="text-4xl">
                <RiCustomerServiceLine />
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl text-cyan-500">
                <RiCustomerServiceLine />
              </span>
            </div>
          </button>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Support 24/7</h3>
            <p className="lg:text-base text-sm">Contact us Anytime</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Service;
