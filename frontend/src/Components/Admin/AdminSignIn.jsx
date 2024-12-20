import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../assets/Data/user";
import bcrypt from "bcryptjs";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useLogedAdminrStore } from "../../assets/Data/logedadmin";

const AdminSignIn = () => {
  const { users, fetchUsers } = useUserStore();
  const { setLogedAdmin, setIsAdmin } = useLogedAdminrStore();
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const checklog = localStorage.getItem("myecommercestorageadminkey");
    if (checklog) {
      setIsAdmin(true);
      navigate("/admin");
      setLogedAdmin(checklog);
    }
    const fetchData = async () => {
      const result = await fetchUsers();
      if (result.success) {
        console.log(result.message);
      } else {
        console.log("fetch data fail");
      }
    };
    fetchData();
  }, [fetchUsers]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);
    const getAdmin = users.find(
      (users) => users.email == user.email && users.role == user.role
    );
    if (getAdmin) {
      try {
        const isMatch = await bcrypt.compare(user.password, getAdmin.password);
        if (isMatch) {
          console.log("Login successful");
          setSuccess(true);
          setMessage("Login successful");
          localStorage.setItem(
            "myecommercestorageadminkey",
            JSON.stringify(getAdmin)
          );
          setLogedAdmin(getAdmin);
          setIsAdmin(true);
          navigate("/admin");
        } else {
          console.log("Login fail");
          setSuccess(false);
          setMessage("Email or password is incorrect");
        }
      } catch (error) {
        console.error("Error comparing passwords:", error);
        throw new Error("Password comparison failed");
      }
    } else {
      console.log("User not found or you're not admin");
      console.log(user);
      setSuccess(false);
      setMessage("User not found or you're not admin");
    }
  };

  return (
    <div>
      <h2 className="text-2xl py-4 px-3 w-full bg-cyan-100">
        <Link to="/admin" className=" font-medium cursor-pointer">
          Admin
        </Link>
        <span className="text-gray-400"> / Admin Sign In</span>
      </h2>
      <section className="px-3">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-16 border border-gray-200">
          <h2 className="text-2xl text-gray-600 text-center mb-6">
            Admin Sign In
          </h2>
          {submited && !success ? (
            <div className="text-red-500 text-center mb-4">{message}</div>
          ) : (
            <div className="text-green-500 text-center mb-4">{message}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 "
              >
                Password
              </label>
              <div className=" relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="block w-full py-2  focus:outline-none focus:ring-2 border border-gray-300 rounded-lg px-3 focus:ring-blue-500"
                  required
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer p-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <BsEye /> : <BsEyeSlash />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/user/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdminSignIn;
