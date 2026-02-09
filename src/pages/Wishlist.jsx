import { Minus, Plus } from "lucide-react";
import React from "react";
import { LuCircleArrowRight } from "react-icons/lu";
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
];

const Wishlist = () => {
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
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 flex items-center">
                {/* ITEM */}
                <div className="w-[36%] flex gap-4">
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
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-4 mb-30">
            <button className="border border-pink-600 bg-pink-200 text-pink-600 px-6 py-1 rounded-lg">
              Move to cart
            </button>

            <button className="bg-pink-600 text-white px-6 py-1 rounded-lg flex items-center gap-8">
              <div className="text-left text-xs">
                <p>2 Item</p>
                <p>$80</p>
              </div>
              <span className="flex items-center gap-4">
                Check out{" "}
                <LuCircleArrowRight
                  className="bg-white rounded-lg text-pink-500"
                  size={25}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
