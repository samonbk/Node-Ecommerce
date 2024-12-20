import React from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="w-full flex">
      <input
        type="text"
        className="border border-cyan-500 rounded-l-lg w-full px-4 focus:outline-none"
      />
      <div className="h-10 w-12 flex justify-center items-center bg-cyan-500 rounded-r-lg text-white text-3xl">
        <CgSearch />
      </div>
    </div>
  );
};

export default Search;
