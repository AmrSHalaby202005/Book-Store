import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMicrophoneOn } from "react-icons/ci";
import { FiSliders } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { RiArrowDropRightLine, RiStarFill, RiStarLine } from "react-icons/ri";
import { useBooksStore } from "../store";
import { useState } from "react";

const Books = () => {
  const { selectedCategories, toggleCategory } = useBooksStore();
  const { selectedPublishers, togglePublisher } = useBooksStore();
  const { selectedYear, toggleYear } = useBooksStore();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPublishersOpen, setIsPublishersOpen] = useState(false);
  const [isYearsOpen, setIsYearsOpen] = useState(false);
  const { search, setSearch } = useBooksStore();
  const { page, setPage } = useBooksStore();

  const books = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      category: "Business",
    },
    {
      id: 2,
      title: "Harry Potter",
      category: "Fantasy",
    },
    {
      id: 3,
      title: "Art of War",
      category: "History",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);

    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full mb-8 max-h-30 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="min-h-screen p-6">
        <div className="mx-auto flex gap-6">
          {/* Sidebar */}
          <div className="col-span-3 rounded-2xl p-5 min-w-[25%]">
            <div className="flex items-center gap-2 mb-6">
              <FiSliders size={30} />
              <h2 className="font-semibold text-3xl">Filter</h2>
            </div>

            <div className="bg-white p-2 mb-6 rounded-xl">
              <h3
                className="text-lg font-medium mb-3 flex justify-between items-center text-pink-600 cursor-pointer"
                onClick={() => setIsCategoriesOpen((prev) => !prev)}
              >
                Categories
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isCategoriesOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </h3>

              {isCategoriesOpen && (
                <>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "AllCategories (1450)",
                      "Business (140)",
                      "Kids (309)",
                      "Art (102)",
                      "History (204)",
                      "Romance (89)",
                      "Fantasy (47)",
                      "SelfHelp (163)",
                      "Cooking (211)",
                      "Sports (92)",
                    ].map((cat) => {
                      const [Categories, count] = cat.split(" ");
                      return (
                        <li
                          key={cat}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(cat)}
                              onChange={() => toggleCategories(cat)}
                              className="accent-pink-500"
                            />
                            <span>{Categories}</span>
                          </div>

                          <span className="text-gray-400">{count}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <button className="text-pink-600 text-sm w-full items-center py-4">
                    Load More
                  </button>
                </>
              )}
            </div>
            <div className="bg-white p-2 mb-6 rounded-xl">
              <h3
                className="text-lg font-medium mb-3 flex justify-between items-center text-pink-600 cursor-pointer"
                onClick={() => setIsPublishersOpen((prev) => !prev)}
              >
                Publisher
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isPublishersOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </h3>
              {isPublishersOpen && (
                <>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "PauloCoelo (210)",
                      "JaneAusten (140)",
                      "CharlesDickens (309)",
                      "MarkTwain (102)",
                      "VirginiaWoolf  (204)",
                      "LeoTolstoy (89)",
                      "FyodorDostoevsky (47)",
                      "HarukiMurakami (163)",
                      "GabrielMárquez (211)",
                      "Chinua Achebe (92)",
                    ].map((cat) => {
                      const [Publisher, count] = cat.split(" ");
                      return (
                        <li
                          key={cat}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedPublishers.includes(cat)}
                              onChange={() => togglePublisher(cat)}
                              className="accent-pink-500"
                            />
                            <span>{Publisher}</span>
                          </div>

                          <span className="text-gray-400">{count}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <button className="text-pink-600 text-sm w-full items-center py-4">
                    Load More
                  </button>
                </>
              )}
            </div>
            <div className="bg-white p-2 rounded-xl">
              <h3
                className="text-lg font-medium mb-3 flex justify-between items-center text-pink-600 cursor-pointer"
                onClick={() => setIsYearsOpen((prev) => !prev)}
              >
                Year
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    isYearsOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </h3>
              {isYearsOpen && (
                <>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      "2024 (210)",
                      "2023 (140)",
                      "2022 (309)",
                      "2021 (102)",
                      "2020 (204)",
                      "2019 (89)",
                      "2018 (47)",
                      "2017 (163)",
                      "2016 (211)",
                      "2015 (92)",
                    ].map((cat) => {
                      const [year, count] = cat.split(" ");
                      return (
                        <li
                          key={cat}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedYear.includes(cat)}
                              onChange={() => toggleYear(cat)}
                              className="accent-pink-500"
                            />
                            <span>{year}</span>
                          </div>

                          <span className="text-gray-400">{count}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <button className="text-pink-600 text-sm w-full items-center py-4">
                    Load More
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="w-px h-100vh bg-gray-300"></div>
          {/* Main Content */}
          <div className="col-span-9">
            {/* Search & Sort */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center bg-white rounded-full overflow-hidden w-[70%] border border-black/20">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-8 py-2 outline-none text-gray-700"
                />

                <button className="px-3 text-gray-400 hover:text-gray-600">
                  <CiMicrophoneOn size={30} />
                </button>
                <div className="h-14 w-px bg-black/20"></div>
                <button className="px-4 py-3 text-[#D9176C]">
                  <IoSearchOutline size={30} />
                </button>
              </div>
              <button className="flex justify-between items-center w-50 text-black/40 border border-black/20 rounded-xl px-4 mr-10 bg-white">
                Sort by <RiArrowDropRightLine size={40} />
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {[
                "Business",
                "Self Help",
                "History",
                "Romance",
                "Fantasy",
                "Art",
                "Kids",
                "Music",
                "Cooking",
              ].map((tag, i) => (
                <span
                  key={tag}
                  className={`px-6 py-2 rounded-xl text-sm cursor-pointer ${
                    i === 0
                      ? "bg-pink-500 text-white"
                      : "bg-white border border-black/20"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Card */}
            {filteredBooks.map((book) => (
              <div key={book.id}>
                <div key={books} className="p-5 mb-6 flex gap-6 w-[90%]">
                  <img
                    src="/93e9747c9160601f7f3a7a57420103fe4025b18a.png"
                    alt="book"
                    className="w-40 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl">
                      Rich Dad And Poor Dad
                    </h3>
                    <p className="text-black/50 my-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris et ultricies est. Aliquam in justo varius, sagittis
                      neque ut, malesuada leo. Aliquam in justo varius, sagittis
                      neque ut, malesuada leo.
                    </p>

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4].map((s) => (
                              <RiStarFill
                                size={18}
                                key={s}
                                className="text-sm"
                              />
                            ))}
                            <RiStarLine size={18} />
                          </div>
                          <span className="text-md text-gray-400">
                            (210 Review)
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Rate:
                          <span className="font-medium text-md text-black">
                            4.2
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8">
                      <div className=" flex flex-col text-sm text-gray-500">
                        Author:
                        <div className="text-black text-md font-medium">
                          Robert T. Kiyosaki
                        </div>
                      </div>
                      <div className=" flex flex-col text-sm text-gray-500">
                        Year:
                        <div className="text-black text-md font-medium">
                          1997
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="bg-white text-sm border border-yellow-400 text-yellow-600 rounded-lg px-3 py-2 mr-5 mb-32">
                      25% Discount code: N212
                    </span>
                    <span className="text-2xl font-semibold mb-4">$40.00</span>
                    <div className="flex items-center gap-3">
                      <button className="bg-pink-500 text-white px-6 py-2.5 rounded-lg flex items-center gap-2">
                        Add To Cart
                        <AiOutlineShoppingCart size={22} />
                      </button>
                      <button className="border rounded-lg p-2 text-pink-500">
                        <LuHeart size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-40 pb-2">
              {/* Previous */}
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="text-pink-500"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {[1, 2, 3, "..."].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-lg ${
                    page === p
                      ? "bg-pink-500 text-white"
                      : "bg-white text-pink-500 border"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(page + 1)}
                className="text-pink-500"
              >
                Next
              </button>
            </div>
            <p className="text-center text-sm text-black/50 mb-20 ">
              1-20 of 5000+ Book available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
