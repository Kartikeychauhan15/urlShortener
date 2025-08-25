import React from "react";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>
          <Link
            to="/auth"
            className="absolute right-6 top-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 border border-blue-700"
            style={{ zIndex: 10 }}
          >
            Login
          </Link>
          {/* <Link
            to="/auth"
            className="absolute right-4 top-4 bg-blue-500 text-xl font-semibold border-black rounded-md px-4 text-white hover:bg-blue-600"
            style={{ zIndex: 10 }}
          >
            Logout
          </Link> */}
          {/* <div className="flex items-center">
            <Link
              to="/auth"
              className="bg-blue-500 text-xl font-semibold border-black rounded-md justify-end px-4 text-white hover:bg-blue-600 mr-4 "
            >
              Login
            </Link>
          </div> */}

          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {/* {(true) ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {userName || 'User'}</span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
