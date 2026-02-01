import React from "react";
import { FaFacebook } from "react-icons/fa";

const Facebook = () => {
  return (
    <div>
      <div className="facebook px-4 py-2.75 shadow-lg bg-white rounded-lg flex items-center gap-2 justify-center cursor-pointer">
        <FaFacebook className="text-blue-600" />
        <p>Login with Facebook</p>
      </div>
    </div>
  );
};

export default Facebook;
