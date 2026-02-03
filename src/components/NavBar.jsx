import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import NavLinks from "../components/ui/NavLinks";
import { useAuthStore } from "../store";
import { MdPersonOutline } from "react-icons/md";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };
  const handleProfile = () => {
    Profile();
    navigate("/Profile");
  };

  return (
    <div className="w-full top-0 left-0 relative z-50">
      <div className="w-full px-40 bg-white/15 text-white flex items-center justify-between fixed">
        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/Vector.png" className="mr-2" alt="" />
            Bookshop
            <div className="mx-6 h-7 w-px bg-white/50"></div>
          </div>
          <NavLinks />
        </div>

        <div className="flex items-center gap-6 my-6 font-medium">
          {isAuthenticated ? (
            <div className="flex justify-center items-center gap-6">
              <Link className="relative">
                <LuHeart size={22} />
                <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>

              <Link className="relative">
                <RiShoppingCart2Line size={22} />
                <span className="absolute -top-2 -right-2 bg-[#D9176C] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>

              <div className="relative flex justify-center items-center gap-2 group cursor-pointer">
                <img
                  src="/boy_6048329.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute flex flex-col justify-start items-start w-full left-0 top-14 bg-white/30 text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 ease-in-out">
                  <button
                    onClick={handleProfile}
                    className="w-full pl-2 py-2 hover:bg-white/50 rounded-lg flex items-center gap-2"
                  >
                    <MdPersonOutline size={25} />
                    profile
                  </button>
                  <button
                    // onClick={handleProfile}
                    className="w-full pl-2 py-2 hover:bg-white/50 rounded-lg flex items-center gap-2"
                  >
                    <IoTimeOutline size={25} />
                    Order History
                  </button>
                  <button
                    // onClick={handleProfile}
                    className="w-full pl-2 py-2 hover:bg-white/50 rounded-lg flex items-center gap-2"
                  >
                    <IoLocationOutline size={25} />
                    Address
                  </button>
                  <button
                    // onClick={handleProfile}
                    className="w-full pl-2 py-2 hover:bg-white/50 rounded-lg flex items-center gap-2"
                  >
                    <IoIosHelpCircleOutline size={25} />
                    Help
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full pl-2 py-2 hover:bg-white/50 rounded-lg flex items-center gap-2"
                  >
                    <IoIosLogOut size={25} />
                    Logout
                  </button>
                </div>
                <div>
                  <h2 className="text-sm">User Name</h2>
                  <Link className="text-sm text-gray-400">
                    example@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <Link
                to="/Login"
                className="px-4 py-2 bg-[#D9176C] text-white rounded-lg"
              >
                Login
              </Link>

              <Link
                to="/Register"
                className="px-4 py-2 bg-white text-[#D9176C] border border-[#D9176C] rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
