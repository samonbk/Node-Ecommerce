import React, { useEffect } from "react";
import logo from "../../assets/Image/logo.avif";
import { RiStackLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useLogedUserStore } from "../../assets/Data/logeduser";
import imageUrl from "../../assets/Data/url";
const Header = () => {
  const { logedUser, islog, logOut, setIslog } = useLogedUserStore();

  useEffect(() => {
    const checklogin = localStorage.getItem("myecommercestoragekey");
    if (checklogin) {
      setIslog(true);
    }
  }, [islog]);

  const handleSubmitSignOut = async () => {
    const result = await logOut();
    if (result.success) {
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <>
      <div className="border-b border-gray-300 border-opacity-50">
        <div className="max-w-[1690px] mx-auto h-10 lg:flex items-center justify-between px-3 text-[14px] font-meduim hidden">
          <p>
            Tell a friends about Electshop Electronics & get 30% off your next
            order.
          </p>
          <div className="max-w-[670px]">
            <ul className="flex items-center justify-end *:px-4 *:cursor-pointer font-semibold">
              <li className="border-r border-gray-300 hover:text-cyan-500">
                <p>Need Help?</p>
              </li>
              <li className="border-r border-gray-300 hover:text-cyan-500">
                <p>Gift Cards</p>
              </li>
              <li className="border-r border-gray-300 hover:text-cyan-500">
                <p>Country/region</p>
              </li>
              <li className="border-r border-gray-300 hover:text-cyan-500">
                <p>USD $</p>
              </li>
              <li className="border-r border-gray-300 hover:text-cyan-500">
                <p>English</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        <div className="max-w-[1690px] lg:h-24 h-16 mx-auto flex justify-between items-center px-3">
          <Link to={"/"} className="lg:pr-10 lg:w-[400px]">
            <img className="w-full" src={logo} alt="logo" />
          </Link>
          <div className="lg:block hidden w-full">
            <Search />
          </div>
          <div className="flex items-center gap-6 lg:min-w-[500px] justify-end">
            {!islog ? (
              <div className="lg:flex items-center gap-3 hidden">
                <Link
                  to={"/guest/signin"}
                  className="cursor-pointer hover:text-cyan-500"
                >
                  Sign in
                </Link>
                <p>/</p>
                <Link
                  to={"/guest/signup"}
                  className="cursor-pointer hover:text-cyan-500"
                >
                  Rigister
                </Link>
              </div>
            ) : (
              ""
            )}
            <div className="lg:border-r border-gray-300 h-6"></div>
            <div className="flex lg:gap-6 gap-3 items-center">
              <Link
                to={"/account"}
                className="text-2xl relative h-8 w-8 flex items-center justify-center overflow-hidden rounded-full"
              >
                {islog && logedUser.image ? (
                  <img src={imageUrl + logedUser.image} alt="" />
                ) : (
                  <CiUser />
                )}
              </Link>
              <div className="text-2xl relative h-8 w-8 md:flex hidden items-center justify-center">
                <RiStackLine />
                <span className="absolute -top-2 text-sm w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center -right-3 text-white font-bold">
                  0
                </span>
              </div>
              <div className="text-2xl relative h-8 w-8 md:flex items-center justify-center hidden">
                <BsHeart />
                <span className="absolute -top-2 text-sm w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center -right-3 text-white font-bold">
                  0
                </span>
              </div>
              <div className="text-3xl relative h-8 w-8 flex items-center justify-center">
                <BiCart />
                <span className="absolute -top-2 text-sm w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center -right-3 text-white font-bold">
                  0
                </span>
              </div>
              <div className="text-center">
                <p className="hidden lg:inline-block">My card</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden mb-3 px-3">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
