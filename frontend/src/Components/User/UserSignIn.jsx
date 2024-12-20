import React, { useEffect, useState } from "react";
import { useUserStore } from "../../assets/Data/user";
import bcrypt from "bcryptjs";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useLogedUserStore } from "../../assets/Data/logeduser";

const UserSignIn = () => {
  const { logedUser, isUser, setIsUser, setLogedUser } = useLogedUserStore();
  const { fetchUsers, users } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checklogin = localStorage.getItem(
      "myecommercelocalstorageadminuserkey"
    );
    if (checklogin) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      if (data.success) {
        console.log(users);
      }
    };
    fetchData();
  }, [fetchUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);
    const getUser = users.find(
      (users) => users.email == user.email && users.role == user.role
    );
    if (getUser) {
      try {
        const isMatch = await bcrypt.compare(user.password, getUser.password);
        if (isMatch) {
          console.log("Login successful");
          setSuccess(true);
          setMessage("Login successful");
          localStorage.setItem(
            "myecommercelocalstorageadminuserkey",
            JSON.stringify(getUser)
          );
          setLogedUser(getUser);
          setIsUser(true);
          navigate("/user");
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
      console.log("User not found");
      setSuccess(false);
      setMessage("User not found");
    }
  };

  return (
    <div>
      <div className="w-full px-3 py-4 text-2xl bg-cyan-100">
        <Link
          to={"/"}
          className="hover:text-cyan-500 font-semibold cursor-pointer"
        >
          Home
        </Link>
        /<span className="text-gray-600">User Sign In</span>
      </div>
      <section className="px-3">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-16 border border-gray-200">
          <h2 className="text-2xl text-gray-600 text-center mb-6">
            User Sign In
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
            <Link to="/guest/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserSignIn;
