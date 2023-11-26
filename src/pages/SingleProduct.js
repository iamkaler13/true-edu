import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../data/books.json";
import { useState, useEffect } from "react";
const SingleProduct = () => {
  const { slug } = useParams();
  const data = Product.find((ele) => ele.slug === slug);
  const [show, setSHow] = useState(false);
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className=" bg-white sm:py-10 py-0 px-5 sm:px-0 sm:mt-[50px]  ">
      <div className="block mt-10 sm:mt-[-70px] sm:flex md:flex lg:flex justify-evenly sm:w-[100%] sm:m-auto sm:pt-[80px] items-center gap-14 sm:gap-[9.5rem]  ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 ">
          <div>
            <div className="relative w-auto  h-auto sm:w-[369px] ]">
              <img
                src={data.img}
                alt="our-boks"
                className="w-full mx-auto shadow-lg  bg-contain !static sm:absolute"
                fill={true}
              />
            </div>
          </div>
          <div className="sm:pt-[0px]">
            <h2 className="sm:w-[473px] font-semibold sm:mt-0 mt-1 text-[24px] sm:text-[30px] sm:mb-2  sm:leading-none ">
              {data.name}
            </h2>
            <p className="mt-1 mb-2 sm:mt-5 sm:mb-0 text-[#474F70] text-[16px] sm:text-[20px]">
              <span className="text-black"> By:</span> {data.Author}{" "}
            </p>{" "}
            <p className="mt-1 mb-2 sm:mt-0 sm:mb-0 text-[#474F70] text-[16px] sm:text-[20px]">
              <span className="text-black">Edition:</span> {data.edition}{" "}
            </p>{" "}
      
            <p className="mt-1 mb-2 sm:mt-0 sm:mb-0 text-[#474F70] text-[16px] sm:text-[20px]">
              <span className="text-black uppercase"> isbn:</span> {data.isbn}{" "}
            </p>{" "}
         
      
            <p className="mt-1 mb-2 sm:mt-0 sm:mb-0 text-[#474F70] text-[16px] sm:text-[20px]">
              <span className="text-black"> Mrp:</span> &#8377;{data.price}{" "}
            </p>{" "}
            <div className="block sm:w-[473px] sm:pt-[0px]">
            <div className="block sm:grid md:grid lg:grid grid-cols-1 mx-auto sm:w-[100%] gap-4 sm:mt-8 mt-3 sm:mb-8">
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
      </div>
      <div className="flex flex-row gap-[5rem] sm:gap-[9rem] sm:mt-[45px]">
        <div
          className={`text-[15px] sm:text-[25px] font-semibold ${
            show === false ? " border-b-[3px] " : ""
          } border-[#e87451] cursor-pointer`}
          onClick={() => setSHow(false)}
        >
          Table of content
        </div>

        <div
          className={`text-[15px] sm:text-[25px] font-semibold ${
            show === true ? " border-b-[3px] " : ""
          } border-[#e87451] cursor-pointer`}
          onClick={() => setSHow(true)}
        >
          About the book
        </div>
      </div>
      {show ? (
        <>
          <p className="  text-left text-[15px]  sm:text-[16px] my-3 sm:ml-[] sm:mt-3 text-heading">
            {data?.AbooutTheBook?.heading}
          </p>
          <div className=" text-left   sm:ml-[1rem] sm:mt-8   mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
            {data?.AbooutTheBook?.content.map((ele) => (
              <>
                <p className="text-[15px]  sm:text-[16px]  font-semibold my-3">{ele?.name}</p>
                <p className="text-[15px]  sm:text-[16px] my-3">{ele?.paragraph}</p>
              </>
            ))}
          </div>
          <p className=" text-[15px]  sm:text-[16px] text-left  :ml-[rem] sm:mt-[0px]  mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
            {data?.AbooutTheBook?.lastheading}
          </p>
       
        </>
      ) : (
        < div className="sm:mt-3">
          {data.tableOfContents.map((ele) => (
            <>
              <p className="text-[15px]  sm:text-[16px] font-semibold my-3">{ele?.name}</p>
              <p className="text-[15px]  sm:text-[16px] my-3">{ele?.content}</p>
            
            </>
          ))}
        </div>
      )}
         
    </div>
  );
};

export default SingleProduct;
