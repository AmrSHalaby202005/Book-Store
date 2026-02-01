import React from "react";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  return (
    <div>
      <div className="google px-4 py-2.75 shadow-lg bg-white rounded-lg flex items-center gap-2 justify-center cursor-pointer">
        <FcGoogle />
        <p>Login with Google</p>
      </div>
    </div>
  );
};

export default Google;
