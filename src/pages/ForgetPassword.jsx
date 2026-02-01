import React from "react";

const ForgetPassword = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-lg text-[#D9176C] pb-4">Forget Password?</h2>
        <p className="text-black/50 mb-8">
          Enter your email to reset your password
        </p>
      </div>
      <div className="flex flex-col w-xl mx-auto">
        <label className="flex items-start font-medium pb-2" htmlFor="email">
          Email
        </label>
        <input
          className="bg-white border border-gray-200 p-3 rounded-lg mb-10"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        <button
          className="bg-[#D9176C] py-2 rounded-lg text-white mb-96"
          type="submit"
        >
          Send reset code
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
