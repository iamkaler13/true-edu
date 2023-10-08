import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import product from "../data/product.json"
const LatestBook = () => {
  const [data,setData] = useState(product)
  var workflowslider = {
    arrows: true,
autoplay :true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    centerMode: false,
    centerPadding: "11%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0%",
        },
      },
    ],
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
 

  return (
    <div className="bg-[white] shadow-lg  special">
      <div className=" mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%]   sm:py-0">
        <div className="text-center">
          <div className="!font-bold text-[37px] leading-[45px]  sm:text-[30px] sm:pt-0 pt-[20px] sm:leading-none text-center  sm:w-[600px] m-auto">

            <p>
Our Latest Launches
            {/* <span className="text-[#FF5721]"> features and products </span> */}
            </p>
          </div>
        </div>
      </div>
      <div className="relative  sm:pt-0 pb-10">
   
        <Slider {...workflowslider} className="sliderMaine">
          {data.map((ele, key) => (
            <div className="p-4 " key={key}>
              <div className="rounded-[20px] shadow-2xl mt-8">
                <div className="relative p-4">
                <div className="relative w-auto h-auto sm:h-[252px] sm:m-auto sm:w-[50%]  ">
       
       <img
         src={ele.img}
         className="w-full mx-auto bg-contain !static sm:absolute"
         fill={true}
       />
     </div>
                  <h2 className="text-[28px] sm:text-[20px] !font-bold text-black">
             
                    <div>
                    {ele.name}
                    </div>
                  </h2>
                  <h3 className="text-start mb-6 sm:mb-2 mt-10 sm:mt-2 text-xl font-semibold text-heading">
             
                    <div>
                    <p className="sm:text-[15px]">By : {ele.Author}</p>
                    </div>
                  </h3>
                
                  <button className="text-[#FF5721] hover:text-heading my-3 sm:my-0 text-lg font-semibold dark:focus:ring-yellow-900 rounded-lg">
                    <Link to={`/product/${ele.slug}`}> Learn more →</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestBook;
