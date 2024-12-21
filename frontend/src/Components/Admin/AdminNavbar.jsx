import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Image/logo.avif";
import { useLogedAdminrStore } from "../../assets/Data/logedadmin";
import { IoSettingsOutline } from "react-icons/io5";

const AdminNavbar = ({ page, setPage }) => {
  const { logOutAdmin } = useLogedAdminrStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logOutAdmin();
    if (result.success) {
      alert(result.message);
      navigate("/admin/signin");
    }
  };

  return (
    <div>
      <nav className="z-10 min-h-screen overflow-y-auto w-[260px] fixed top-0 left-0 py-8 px-4 bg-gray-100 shadow-lg shadow-gray-400/60">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className=" mt-6 space-y-3">
          <li className="" onClick={() => setPage("dashboard")}>
            <NavLink
              to={"/admin/dashboard"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="" onClick={() => setPage("Product List")}>
            <NavLink
              to={"product_table"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              Product Table
            </NavLink>
          </li>
          <li className="" onClick={() => setPage("User Table")}>
            <NavLink
              to={"user_table"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              User Table
            </NavLink>
          </li>
          <li className="" onClick={() => setPage("Add Product")}>
            <NavLink
              to={"add_product"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="" onClick={() => setPage("Create User")}>
            <NavLink
              to={"create_user"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              Create User
            </NavLink>
          </li>
          <li className="" onClick={() => setPage("Create Guest")}>
            <NavLink
              to={"create_guest"}
              className={({ isActive }) =>
                isActive
                  ? " w-full inline-block border-cyan-500 text-cyan-500 border-r-4"
                  : " border-cyan-500 w-full inline-block hover:border-cyan-500 hover:text-cyan-500 hover:border-r-4"
              }
            >
              Create Guest
            </NavLink>
          </li>
        </ul>
        <div className="fixed bottom-0 left-0 px-3 pb-3">
          <div className="relative group">
            <div className="text-3xl">
              <IoSettingsOutline />
            </div>
            <div className="absolute -top-10 h-24 w-24 text-center">
              <span
                className="text-red-500 hidden group-hover:block rounded-2xl py-1 px-3 bg-white cursor-pointer"
                onClick={handleLogout}
              >
                Sign Out
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
