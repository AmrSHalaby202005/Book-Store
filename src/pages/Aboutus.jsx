import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import {
  IoChatboxEllipsesOutline,
  IoLocationOutline,
  IoPerson,
} from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

const Aboutus = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full max-h-180 overflow-hidden pb-16">
        <img
          className="w-full h-full object-cover"
          src="/Home.png"
          alt="Home"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">About Bookshop</h1>
          <p className="text-lg max-w-[65%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* المهمات */}
      <div className="py-20">
        <h2 className="text-center text-3xl font-bold">Our Mission</h2>
        <div className="flex justify-center items-center gap-12 pt-10 px-30 w-full">
          <div className="border border-black/20 p-8 rounded-2xl bg-white">
            <h2 className="text-xl font-semibold pb-4">Quality Selection</h2>
            <p className="text-black/50 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.Quality SelectionLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
              justo varius,
            </p>
            <span className="text-sm text-pink-600">View More</span>
          </div>
          <div className="border border-black/20 p-8 rounded-2xl bg-white">
            <h2 className="text-xl font-semibold pb-4">Exceptional Service</h2>
            <p className="text-black/50 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.Quality SelectionLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
              justo varius,
            </p>
            <span className="text-sm text-pink-600">View More</span>
          </div>
          <div className="border border-black/20 p-8 rounded-2xl bg-white">
            <h2 className="text-xl font-semibold pb-4">Set Up Stores</h2>
            <p className="text-black/50 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.Quality SelectionLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
              justo varius,
            </p>
            <span className="text-sm text-pink-600">Soon</span>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* التواصل */}
      <div className="py-20 bg-[#3B2F4A]/80 flex items-center justify-center">
        <div className="flex gap-40 text-white pl-30">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-4">Have a Questions?</h2>
            <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/2 bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-1/2 bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-500"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-pink-500"
              />
              <div className="flex justify-center">
                <button className="bg-pink-600 px-8 py-2 rounded-md font-semibold text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex flex-col space-y-6 pl-30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <MdOutlinePhoneInTalk className="text-pink-600" size={20} />
              </div>
              <span>01123456789</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <IoChatboxEllipsesOutline className="text-pink-600" size={20} />
              </div>
              <span>Example@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <IoLocationOutline className="text-pink-600" size={20} />
              </div>
              <span>
                adipiscing elit. Mauris et ultricies <br /> est. Aliquam in
                justo varius
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      {/* الكروت */}
      <div className="container  mx-auto flex justify-between items-center px-4 py-30 gap-15">
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
    </div>
  );
};

export default Aboutus;
