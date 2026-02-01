import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NavLinks from "../components/ui/NavLinks";
import { TiWorld } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#3B2F4A] text-white">
      <footer className="container mx-auto py-30">
        <div className="flex items-center justify-between border-b border-gray-400 pb-4">
          <div className="flex justify-center items-center">
            <img src="/Vector.png" className="mr-2" alt="" />
            Bookshop <div className="mx-6 h-7 w-px bg-white/50"></div>
            <NavLinks />
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="mt-3">
            Developed By EraaSoft All Copy Rights Reserved&nbsp;@2024
          </p>
          <div className="language flex items-center gap-3 mt-3">
            <TiWorld />
            <p className="flex items-center gap-6 border text-sm text-gray-400 rounded-xl py-1 px-2">
              English
              <IoIosArrowForward className="text-gray-400" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
