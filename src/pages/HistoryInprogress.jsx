import { FaCheck } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const HistoryInprogress = () => {
  const orders = [
    {
      id: 123456,
      status: "In progress",
      date: "jul, 31 2024",
      address: "Maadi, Cairo, Egypt.",
      step: 1,
    },
    {
      id: 123457,
      status: "In progress",
      date: "jul, 31 2024",
      address: "Maadi, Cairo, Egypt.",
      step: 0,
    },
  ];

  const tabs = ["All", "In Progress", "Completed", "Canceled"];

  const steps = ["Order placed", "Shipping", "Completed"];

  return (
    <div className="bg-gray-100">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="px-16 pb-30">
        <div className="flex gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm border
              ${
                tab === "In Progress"
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="w-full bg-white rounded-xl p-6 mb-6 border border-black/20 relative"
          >
            {/* delete icon */}
            <button className="absolute top-4 right-6 text-pink-500 hover:text-pink-600">
              <FiTrash2 size={22} />
            </button>

            {/* info */}
            <div className="flex justify-between">
              <div className="pt-6 space-y-2 text-gray-400">
                <p>Order No.</p>
                <p>Status</p>
                <p>Date</p>
                <p>Address</p>
              </div>

              <div className="pt-6 space-y-2 text-right">
                <p>#{order.id}</p>
                <p>{order.status}</p>
                <p>{order.date}</p>
                <p>{order.address}</p>
              </div>
            </div>

            {/* progress */}
            <div className="mt-8 flex justify-center">
              <div className="flex w-full max-w-3xl items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center">
                    {/* circle + text */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white
                          ${index <= order.step ? "bg-pink-500" : "bg-gray-400"}`}
                      >
                        <FaCheck size={18} />
                      </div>

                      <span
                        className={`mt-2 text-sm text-center
                          ${index <= order.step ? "text-pink-500" : "text-gray-400"}`}
                      >
                        {step}
                      </span>
                    </div>

                    {/* line */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`w-60 h-px 
                          ${index < order.step ? "bg-pink-500" : "bg-gray-300"}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryInprogress;
