import React, { useEffect } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      imageSrc:
        "/product.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Book 2",
      href: "#",
      imageSrc:
      "/product.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Book 3",
      href: "#",
      imageSrc:
      "/product.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
      "/product.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "/product.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
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

          <h2 className="font-bold text-xl  sm:text-h2 text-center  sm:w-[896px] sm:!leading-[3.75rem] sm:mt-4 m-auto">
            Dedicated to sharing knowledge and inspiration with the world
          </h2>
        </div>
      </div>
      <div className="filter-cards text-center sm:mt-[24px] pb-5 px-4 mt-[0px]">
        <div className="flex justify-between items-start sm:flex-row flex-col">
          <div className="w-full">
            <div
              onClick={() => setSHow(!show)}
              className="mb-4  !w-[100%] max-w-[420px] cursor-pointer bg-white border-1 justify-between items-center  flex py-[6px] px-[24px] rounded-[20px] shadow-xl"
            >
              <div>
                <span className="text-[#9c9db4]">choose category</span>
                <p className="text-heading text-left">{showCat} </p>
              </div>
              <ChevronDownIcon class="h-6 w-6 text-[#ff611e]" />
            </div>
            {show ? (
              <div className="bg-white p-5 rounded-[20px] shadow-md !w-[100%] max-w-[420px]">
                {data.map((ele) => (
                  <div
                    className="rounded  w-[225px] text-start pb-3 cursor-pointer"
                    onClick={() => {
                      setSHow(false);
                      setShowCat(ele);
                      handleSelect(ele);
                    }}
                  >
                    <p>{ele}</p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

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
      <div className="filter-cards text-center sm:mt-[24px] pb-5 px-4 w-[90%] mx-[auto]">
        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-[20px] sm:gap-[40px] ">
          {integrationData.map((ele) => (
          <div key={ele.id} className="group relative shadow-xl hover:shadow-3xl cursor-pointer rounded-[20px]">
          <div className=" lg:h-80">
            <img
              src={ele.imageSrc}
              // alt={product.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
            <div>
              <h3 className="text-[20px] px-8 text-left  text-gray-700">
             
                  {ele.name}
              </h3>
         
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
