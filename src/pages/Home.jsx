import React from "react";
import { CiHeart, CiMicrophoneOn, CiShoppingCart } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="relateve w-full bg-[#F5F5F5]">
      <div className="relative w-full h-screen">
        <img src="/Home.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full hidden md:flex justify-center px-4"
        >
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-xl">
            <input
              type="text"
              placeholder="Search"
              className="flex-1   px-6 py-3 outline-none text-gray-700"
            />

            <button className="px-3 text-gray-400 hover:text-gray-600">
              <CiMicrophoneOn size={30} />
            </button>

            <button className="bg-[#D9176C] px-6 py-3 text-white">
              <IoSearchOutline size={30} />
            </button>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {/* الكروت */}
      <div
        className="container mx-auto grid gap-15 px-4 py-20
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <LiaShippingFastSolid className="text-3xl text-black/50 pb-2" />
          <h2 className="text-lg pb-2 font-bold">Fast & Reliable Shipping</h2>
          <p className=" text-black/50 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div>
          <RiSecurePaymentLine className="text-3xl text-black/50 pb-2" />
          <h2 className="text-lg pb-2 font-bold">Secure Payment</h2>
          <p className=" text-black/50 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div>
          <GiReturnArrow className="text-3xl text-black/50 pb-2" />
          <h2 className="text-lg pb-2 font-bold">Easy Returns</h2>
          <p className=" text-black/50 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div>
          <RiCustomerService2Line className="text-3xl text-black/50 pb-2" />
          <h2 className="text-lg pb-2 font-bold">24/7 Customer Support</h2>
          <p className=" text-black/50 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* أفضل الكتب */}
      <div className="pt-28 pb-20 bg-[#3B2F4A]">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">Best Seller</h2>
          <p className="w-[35%] mx-auto text-center text-white/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="py-20">
          <img src="/Frame32.png" alt="" />
        </div>
        <div className="text-center">
          <button
            className="bg-[#D9176C] px-10 py-2 rounded-lg text-white"
            type="submit"
          >
            Shop now
          </button>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* المقترح لك */}
      <div className="container mx-auto py-30 px-10">
        <h2 className="text-2xl font-semibold pb-8">Recomended For You</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white shadow-lg p-6 flex gap-8">
            <div className="w-45">
              <img
                src="/93e9747c9160601f7f3a7a57420103fe4025b18a.png"
                alt="Rich Dad Poor Dad"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">
                Rich Dad And Poor Dad
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Author: Robert T. Kiyosanki
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <span className="text-sm text-gray-400">(180 Review)</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Rate: <span className="font-medium">4.2</span>
                  </p>
                </div>
                <span className="text-2xl font-semibold">$30.00</span>
              </div>
              <div className="flex w-full gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                  Add To Cart
                  <CiShoppingCart size={30} />
                </button>
                <button className="w-12 flex items-center justify-center border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition">
                  <CiHeart size={30} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-lg p-6 flex gap-8">
            <div className="w-45">
              <img
                src="/28aba63bdc086aa49f1169be9ff5208128b5a8af.jpg"
                alt="Rich Dad Poor Dad"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">
                The Design Of Books
              </h2>
              <p className="text-sm text-gray-500 mb-2">Author: Debbie Berne</p>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                et ultricies est. Aliquam in justo varius, sagittis neque ut,
                malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
              </p>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <span className="text-sm text-gray-400">(210 Review)</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Rate: <span className="font-medium">4.2</span>
                  </p>
                </div>
                <span className="text-2xl font-semibold">$40.00</span>
              </div>
              <div className="flex w-full gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                  Add To Cart
                  <CiShoppingCart size={30} />
                </button>
                <button className="w-12 flex items-center justify-center border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition">
                  <CiHeart size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      {/* العرض الحصري */}
      <div className="container  mx-auto py-20 px-10 border-t border-gray-200">
        <div className="flex justify-between items-center mb-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold pb-4">Flash Sale</h2>
            <p className="text-black/50 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="relative w-24 h-24 rounded-full bg-white shadow-xl border-4 border-[#D9176C] flex items-center justify-center">
            <span className="font-semibold">30:00:00</span>
            <span className="absolute -bottom-2.5 w-4 h-4 bg-[#D9176C] rounded-full"></span>
          </div>
        </div>

        <div className="relative flex justify-center items-center gap-8 mx-auto flex-col md:flex-row">
          <button className="flex items-center justify-center text-black/30">
            <IoIosArrowDropleft size={50} />
          </button>

          <div className="bg-[#3B2F4A] text-white rounded-xl p-5 flex gap-4 w-106">
            <div className="w-40">
              <img
                src="/93e9747c9160601f7f3a7a57420103fe4025b18a.png"
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg">Rich Dad And Poor Dad</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Author: Robert T. Kiyosaki
                </p>

                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <span className="text-gray-300 ml-2">(180 Review)</span>
                </div>
                <p className="text-sm text-gray-400 pb-4">
                  Rate: <span className="font-medium text-white">4.2</span>
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-400 text-sm">$45.00</span>
                  <span className="text-xl font-simibold">$30.00</span>
                </div>

                <div className="h-2 bg-gray-600 rounded-full mb-1">
                  <div className="h-full w-[70%] bg-orange-400 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">4 books left</span>
              </div>

              <div className="flex justify-end mt-4">
                <button className="bg-pink-600 p-3 rounded-lg">
                  <LuShoppingCart size={22} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#3B2F4A] text-white rounded-xl p-5 flex gap-4 w-106">
            <div className="w-40">
              <img
                src="/93e9747c9160601f7f3a7a57420103fe4025b18a.png"
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg">Rich Dad And Poor Dad</h3>
                <p className="text-sm text-gray-300 mb-2">
                  Author: Robert T. Kiyosaki
                </p>

                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <span className="text-gray-300 ml-2">(180 Review)</span>
                </div>
                <p className="text-sm text-gray-400 pb-4">
                  Rate: <span className="font-medium text-white">4.2</span>
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-400 text-sm">$45.00</span>
                  <span className="text-xl font-simibold">$30.00</span>
                </div>

                <div className="h-2 bg-gray-600 rounded-full mb-1">
                  <div className="h-full w-[70%] bg-orange-400 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">4 books left</span>
              </div>

              <div className="flex justify-end mt-4">
                <button className="bg-pink-600 p-3 rounded-lg">
                  <LuShoppingCart size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="flex items-center justify-center text-black/30">
            <IoIosArrowDropright size={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
