import React, { useEffect, useState, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiUser, CiShop, CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const electronicsRef = useRef(null);
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const navPosy = nav.getBoundingClientRect().top;

    const handleScroll = () => {
      if (window.scrollY >= navPosy) {
        nav.classList.add("fixed", "top-0");
      } else {
        nav.classList.remove("fixed", "top-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleShowList(index) {
    const items = document.querySelectorAll(".electronic-items");
    if (items) {
      items.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("h-246px");
        } else {
          if (item.classList.contains("h-246px")) {
            item.classList.remove("h-246px");
          } else {
            item.classList.add("h-246px");
          }
        }
      });
    }
  }

  return (
    <>
      {/* top nav  */}
      <nav
        ref={navRef}
        className="w-full h-14 bg-cyan-500 text-white font-semibold z-40 left-0"
      >
        <div className="max-w-[1690px] mx-auto h-full flex items-center justify-between lg:justify-start px-3">
          <div>
            <div className="border-r relative lg:w-[280px]">
              <div
                className="flex lg:hidden gap-3 items-center cursor-pointer pr-4"
                onClick={() => {
                  setNav(true);
                  setIsOpen(false);
                }}
              >
                <div className="text-xl flex items-center">
                  <HiOutlineMenuAlt2 />
                </div>
                <p className="text uppercase">Menu</p>
              </div>
              <div
                className={`lg:flex hidden items-center gap-2 z-20 lg:static fixed top-[250px] cursor-pointer bg-cyan-500 rounded-r-3xl py-2 px-2`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="text-xl flex items-center">
                  <HiOutlineMenuAlt2 />
                </div>
                <div className=" lg:flex gap-2 items-center hidden max-w-[400px]">
                  <p className="text uppercase">Browse All Categories</p>
                  <div className={`text-xl ${isOpen ? "rotate-180" : ""}`}>
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <div
                className={`lg:w-full w-[230px] transition-all duration-300 lg:absolute fixed top-1/2 -translate-y-1/2 lg:-translate-y-0 lg:left-0  ${
                  isOpen
                    ? "lg:top-12 opacity-100 left-0 z-20"
                    : "lg:top-14 lg:opacity-0 left-[-230px] -z-20"
                }`}
              >
                <div className=" bg-white rounded-lg text-gray-700 shadow-lg shadow-[rgba(0,0,0,0.04)] relative">
                  <div className="p-3 font-medium">
                    <ul className="space-y-2">
                      <li className="hover:text-cyan-500">Electonic</li>
                      <li className="hover:text-cyan-500">Today's Deal</li>
                      <li className="hover:text-cyan-500">Summer Sale</li>
                      <li className="hover:text-cyan-500">Smart Mobiles</li>
                      <li className="hover:text-cyan-500">
                        Mobile Accessories
                      </li>
                      <li className="hover:text-cyan-500">
                        Computer Accessories
                      </li>
                      <li className="hover:text-cyan-500">Smart Phone</li>
                      <li className="hover:text-cyan-500">Control Speakers</li>
                      <li className="hover:text-cyan-500">Android Tv</li>
                      <li className="hover:text-cyan-500">Game Controller</li>
                      <li className="hover:text-cyan-500">Smart Watch</li>
                      <li className="hover:text-cyan-500">Air Purifier</li>
                      <li className="hover:text-cyan-500">Computer & Laptop</li>
                    </ul>
                  </div>
                  <div
                    className={`flex lg:hidden  gap-2 z-20 absolute top-[20px] -translate-y-1/2 right-[-36px] cursor-pointer bg-cyan-500 rounded-r-3xl w-10 h-10 items-center justify-center`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="text-xl flex items-center text-white">
                      {!isOpen ? <HiOutlineMenuAlt2 /> : <CgClose />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`fixed lg:static transition-all duration-300 top-0 ${
              !nav ? "left-[-100%]" : "left-0"
            } lg:pl-8 lg:h-auto h-screenlg:max-w-auto max-w-full text-left z-40`}
          >
            <ul className="flex lg:p-0 p-3 lg:w-auto w-[250px] lg:items-center xl:gap-10 lg:gap-4 gap-2 lg:flex-row flex-col lg:bg-transparent bg-gray-200 lg:text-white lg:h-auto h-screen overflow-y-auto lg:overflow-y-visible text-gray-700">
              <li className="flex lg:hidden justify-between items-center border-b border-gray-300 py-2">
                <p>MEMU</p>
                <div
                  className="text-xl cursor-pointer"
                  onClick={() => setNav(false)}
                >
                  <CgClose />
                </div>
              </li>
              <li className="cursor-pointer">Home</li>
              <li id="Electronics" className="cursor-pointer relative group">
                <p className="flex items-center gap-3">
                  Electronics
                  <span>
                    <IoIosArrowDown />
                  </span>
                </p>
                <div className="lg:w-[740px] lg:absolute z-30 top-4 -left-6 lg:pt-6 lg:hidden group-hover:block pl-3">
                  <div
                    ref={electronicsRef}
                    className="lg:grid grid-cols-4 lg:py-3 lg:px-3 lg:bg-white rounded-lg lg:shadow-lg shadow-[rgba(0,0,0,0.04)] space-y-2 pt-2"
                  >
                    <div className="lg:p-3 font-medium  ">
                      <ul
                        className={`overflow-hidden h-[24px] lg:h-auto space-y-2 electronic-items transition-all duration-300`}
                      >
                        <li
                          onClick={() => handleShowList(0)}
                          className=" text-start flex items-center gap-2 lg:text-cyan-500"
                        >
                          Headphone
                          <span>
                            <IoIosArrowDown />
                          </span>
                        </li>
                        <div className="px-3 space-y-2 text-gray-600">
                          <li className="hover:text-cyan-500">Speaker</li>
                          <li className="hover:text-cyan-500">Laptop</li>
                          <li className="hover:text-cyan-500">Tablet</li>
                          <li className="hover:text-cyan-500">Android Tv</li>
                          <li className="hover:text-cyan-500">Earbuds Bose</li>
                          <li className="hover:text-cyan-500">Air Purifier</li>
                        </div>
                      </ul>
                    </div>
                    <div className="lg:p-3 font-medium  ">
                      <ul
                        className={`overflow-hidden h-[24px] lg:h-auto space-y-2 electronic-items transition-all duration-300`}
                      >
                        <li
                          onClick={() => handleShowList(1)}
                          className=" text-start flex items-center gap-2 lg:text-cyan-500"
                        >
                          Computer & Laptop
                          <span>
                            <IoIosArrowDown />
                          </span>
                        </li>
                        <div className="px-3 space-y-2 text-gray-600">
                          <li className="hover:text-cyan-500">Camera</li>
                          <li className="hover:text-cyan-500">Mobile</li>
                          <li className="hover:text-cyan-500">Watch</li>
                          <li className="hover:text-cyan-500">Smart TV</li>
                          <li className="hover:text-cyan-500">Apple Ipad</li>
                          <li className="hover:text-cyan-500">
                            Game Controller
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div className="lg:p-3 font-medium  ">
                      <ul
                        className={`overflow-hidden h-[24px] lg:h-auto space-y-2 electronic-items transition-all duration-300`}
                      >
                        <li
                          onClick={() => handleShowList(2)}
                          className=" text-start flex items-center gap-2 lg:text-cyan-500"
                        >
                          Mobile & Tablet
                          <span>
                            <IoIosArrowDown />
                          </span>
                        </li>
                        <div className="px-3 space-y-2 text-gray-600">
                          <li className="hover:text-cyan-500">Home Theater</li>
                          <li className="hover:text-cyan-500">Cell Phones</li>
                          <li className="hover:text-cyan-500">Smart TV</li>
                          <li className="hover:text-cyan-500">Air Purifier</li>
                          <li className="hover:text-cyan-500">
                            Wireless Printer
                          </li>
                          <li className="hover:text-cyan-500">Headphone</li>
                        </div>
                      </ul>
                    </div>
                    <div className="lg:p-3 font-medium">
                      <ul
                        className={`overflow-hidden h-[24px] lg:h-auto space-y-2  electronic-items transition-all duration-300 w-full`}
                      >
                        <li
                          onClick={() => handleShowList(3)}
                          className=" text-start flex items-center gap-2 lg:text-cyan-500"
                        >
                          Smart Devices
                          <span>
                            <IoIosArrowDown />
                          </span>
                        </li>
                        <div className="px-3 space-y-2 text-gray-600">
                          <li className="hover:text-cyan-500">Smart Mobiles</li>
                          <li className="hover:text-cyan-500">Smart TV</li>
                          <li className="hover:text-cyan-500">Smart Watch</li>
                          <li className="hover:text-cyan-500">Smart Cameras</li>
                          <li className="hover:text-cyan-500">
                            Smart Speakers
                          </li>
                          <li className="hover:text-cyan-500">
                            Digital Watches
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor-pointer">Today’s Deal</li>
              <li className="cursor-pointer">Summer Sale</li>
              <li className="cursor-pointer">Smart Mobiles</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Blog</li>
              <li className="lg:hidden border-t border-gray-300">
                <ul className="space-y-2 py-2">
                  <li className="border-r border-gray-300 hover:text-cyan-500">
                    <p>Need Help?</p>
                  </li>
                  <li className="border-r border-gray-300 hover:text-cyan-500">
                    <p>Gift Cards</p>
                  </li>
                  <li className="border-r border-gray-300 hover:text-cyan-500">
                    <p>Country/region</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="flex lg:hidden items-center justify-end *:cursor-pointer font-semibold">
            <li className="border-r border-gray-300 px-4">
              <p>USD $</p>
            </li>
            <li className=" border-gray-300 pl-4">
              <p>English</p>
            </li>
          </ul>
        </div>
      </nav>

      {/* buttom nav  */}
      <nav
        className="lg:hidden flex w-full justify-around h-[70px] items-center bg-white fixed left-0 bottom-0 text-2xl text-black *:pb-1 z-30"
        style={{ boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.04)" }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " border-[rgba(0,0,0,1)] border-b-2"
              : "border-[rgba(0,0,0,0)] border-b-2"
          }
        >
          <GoHome />
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? " border-[rgba(0,0,0,1)] border-b-2"
              : "border-[rgba(0,0,0,0)] border-b-2"
          }
        >
          <CiUser />
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? " border-[rgba(0,0,0,1)] border-b-2"
              : "border-[rgba(0,0,0,0)] border-b-2"
          }
        >
          <CiShop />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? " border-[rgba(0,0,0,1)] border-b-2"
              : "border-[rgba(0,0,0,0)] border-b-2"
          }
        >
          <CiSearch />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? " border-[rgba(0,0,0,1)] border-b-2"
              : "border-[rgba(0,0,0,0)] border-b-2"
          }
        >
          <BsCart2 />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
