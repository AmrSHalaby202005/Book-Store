import React from "react";
import { Heart, Minus, Plus, Share2 } from "lucide-react";
import { FaCheckCircle, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
  details: [
    { label: "Book Title", value: " Rich Dad And Poor Dad" },
    { label: "Author", value: " Robert T. Kiyosaki" },
    { label: "Publication Date", value: " 1997" },
    { label: "ASIN", value: " B09TWSRMCB" },
    { label: "Language", value: " English" },
    { label: "Publisher", value: " Printer" },
    { label: "Pages", value: " 336" },
    { label: "Book Format", value: " Hard Cover" },
    { label: "Best Seller Rank", value: " #3" },
  ],
};

const Productdetails = () => {
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
            <button className="pb-3 border-b-3 border-pink-600 font-medium">
              Product Details
            </button>
            <button className="font-medium pb-3 text-gray-500">
              Customer Reviews
            </button>
            <button className="font-medium pb-3 text-gray-500">
              Recommended For You
            </button>
          </div>

          <div className="flex flex-col gap-2 mb-30">
            {product.details.map((item, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium text-lg">{item.label}:</span>
                <span className="font-normal text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
