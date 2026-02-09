import { Heart, Minus, Plus } from "lucide-react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FaCheckCircle, FaFacebookF, FaRegStar, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

const product = {
  title: "Rich Dad And Poor Dad",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
  author: "Robert T. Kiyosaki",
  Language: "English",
  Year: 1997,
  Book: "1 Of 1",
  Pages: 336,
  price: "$40.00",
  oldPrice: "$40.00",
  rating: "Rate: 4.2",
  reviews: "(210 Review)",
  stock: true,
  images: [
    "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
    "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
    "/93e9747c9160601f7f3a7a57420103fe4025b18a.png",
  ],
};

const Recommended = () => {
  return (
    <div>
      <div className="relative w-full mb-20 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className=" px-20">
        <div className="flex gap-8">
          {/* Images */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-75">
              <img src="/93e9747c9160601f7f3a7a57420103fe4025b18a.png" alt="" />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-18 border rounded-lg object-cover cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold pb-4">{product.title}</h1>
              <div className="flex gap-2">
                <FaFacebookF size={20} />
                <GrInstagram size={20} />
                <FaXTwitter size={20} />
                <ImWhatsapp size={20} />
                <BsShare size={30} />
              </div>
            </div>

            <p className="text-gray-500 max-w-2xl pb-6">
              {product.description}
            </p>

            <div className="flex gap-6 text-sm pb-6">
              <div>
                <p className="text-gray-400">Author</p>
                <p className="font-medium">{product.author}</p>
              </div>
              <div>
                <p className="text-gray-400">Publication Year</p>
                <p className="font-medium">{product.Year}</p>
              </div>
              <div>
                <p className="text-gray-400">Book</p>
                <p className="font-medium">{product.Book}</p>
              </div>
              <div>
                <p className="text-gray-400">Pages</p>
                <p className="font-medium">{product.Pages}</p>
              </div>
              <div>
                <p className="text-gray-400">Language</p>
                <p className="font-medium">{product.Language}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-yellow-500 text-lg">★★★★★</div>
                <span className="text-sm text-gray-500">{product.reviews}</span>
              </div>
              <div className="pb-1 flex ">
                <span className="flex items-center gap-2 px-4 py-1 text-sm rounded-lg border bg-white text-green-600">
                  <FaCheckCircle size={18} className="text-green-600" />
                  In Stock
                </span>
                <span className=" flex items-center gap-2 ml-1 px-4 py-1 text-sm rounded-lg border bg-white text-gray-600">
                  <TbTruckDelivery size={20} />
                  Free Shipping Today
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 mt-1">{product.rating}</p>
              <span className="px-4 py-1 text-sm rounded-lg border bg-white text-orange-600">
                Discount code: Ne212
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center gap-4 pt-16">
              {/* Price */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-3xl font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center px-4 py-2 gap-4">
                  <Minus
                    size={15}
                    className="w-6 h-6 border border-pink-600 text-pink-600 rounded-full"
                  />
                  <span className="text-2xl">1</span>
                  <Plus
                    size={15}
                    className="w-6 h-6 border border-pink-600 text-pink-600 rounded-full"
                  />
                </div>

                <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-medium">
                  Add To Cart
                  <AiOutlineShoppingCart size={25} />
                </button>

                <button className="w-12 h-12 border rounded-lg flex items-center justify-center text-pink-600">
                  <Heart size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-27 border-b mb-8 text-lg">
            <button className="font-medium pb-3 text-gray-500">
              Product Details
            </button>
            <button className="font-medium pb-3 text-gray-500">
              Customer Reviews
            </button>
            <button className="pb-3 border-b-3 border-pink-600 font-medium">
              Recommended For You
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center gap-8 pt-10 pb-30">
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
export default Recommended;
