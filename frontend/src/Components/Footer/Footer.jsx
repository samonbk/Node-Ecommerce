import React from "react";
import app_store from "../../assets/Image/app-store.png";
import google_play from "../../assets/Image/google-play.png";
import card1 from "../../assets/Image/card-1.svg";
import card2 from "../../assets/Image/card-2.svg";
import card3 from "../../assets/Image/card-3.svg";
import card4 from "../../assets/Image/card-4.svg";
import card5 from "../../assets/Image/card-5.svg";
import card6 from "../../assets/Image/card-6.svg";
import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="">
      <section className="md:pt-16 pt-4 md:px-16 px-3 md:pb-6 pb-10 bg-gray-800 text-white">
        <div className="max-w-[1690px] mx-auto grid md:grid-cols-3 xl:grid-cols-5 grid-cols-2 md:gap-10 gap-4">
          <div>
            <h3 className="text-xl">Our Information</h3>
            <div className="w-[60px] border border-b-2 border-cyan-500 mt-2"></div>
            <p className="mt-3">
              The standard chunk of lorem Ipsum used since the 1500s is more
              reproduced below for those interested sections 1.10.32 and 1.10.33
              from de finibus bonorum et malorum by cicero are also 1914
              translation.
            </p>
            <div className="mt-4">
              <img src={app_store} alt="" />
              <img className="mt-4" src={google_play} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-xl">Quick Links</h3>
            <div className="w-[60px] border border-b-2 border-cyan-500 mt-2"></div>
            <ul className="space-y-3 mt-3 ">
              <li className="hover:text-cyan-500">Contact us</li>
              <li className="hover:text-cyan-500">Shipping</li>
              <li className="hover:text-cyan-500">Sitemap</li>
              <li className="hover:text-cyan-500">FAQs</li>
              <li className="hover:text-cyan-500">Store</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Information</h3>
            <div className="w-[60px] border border-b-2 border-cyan-500 mt-2"></div>
            <ul className="space-y-3 mt-3 ">
              <li className="hover:text-cyan-500">Delivery Information</li>
              <li className="hover:text-cyan-500">About Us</li>
              <li className="hover:text-cyan-500">Privacy Policy</li>
              <li className="hover:text-cyan-500">Terms and Conditions</li>
              <li className="hover:text-cyan-500">Search</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Need Help?</h3>
            <div className="w-[60px] border border-b-2 border-cyan-500 mt-2"></div>
            <ul className="space-y-3 mt-3 ">
              <li className="hover:text-cyan-500">Contact us</li>
              <li className="hover:text-cyan-500">Shipping</li>
              <li className="hover:text-cyan-500">Sitemap</li>
              <li className="hover:text-cyan-500">FAQs</li>
              <li className="hover:text-cyan-500">Store</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Contact Us</h3>
            <div className="w-[60px] border border-b-2 border-cyan-500 mt-2"></div>
            <div className="flex gap-2 mt-3">
              <div className="text-lg">
                <FaLocationDot />
              </div>
              <p>
                Electshop - Electronics Store 507-Union Trade Ipsum Doler Centre
                France
              </p>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <div className="text-lg">
                <GoMail />
              </div>
              <p>samonee7777@gmail.com</p>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <div className="text-lg">
                <TfiHeadphoneAlt />
              </div>
              <p>+855 11339844</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1690px] mx-auto md:mt-14 mt-8 flex md:flex-row flex-col md:gap-10 gap-4 items-center justify-between">
          <div className="flex items-center gap-4 justify-start text-xl">
            <a
              className="flex w-10 h-10 rounded-full bg-gray-200 hover:bg-cyan-500 justify-center items-center text-gray-800 hover:text-white"
              href=""
            >
              <FaFacebook />
            </a>
            <a
              className="flex w-10 h-10 rounded-full bg-gray-200 hover:bg-cyan-500 justify-center items-center text-gray-800 hover:text-white"
              href=""
            >
              <FaInstagramSquare />
            </a>
            <a
              className="flex w-10 h-10 rounded-full bg-gray-200 hover:bg-cyan-500 justify-center items-center text-gray-800 hover:text-white"
              href=""
            >
              <BsTwitterX />
            </a>
            <a
              className="flex w-10 h-10 rounded-full bg-gray-200 hover:bg-cyan-500 justify-center items-center text-gray-800 hover:text-white"
              href=""
            >
              <FaTelegram />
            </a>
          </div>
          <div className="text-center">
            <p>© 2024, Electshop - Electronics Store Powered by Shopify</p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <div>
              <img src={card1} alt="" />
            </div>
            <div>
              <img src={card2} alt="" />
            </div>
            <div>
              <img src={card3} alt="" />
            </div>
            <div>
              <img src={card4} alt="" />
            </div>
            <div>
              <img src={card5} alt="" />
            </div>
            <div>
              <img src={card6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
