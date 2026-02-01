import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../components/ui/NavLinks";

const NavBar = () => {
  return (
    <div className="w-full top-0 left-0 relative z-50">
      <header className="w-full px-40 bg-white/15 text-white flex items-center justify-between z-100 fixed ">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img src="/Vector.png" className="mr-2" alt="" />
            Bookshop <div className="mx-6 h-7 w-px bg-white/50"></div>
          </div>
          <NavLinks />
        </div>

        <div className="flex items-center gap-4 my-6 font-medium">
          <Link
            className="px-4 py-2 bg-[#D9176C] text-white rounded-lg"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="px-4 py-2 bg-white text-[#D9176C] border border-[#D9176C] rounded-lg"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
