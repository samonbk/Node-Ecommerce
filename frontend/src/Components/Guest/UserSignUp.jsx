import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useUserStore } from "../../assets/Data/user";
import { Link, useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const { createUser, fetchUsers, users } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "guest",
    dob: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checklogin = localStorage.getItem("myecommercestoragekey");
    if (checklogin) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      if (data.success) {
        console.log("fetch data success");
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

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", user.name);
      data.append("email", user.email);
      data.append("password", user.password);
      data.append("role", user.role);
      data.append("dob", user.dob);
      if (file) {
        data.append("image", file); // Add file only if available
      }

      const result = await createUser(data); // Pass FormData to createUser
      setMessage(result.message);
      setSuccess(result.success);
      setSubmited(true);

      if (result.success) {
        setUser({
          name: "",
          email: "",
          password: "",
          dob: "",
          image: "",
        });
        alert(result.message);
        navigate("/guest/signin"); // Redirect to sign-in page
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <div className="w-full px-3 py-4 text-2xl bg-cyan-100">
        <Link
          to={"/"}
          className="hover:text-cyan-500 font-semibold cursor-pointer"
        >
          Home
        </Link>
        /<span className="text-gray-600">Sign In</span>
      </div>
      <section className="px-3">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-16 border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          {submited && !success ? (
            <div className="text-red-500 text-center mb-4">{message}</div>
          ) : (
            <div className="text-green-500 text-center mb-4">{message}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

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

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={user.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={onChangeFile}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4">
            aleady have an account?{" "}
            <Link to={"/guest/signin"} className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default UserSignUp;
