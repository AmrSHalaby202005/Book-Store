import { Minus, Plus } from "lucide-react";
import React from "react";

const cartItems = [
  {
    id: 1,
    title: "Rich Dad And Poor Dad",
    author: " Robert T. Kiyosanki",
    price: 40,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 2,
    title: "Rich Dad And Poor Dad",
    author: " Robert T. Kiyosanki",
    price: 40,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
];

const shippingFields = [
  { label: "Name", placeholder: "John Smith" },
  { label: "Phone", placeholder: "123456789" },
  { label: "Email", placeholder: "johnsmith@gmail.com" },
  { label: "City", placeholder: "Maadi" },
  { label: "State", placeholder: "Cairo" },
  { label: "Zip", placeholder: "11311" },
];

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="container mx-auto px-4 pt-10 pb-30">
        {/* MAIN CONTAINER */}
        <div className="flex gap-10">
          {/* ================= LEFT SIDE ================= */}
          <div className="w-[59%] flex flex-col gap-6">
            {/* Shipping Info */}
            <div className="bg-white p-10 rounded-xl">
              <h2 className="font-semibold text-lg mb-8">
                Shipping information
              </h2>

              <div className="flex flex-wrap gap-6">
                {shippingFields.map((field, index) => (
                  <div key={index} className="w-[48%]">
                    <label className="text-sm text-gray-600">
                      {field.label}
                    </label>
                    <input
                      placeholder={field.placeholder}
                      className="w-full mt-1 px-4 py-2 border rounded-lg outline-none"
                    />
                  </div>
                ))}

                <div className="w-full">
                  <label className="text-sm text-gray-600">Address</label>
                  <input
                    placeholder="Maadi, Cairo, Egypt."
                    className="w-full mt-1 px-4 py-2 border rounded-lg outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-8 rounded-xl">
              <h2 className="font-semibold mb-8">Payment Method</h2>

              <div className="flex gap-6">
                {["Online payment", "Cash on delivery", "POS on delivery"].map(
                  (method, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer"
                    >
                      <input type="radio" name="payment" />
                      <span>{method}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Note */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="font-semibold mb-4">Note</h2>
              <textarea
                placeholder="Add note"
                className="w-full h-40 border rounded-lg p-3 outline-none resize-none"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-[41%] bg-white p-10 rounded-xl">
            <h2 className="font-semibold text-lg mb-8">Order summary</h2>

            {/* Cart Items */}
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      className="w-25 object-cover rounded"
                    />

                    <div>
                      <h3 className="font-semibold pb-1">{item.title}</h3>
                      <p className="flex items-center text-sm pb-6">
                        <span className="text-gray-500 pr-1">Author:</span>
                        {item.author}
                      </p>
                      <span className="text-sm border px-2 py-1 rounded">
                        Free Shipping
                      </span>
                      <p className="font-bold text-2xl mt-6">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-30">
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-600">
                      <Minus size={12} />
                    </button>
                    <span>1</span>
                    <button className="w-6 h-6 rounded-full border flex items-center justify-center text-pink-600">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="mt-25">
              <p className="mb-4 text-gray-400">Have a discount code?</p>
              <div className="flex gap-3">
                <input
                  placeholder="Enter Promo Code"
                  className="flex-1 px-3 py-3 border rounded-lg outline-none"
                />
                <button className="bg-gray-700 text-white px-4 rounded-lg">
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full h-px bg-black/50 mt-8"></div>

            {/* Prices */}
            <div className="mt-6 text-sm flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-lg">$80</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span className="text-lg">$4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-lg text-gray-400">$0</span>
              </div>
              <div className="w-full h-px bg-black/50 my-2"></div>
              <div className="flex justify-between font-semibold text-pink-600">
                <span className="text-gray-400 text-xl">Total (USD)</span>
                <span className="text-pink-600 text-xl">$84</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg">
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
