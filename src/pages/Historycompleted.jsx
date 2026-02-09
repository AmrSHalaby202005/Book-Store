import React from "react";
import { IoArrowForward } from "react-icons/io5";
const tabs = ["All", "In Progress", "Completed", "Canceled"];

const orders = [
  {
    id: "#123456",
    status: "Completed",
    date: "jul, 31 2024",
    address: "Maadi, Cairo, Egypt.",
  },
  {
    id: "#123457",
    status: "Completed",
    date: "jul, 31 2024",
    address: "Maadi, Cairo, Egypt.",
  },
  {
    id: "#123458",
    status: "Completed",
    date: "jul, 31 2024",
    address: "Maadi, Cairo, Egypt.",
  },
];

const Historycompleted = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      {/* Tabs */}
      <div className="container mx-auto pb-50 pt-10">
        <div className="flex gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm border
              ${
                tab === "Completed"
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders list */}
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between items-start bg-white border border-black/20 rounded-xl p-6"
            >
              {/* Left labels */}
              <div className="flex flex-col gap-2 text-gray-500">
                <span>Order No.</span>
                <span>Status</span>
                <span>Date</span>
                <span>Address</span>

                <button className="flex items-center gap-2 text-pink-500 mt-4 font-medium text-lg">
                  View order detail{" "}
                  <span>
                    <IoArrowForward size={20} />
                  </span>
                </button>
              </div>

              {/* Right values */}
              <div className="flex flex-col gap-2 text-right">
                <span>{order.id}</span>
                <span>{order.status}</span>
                <span>{order.date}</span>
                <span>{order.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historycompleted;
