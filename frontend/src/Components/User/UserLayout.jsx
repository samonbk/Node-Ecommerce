import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import imageUrl from "../../assets/Data/url";
import UserNavbar from "./UserNavbar";
import { useLogedUserStore } from "../../assets/Data/logeduser";

const UserLayout = () => {
  const [page, setPage] = useState("Dashboard");
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { isUser, setIsUser, logedUser, setLogedUser } = useLogedUserStore();
  useEffect(() => {
    const checklog = localStorage.getItem(
      "myecommercelocalstorageadminuserkey"
    );
    if (checklog) {
      setIsUser(true);
      setLogedUser(JSON.parse(checklog));
      console.log(logedUser);
    } else {
      navigate("/user/signin");
      console.log(logedUser);
    }
  }, []);

  return (
    <div>
      <UserNavbar page={page} setPage={setPage} />
      <header className="pl-[260px] flex items-center py-4 justify-between bg-cyan-100 fixed top-0 shadow-md w-full px-4">
        <div className="w-[50%]">
          <h2 className="text-2xl  px-3 ">
            <Link to="/user/dashboard" className=" font-medium cursor-pointer">
              User
            </Link>
            <span className="text-gray-400"> / {page}</span>
          </h2>
        </div>
        <div className="pl-[260px] flex items-center w-[40%] justify-end gap-5">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-green-600">
            <img src={logedUser && imageUrl + logedUser.image} alt="" />
          </div>
          <h2>{logedUser && logedUser.name}</h2>
          <h2 className="px-3 py-1 rounded-2xl border border-gray-300">
            Role: {logedUser && logedUser.role}
          </h2>
        </div>
      </header>
      <div className="pl-[260px] w-full py-10 px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
