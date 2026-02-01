import React from "react";

const ResetPassword = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-lg text-[#D9176C] pb-4">Create new password!</h2>
        <p className="text-black/50 mb-8">
          Create a strong password <br /> Your new password must be different
          from previous one
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-xl mx-auto">
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="">
              Password
            </label>
            <input
              className="bg-white p-3 rounded-lg border border-gray-200"
              name="password"
              type="password"
              placeholder="Enter password"
              id="password"
            />
            <p className="text-black/50">Must be at least 8 characterss</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="">
              Confirm Password
            </label>
            <input
              className="bg-white p-3 rounded-lg border border-gray-200"
              name="password_confirmation"
              type="password"
              placeholder="Confirmation password"
              id="confirm-password"
            />
            <div className="flex items-center gap-2 mb-8">
              <input type="checkbox" name="remember" />
              <label htmlFor="">Remember me</label>
            </div>
            <button
              className="bg-[#D9176C] py-2 px-18 rounded-lg text-white mb-96"
              type="submit"
            >
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
