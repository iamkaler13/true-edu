import React, { useState } from "react";
import { Link } from "react-router-dom";
const SellBook = () => {
  return (
    <div className="bg-white py-0 pb-6 sm:pb-0 sm:py-5 pt-0">
      <div className="pt-2 sm:pt-8 pb-4 sm:pb-16 cursor-pointer mx-auto max-w-[90%]">
        <div
          className={
            "js-show-on-scroll bg-type-section block sm:flex sm:flex-wrap md:flex md:flex-row lg:flex lg:flex-row justify-between shadow-2xl rounded-lg py-8 px-8 sm:py-20 md:py-20 lg:py-20  sm:px-12 lg:px-12 md:px-12   items-center relative"
          }
        >
          <div className=" sm:w-[100%] md:w-[50%] lg:w-[50%]">
            {" "}
            <h2 className="mb-5 md:mb-0 font-bold  text-2xl  md:text-h2 lg:text-h2 sm:text-h2 sm:leading-none text-heading  ">
            TrueEdu - Your  Study Partner
            </h2>
          </div>
          <div className="block sm:grid md:grid lg:grid grid-cols-2 gap-4">
            <button
              type={"submit"}
              className={
                "py-2 px-8 focus:ring-yellow-300 text-white w-full  mt-2 mb-4 sm:mb-0 sm:m-0 md:m-0 lg:m-0 text-lg font-semibold bg-[#fe9327] hover:bg-black dark:focus:ring-yellow-900 rounded-lg"
              }
            >
              <div className="trytempo">
                <Link to="/checkout">learn more&#8594; </Link>
              </div>
            </button>
            <button
              className={
                "py-2 px-8 sm:px-20  lg:px-8 sm:py-8 md:py-8 lg:py-8 w-full hover:font-semibold first-letter:w-full focus:ring-yellow-300  hover:text-primary bg-primary hover:bg-white text-lg font-semibold text-white  dark:focus:ring-yellow-900 rounded-lg"
              }
            >
              Our Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellBook;
