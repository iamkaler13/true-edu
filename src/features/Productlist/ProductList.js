import React, { useState } from "react";

import { Link } from "react-router-dom";

export function ProductList() {



  const products = [
    {
      name: "Advanced  Surveying",
      Author: "Amish Rehalia & Himanshu Bagalwan",
      link: "/new/features/workflow-builder",
      img:"/books/Advanced  Surveying Front.png",
      price: "$35",
      Author: "Author",
    },
   
    {
      name: " Applied Mathematics-2",
      Author: "Gyan Chand",
      link: "/new/features/workflow-builder",
      img:"/books/Applied Mathematics-2 Front.png",
      price: "$35",
      Author: "Author",
    },
    {
      name: " Applied Mathematics-2",
      Author: "Gyan Chand",
      link: "/new/features/workflow-builder",
      img:"/books/Applied Mathematics-2 Front.png",
      price: "$35",
      Author: "Author",
    },
    {
      name: "Introduction to DBMS ",
      Author: "Madhu Dhiman",
      link: "/new/features/workflow-builder",
      img:"/books/Introduction to Dbms Front.png",
      price: "$35",
      Author: "Author",
    },
    {
      name: "Fundamental of Electical & Electronics Engineering ",
      Author: "Avnish Paul",
      link: "/",
      price: "$35",
      Author: "Author",
      img:"/books/Feee Front.png"
      

    },
    {
      name: "Essence of Indian Knowledge & Tradition",
      Author: "Puneet Sharma",
      link: "/",
      price: "$35",
      Author: "Author",
      img:"/books/Essence of Indian Knowledge & Tradition FRONT.png"
    },
    {
      name: "Hydraulics",
      Author: "Amish Rehalia & Muneesh Kumar",
      link: "/",
      price: "$35",
      Author: "Author",
      img:"/books/Hydraulics Front.png"
    },
    {
      name: "Information Security",
      Author: "Parul Gupta",
      link: "/",
      price: "$35",
      Author: "Author",
      img:"/books/Information Security Front.png"
    }
  ];
  
  return (
    <div>
     
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl ">
      

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product,key) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-705 lg:h-80">
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${key}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                   Author:   {product.Author}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
