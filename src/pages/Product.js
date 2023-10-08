import React, { useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../features/Productlist/ProductList";
const Product = () => {
  const data = [
    "ALL",
    "Popular",
    "Productivity",
    "Sales",
    "Communications",
    "Billing",
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const [show, setSHow] = useState(false);
  const product = [
    {
      id: 1,
      name: "Book 1",
      href: "#",
      imageSrc: "/product.jpg",
      imageAlt: "Front of men's Basic Tee in Author.",
      price: "$35",
      color: "Author",
    },
    {
      id: 1,
      name: "Book 2",
      href: "#",
      imageSrc: "/product.jpg",
      imageAlt: "Front of men's Basic Tee in Author.",
      price: "$35",
      color: "Author",
    },
    {
      id: 1,
      name: "Book 3",
      href: "#",
      imageSrc: "/product.jpg",
      imageAlt: "Front of men's Basic Tee in Author.",
      price: "$35",
      color: "Author",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: "/product.jpg",
      imageAlt: "Front of men's Basic Tee in Author.",
      price: "$35",
      color: "Author",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: "/product.jpg",
      imageAlt: "Front of men's Basic Tee in Author.",
      price: "$35",
      color: "Author",
    },
    // More products...
  ];
  const [integrationData, setIntegrationData] = useState(product);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
    const filteredData = product.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setIntegrationData(filteredData);
  };

  const handleSelect = (element) => {
    if (element == "ALL") {
      return product;
    }
    setIntegrationData(product.filter((ele) => ele.name == element));
  };
  const [showCat, setShowCat] = useState(data[0]);

  return (
    <div className="bg-white  mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
      <div className=" mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%]  py-10">
        <div className="text-center mb-5">
          <p className=" font-bold uppercase  sm:text-[40px] text-[20px] text-center mb-2 sm:mb-0 sm:!leading-[3.75rem] sm:w-[900px] m-auto text-[#FF5721]">
            our books
          </p>

          <h2 className="font-bold text-xl  sm:text-[30px] text-center  sm:w-[896px] sm:!leading-[3.75rem] sm:mt-4 m-auto">
            Committed to imparting knowledge and inspiration through our
            literary works.{" "}
          </h2>
        </div>
      </div>
      <div className="filter-cards text-center sm:mt-[24px] pb-5 px-4 mt-[0px]">
        <div className="flex justify-between items-start sm:flex-row flex-col">
          <div className="text-right h-[60px]  flex justify-end  w-[100%] sm:w-[220px]">
            <div className="relative w-[100%] sm:w-[220px] ">
              <div
                className="absolute w-[100%] sm:w-[220px] inset-y-1
               bottom-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                onChange={handleSearch}
                id="search"
                value={searchTerm}
                className="flex h-[60px]  bg-white border-1 rounded-[20px] justify-between items-center py-[8px] px[24px] w-full p-2 focus:outline-none focus:border-sky focus:ring-2 pl-10 text-sm text-gray-900 border border-border "
                placeholder="Search"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Product;
