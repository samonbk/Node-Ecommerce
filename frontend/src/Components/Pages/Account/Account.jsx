import React, { useEffect } from "react";
import { useLogedUserStore } from "../../../assets/Data/logeduser";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useLogedGuestStore } from "../../../assets/Data/logedguest";

const Account = () => {
  const { logedGuest, isGuest, setIsGuest, setLogedGuest, logOutGuest } =
    useLogedGuestStore();
  const navigate = useNavigate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const imageUrl = "http://localhost:5000/public/images/";

  useEffect(() => {
    const checklogin = localStorage.getItem(
      "myecommercelocalstorageadminguestkey"
    );
    if (checklogin) {
      setIsGuest(true);
      setLogedGuest(JSON.parse(checklogin));
    } else {
      navigate("/guest/signin");
    }
  }, []);

  const handleSubmitSignOut = async () => {
    const result = await logOutGuest();
    if (result.success) {
      alert(result.message);
      navigate("/");
    }
  };

  return (
    <div className="mt-4 max-w-[1690px] mx-auto md:px-8 px-3">
      <div className="flex justify-between items-center py-3">
        <h2 className="text-xl font-medium">
          <Link to={"/"} className="font-medium hover:text-cyan-500">
            Home
          </Link>
          <span className="text-gray-500">/Account</span>
        </h2>
        {isGuest && (
          <h2
            className="text-lx font-medium text-red-500 cursor-pointer px-2 py-1"
            onClick={handleSubmitSignOut}
          >
            Sign Out
          </h2>
        )}
      </div>
      <div className="max-w-[500px] mx-auto border border-gray-300 shadow-md p-4 rounded-2xl mt-4">
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full flex justify-center items-center border border-gray-300 text-4xl overflow-hidden">
            {logedGuest.image ? (
              <img src={imageUrl + logedGuest.image} alt="" />
            ) : (
              <FaUser />
            )}
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="w-1/6">
            <p>Nmae:</p>
          </div>
          <div>
            <p>{logedGuest.name}</p>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="w-1/6">
            <p>Email:</p>
          </div>
          <div>
            <p>{logedGuest.email}</p>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="w-1/6">
            <p>Nmae:</p>
          </div>
          <div>
            <p>
              {new Date(logedGuest.dob).getDate()}/
              {months[new Date(logedGuest.dob).getMonth()]}/
              {new Date(logedGuest.dob).getFullYear()}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div className="w-1/6">
            <p>Role:</p>
          </div>
          <div>
            <p>{logedGuest.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
