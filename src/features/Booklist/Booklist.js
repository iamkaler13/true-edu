import React, { useState } from "react";
import { Link } from "react-router-dom";

export function ProductList({products}) {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-4 lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-0 sm:gap-y-[3.5rem] sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, key) => (
              <div key={product.id} className="group relative pb-[55px] sm:pb-0">
                <div className=" rounded-sm ">
                  
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-[2px] sm:mt-4  justify-between">
                  <div>
                  <h2 className={`hidden sm:block text-[16px] sm:text-[20px] !font-bold text-black`}>
                    <div>{product.name}</div>
                  </h2>
                  <h3 className={` text-start hidden sm:block mb-0 m:mb-0 mt-0 sm:mt-2 text-sm   sm:font-semibold text-heading`}>
                    <p className="sm:text-[15px]">By : {product.Author}</p>
                  </h3>

                  <button className="text-[#FF5721]  hover:text-heading my-0 sm:!mt-2 text-[16px] sm:text-[18px] sm:my-0 text-lg font-semibold dark:focus:ring-yellow-900 rounded-lg">
                    <Link to={`/books/${product.slug}`}> Read more →</Link>
                  </button>
                  </div>
           
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
