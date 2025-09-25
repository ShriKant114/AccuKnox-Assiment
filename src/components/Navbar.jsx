import React, { useState } from "react";
import { Bell, Search, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(setSearchQuery(value));
  };

  const clearSearch = () => {
    setSearchText("");
    dispatch(setSearchQuery(""));
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      <div className="text-l md:text-xl font-semibold text-gray-800">
        Dashboard V2
      </div>

      <div className="relative w-50 md:w-100 mx-6">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search by widget name..."
          value={searchText}
          onChange={handleSearch}
          className="w-full pl-9 pr-8 h-9 text-sm border rounded-md focus:outline-none"
        />

        {searchText && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="relative">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
      </div>
    </nav>
  );
};

export default Navbar;
