import { Minus, Plus } from "lucide-react";
import { MdDeleteOutline } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const cartItems = [
  {
    id: 1,
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosanki",
    image: "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.",
    price: 40,
    qty: 1,
    asin: "ASIN : B09TWSRMCB",
  },
  {
    id: 2,
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosanki",
    image: "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.",
    price: 40,
    qty: 1,
    asin: "ASIN : B09TWSRMCB",
  },
  {
    id: 3,
    title: "Rich Dad And Poor Dad",
    author: "Robert T. Kiyosanki",
    image: "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut.",
    price: 40,
    qty: 1,
    asin: "ASIN : B09TWSRMCB",
  },
];

const summaryRows = [
  { label: "Subtotal", value: "$120" },
  { label: "Shipping", value: "Free Delivery" },
  { label: "Tax", value: "$4" },
];

const Mycart = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="min-h-screen py-1">
        <div className="container mx-auto px-4">
          <div className="flex mb-8 font-semibold">
            <div className="w-1/3 pl-20 txet-2xl">Item</div>
            <div className="w-1/5 text-center txet-2xl">Quantity</div>
            <div className="w-1/7 text-center txet-2xl">Price</div>
            <div className="w-1/5 text-center txet-2xl">Total Price</div>
          </div>

          {/* ===== ITEMS ===== */}
          <div className="space-y-4 mb-20">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 flex items-center">
                {/* ITEM */}
                <div className="w-[36%] flex gap-6">
                  <img src={item.image} className="w-40 object-cover rounded" />

                  <div>
                    <h3 className="font-semibold pb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 pb-2">
                      Author: {item.author}
                    </p>

                    <p className="w-60 text-sm text-gray-400 pb-8">
                      {item.description}
                    </p>

                    <div className="flex flex-col gap-3 text-sm text-gray-500">
                      <span className="w-fit flex items-center gap-2 border rounded-xl px-2 py-2">
                        <TbTruckDelivery size={20} /> Free Shipping
                      </span>
                      <span className="pt-4 font-medium">{item.asin}</span>
                    </div>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="w-1/6 flex justify-center items-center gap-3">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-600">
                    <Minus size={12} />
                  </button>

                  <span className="font-medium">{item.qty}</span>

                  <button className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-600">
                    <Plus size={12} />
                  </button>
                </div>

                {/* PRICE */}
                <div className="w-1/6 text-center font-semibold">
                  ${item.price}
                </div>

                {/* TOTAL */}
                <div className="w-1/6 text-center font-semibold">
                  ${item.price * item.qty}
                </div>
                <MdDeleteOutline className="text-pink-600" size={25} />
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 mb-30">
          <div className="bg-gray-200 px-16 py-16 flex justify-between gap-1">
            {/* ===== LEFT ===== */}
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>

              <p className="text-gray-600 mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo.
              </p>

              <p className="text-gray-600 mb-6">Have a discount code?</p>

              <div className="flex gap-4 mb-16">
                <input
                  placeholder="Enter Promo Code"
                  className="flex- pr-10 pl-6 py-3 rounded-lg border outline-none"
                />
                <button className="bg-gray-700 text-white px-6 rounded-lg">
                  Apply
                </button>
              </div>
            </div>

            {/* ===== RIGHT ===== */}
            <div className="w-1/3">
              {summaryRows.map((row, index) => (
                <div key={index} className="flex justify-between mb-4 ">
                  <span className="text-gray-600">{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
              ))}

              {/* TOTAL */}
              <div className="border-t pt-4 flex justify-between mb-10">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-xl text-pink-600">$124</span>
              </div>

              <button className="w-full bg-pink-600 text-white py-2 rounded-lg mb-4">
                Check out
              </button>

              <button className="w-full border border-pink-600 text-pink-600 py-2 rounded-lg">
                Keep Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
