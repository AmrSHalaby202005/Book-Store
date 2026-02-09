import { FaArrowRight, FaCheck } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const Historyall = () => {
  const tabs = ["All", "In Progress", "Completed", "Canceled"];
  const steps = ["Order placed", "Shipping", "Completed"];

  const orders = [
    {
      id: 123456,
      status: "In progress",
      date: "jul, 31 2024",
      address: "Maadi, Cairo, Egypt.",
      step: 0,
    },
    {
      id: 123456,
      status: "Completed",
      date: "jul, 31 2024",
      address: "Maadi, Cairo, Egypt.",
      step: null,
    },
    {
      id: 123456,
      status: "Canceled",
      date: "jul, 31 2024",
      address: "Maadi, Cairo, Egypt.",
      step: null,
    },
  ];

  return (
    <div className="">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="space-y-6 px-20 pb-30 pt-10">
        <div className="flex gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm border
              ${
                tab === "All"
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {orders.map((order, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-6 bg-white"
          >
            {/* header */}
            <div className="relative flex">
              <div className="flex flex-col gap-2 text-gray-400 pt-6">
                <span>Order No.</span>
                <span>Status</span>
                <span>Date</span>
                <span>Address</span>
              </div>

              <div className="ml-auto flex flex-col gap-2 text-right text-black pt-6">
                <span>#{order.id}</span>
                <span>{order.status}</span>
                <span>{order.date}</span>
                <span>{order.address}</span>
              </div>

              <FiTrash2
                className="absolute top-0 right-0 text-pink-500 cursor-pointer"
                size={22}
              />
            </div>

            {/* progress (only first card) */}
            {order.step !== null && (
              <div className="relative mt-10 flex justify-center">
                <div className="relative w-full max-w-2xl">
                  {/* steps */}
                  <div className="relative flex justify-between">
                    {steps.map((step, index) => (
                      <div key={step} className="flex flex-col items-center">
                        {/* line */}
                        <div className="absolute top-5 left-6 w-[90%] h-px bg-gray-200" />
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white z-10
                          ${
                            index <= order.step ? "bg-pink-500" : "bg-gray-300"
                          }`}
                        >
                          <FaCheck size={14} />
                        </div>

                        <span
                          className={`mt-2
                          ${
                            index === order.step
                              ? "text-pink-500"
                              : "text-gray-400"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* view order detail (last two cards) */}
            {order.step === null && (
              <button className="mt-6 text-pink-500 flex items-center gap-1">
                View order detail <FaArrowRight size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historyall;
