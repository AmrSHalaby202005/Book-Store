import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "../components/ui/NavLinks";
import { useAuthStore } from "../store";
const NavBar = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <div className="w-full top-0 left-0 relative z-50">
      <header className="w-full px-40 bg-white/15 text-white flex items-center justify-between z-100 fixed ">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img src="/Vector.png" className="mr-2" alt="" /> Bookshop
            <div className="mx-6 h-7 w-px bg-white/50"></div>
          </div>
          <NavLinks />
        </div>
        <div className="flex items-center gap-4 my-6 font-medium">
          <Link
            className="px-4 py-2 bg-[#D9176C] text-white rounded-lg"
            onClick={
              isAuthenticated
                ? logout
                : () => {
                    navigate("/Login");
                  }
            }
            to="/Login"
          >
            {isAuthenticated ? "logout" : "login"}
          </Link>
          <Link
            className="px-4 py-2 bg-white text-[#D9176C] border border-[#D9176C] rounded-lg"
            to="/Register"
          >
            {isAuthenticated ? "" : "Sign Up"}
          </Link>
        </div>
      </header>
    </div>
  );
};
export default NavBar;
