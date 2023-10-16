import React, { useEffect } from "react";
import { useState } from "react";
import { ProductList } from "../features/Booklist/Booklist";
import product from "../data/books.json"
const Product = () => {


  const [booksData, setBooksData] = useState(product);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setQuery(searchText)
    const filteredData = product.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setBooksData(filteredData);
  };

 

  return (
    <div className="bg-white  mx-auto max-w-7xl py-0 sm:py-0 sm:px-0">
      <div className=" mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%]  py-10 sm:py-4">
        <div className="text-center mb-5">
          <p className=" font-bold uppercase  sm:text-[40px] text-[20px] text-center mb-2 sm:mb-0 sm:!leading-[3.75rem] sm:w-[900px] m-auto text-[#FF5721]">
            our books
          </p>

          <h2 className="font-bold text-xl  sm:text-[20px] text-center  sm:w-[896px] sm:!leading-[2.75rem] sm:mt-2 m-auto">
            Committed to imparting knowledge and inspiration through our
            literary works.{" "}
          </h2>
        </div>
      </div>
      <div className="filter-cards text-center sm:mt-[0px] pb-5 px-4 mt-[0px]">
        <div className="flex justify-end items-end sm:flex-row flex-col">
          <div className="text-right h-[40px]  flex justify-end  w-[100%] sm:w-[363px]">
            <div className="relative w-[100%] sm:w-[342px] ">
              <div
                className="absolute w-[100%] sm:w-[342px] inset-y-1
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
                onChange={(e)=>handleSearch(e)}
                id="search"
                value={query}
                className="flex h-[40px] sm:h-[40px]  bg-white border-1 rounded-[20px] justify-between items-center py-[8px] px[24px] w-full p-2 focus:outline-none focus:border-sky focus:ring-2 pl-10 text-sm text-gray-900 border border-border "
                placeholder="Search"
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <ProductList products={booksData}  />
    </div>
  );
};

export default Product;
