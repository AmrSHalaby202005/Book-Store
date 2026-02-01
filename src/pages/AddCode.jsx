import React from "react";
import { Link } from "react-router-dom";

const AddCode = () => {
  return (
    <div>
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-lg text-[#D9176C] pb-4">Reset your password!</h2>
        <p className="text-black/50 mb-8">
          Enter the 4 dights code that you received on your email
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-2xl">
          <div className="flex items-center justify-center gap-5 mb-8">
            <input
              type="text"
              defaultValue="1"
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-bold border border-gray-400 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
            />
            <input
              type="text"
              defaultValue="2"
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-bold border border-gray-400 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
            />
          </div>

          <div className="text-center ">
            <button
              className="bg-[#D9176C] py-2 px-18 rounded-lg text-white mb-8"
              type="submit"
            >
              Reset password
            </button>

            <p className="text-sm mb-96">
              Didn’t receive a code?{" "}
              <Link className="text-[#D9176C]" to="/Login">
                Send again
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCode;
