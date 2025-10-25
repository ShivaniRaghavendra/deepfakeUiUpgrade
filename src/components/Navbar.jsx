import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-pink-500">DeepVerify</h1>
      <div className="space-x-6 flex items-center">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-pink-500">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-pink-500">Register</Link>
          </>
        ) : (
          <>
            <Link to="/upload" className="text-gray-700 hover:text-pink-500">Upload</Link>
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-red-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
