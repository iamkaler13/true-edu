import React, { useState } from "react";
import { Link } from "react-router-dom";

export function ProductList({products}) {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-4 lg:max-w-7xl ">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, key) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 h-[100%] sm:h-[80%] w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-705 ">
                  
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4  justify-between">
                  <div>
                    <h3 className="text-sm sm:text-[19px] font-semibold text-gray-700">
                      <Link to={`/books/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <button className="text-[#FF5721] hover:text-heading my-3 sm:my-0 text-lg font-semibold dark:focus:ring-yellow-900 rounded-lg">
                    <Link to={`/books/${product.slug}`}> Learn more →</Link>
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
