import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../data/product.json";
import { useState } from "react";
const SingleProduct = () => {
  console.log(Product);
  const { slug } = useParams();
  const data = Product.find((ele) => ele.slug == slug);
  console.log("data", data);
  const [show, setSHow] = useState(false);
  return (
    <div className=" bg-white sm:py-10 py-0 px-5 sm:px-0 sm:mt-[50px]  ">
      <div className="block mt-10 sm:mt-[-70px] sm:flex md:flex lg:flex justify-evenly sm:w-[820px] sm:m-auto sm:pt-[80px] items-center gap-14 sm:gap-[9.5rem]  ">
        <div className=" grid grid-cols-1 sm:grid-cols-3 ">
          <div>
            <div className="relative w-auto  h-auto sm:w-[239px] ]">
              <img
                src={data.img}
                className="w-full mx-auto shadow-lg  bg-contain !static sm:absolute"
                fill={true}
              />
            </div>
          </div>
          <div className="sm:pt-[40px]">
            <h2 className="sm:w-[473px] font-bold text-[#252C47] sm:mt-0 mt-1 text-[26px] sm:text-[30px] sm:mb-2  sm:leading-none ">
              {data.name}
            </h2>
            <p className="mt-3 mb-4 text-[#474F70] text-[20px] sm:text-[20px]">
              <span className="text-black">Edition:</span> {data.edition}{" "}
            </p>{" "}
            <p className="mt-3 mb-4 text-[#474F70] text-[20px] sm:text-[20px]">
              <span className="text-black uppercase"> isbn:</span> {data.isbn}{" "}
            </p>{" "}
         
            <p className="mt-3 mb-4 text-[#474F70] text-[20px] sm:text-[20px]">
              <span className="text-black"> by:</span> {data.Author}{" "}
            </p>{" "}
            <p className="mt-3 mb-4 text-[#474F70] text-[20px] sm:text-[20px]">
              <span className="text-black"> mrp:</span> &#8377;{data.price}{" "}
            </p>{" "}
          </div>
          <div className="block sm:w-[473px] sm:pt-[70px]">
            <div className="block sm:grid md:grid lg:grid grid-cols-1 mx-auto sm:w-[60%] gap-4 sm:mt-8 mt-3 sm:mb-8">
              <button
                className={
                  "py-2 px-8 mb-[12px] sm:mb-0 w-full first-letter:w-full focus:ring-yellow-300 text-lg font-semibold text-white bg-[#4d6998] hover:bg-[black] dark:focus:ring-yellow-900 rounded-lg"
                }
              >
                <div className="trytempo">
                  <Link to="/">E-Book</Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[5rem] sm:gap-[9rem] sm:mt-[45px]">
        <div
          className={`text-[15px] sm:text-[25px] font-semibold ${
            show == false ? " border-b-[2px] " : ""
          } border-[#4d6998] cursor-pointer`}
          onClick={() => setSHow(false)}
        >
          Table of content
        </div>

        <div
          className={`text-[15px] sm:text-[25px] font-semibold ${
            show == true ? " border-b-[2px] " : ""
          } border-[#4d6998] cursor-pointer`}
          onClick={() => setSHow(true)}
        >
          About the book
        </div>
      </div>
      {show ? (
        <>
          <p className="  text-left text-[15px]  sm:text-[18px] my-3 sm:ml-[] sm:mt-3 text-heading">
            {data?.AbooutTheBook?.heading}
          </p>
          <div className=" text-left   sm:ml-[1rem] sm:mt-8   mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
            {data?.AbooutTheBook?.content.map((ele) => (
              <>
                <p className="text-[15px]  sm:text-[18px]  font-semibold my-3">{ele?.name}</p>
                <p className="text-[15px]  sm:text-[18px] my-3">{ele?.paragraph}</p>
              </>
            ))}
          </div>
          <p className=" text-[15px]  sm:text-[18px] text-left  :ml-[rem] sm:mt-[0px]  mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
            {data?.AbooutTheBook?.lastheading}
          </p>
          <div className="sm:p-4">
            {data?.practicals.length ? (
              <p className="text-[20px] font-semibold my-3">Practical</p>
            ) : (
              ""
            )}
            {data?.practicals?.map((ele, key) => (
              <>
                <p className="text-[15px]  sm:text-[18px]  my-4 sm:my-3">
                  {key + 1}. {ele}
                </p>
              </>
            ))}
          </div>
        </>
      ) : (
        < div className="sm:mt-3">
          {data.tableOfContents.map((ele) => (
            <>
              <p className="text-[15px]  sm:text-[18px] font-semibold my-3">{ele?.name}</p>
              <p className="text-[15px]  sm:text-[18px] my-3">{ele?.content}</p>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
