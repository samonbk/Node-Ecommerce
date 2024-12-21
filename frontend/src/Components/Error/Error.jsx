import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="w-screen h-screen relative top-0 left-0 bg-red-400 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-9xl font-bold text-gray-300 tracking-widest flex flex-col items-center">
            404
          </h1>
          <p className="text-2xl font-semibold text-center mt-5 md:text-3xl">
            Sorry, this Page not found
          </p>
          <p className="text-white mt-4">
            This link you followed probably broken or the page has been <br />
            removed
          </p>
          <Link
            className="text-indigo-500 block hover:text-indigo-700 font-medium py-2 px-4 rounded mt-5 text-center underline"
            to="/"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
