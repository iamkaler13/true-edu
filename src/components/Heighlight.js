import React, { useState } from "react";

const slides = [
    {
      title: "Composition of Our Publications",
      text: "Strictly according to the latest syllabus provided by AICTE & HPTSB",
   
    },
    {
      title: "Precisely Crafted and Expertly Designed",
      text: "Strategically Engineered and Thoroughly Composed",

    },
    {
      title: "Comprehensive Methodology",
      text: "Delivers a holistic and all-encompassing methodology for engineering",
  
    },
    {
      text: "Key concepts have been emphasized for a swift review of fundamental points",
"title":"Essential Concepts for Efficient Review"




     
    },
  ];
const Heighlight = () => {
  const [hideHoverData, setHideHoverData] = useState(null);

  return (
    <div className=" bg-[#4d6998] sm:py-10 py-6 sm:my-[26px] ">
      <div className="max-w-[1400px] w-full m-auto sm:py-8 md:py-8 lg:py-8  sm:px-4 px-4 lg:px-4 relative group"

      >
        <h2 className="text-center  text-2xl md:text-h2 lg:text-h2 sm:text-h2 sm:leading-8 my-2 font-bold text-white">
        Key features of our books        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full m-auto sm:py-8 md:py-8 lg:py-8 sm:px-4 lg:px-4 mt-10">
          {slides.map((item, key) => (
            <div
              className="bg-[white] shadow-lg rounded-lg p-6 sm:p-12 md:py-7 md:px-8 hover:scale-105 transition-transform duration-300"
              style={{ border: "1px solid #2f2f2f", borderRadius: "20px" }}
              key={key}
            >
              <div className="flex flex-col-reverse sm:flex-row justify-start sm:justify-start items-start sm:items-center gap-4 mb-6 sm:mb-10">
                <h5 className="font-bold text-xl md:text-h6 sm:leading-2 lg:text-h6 sm:text-h6 text-black js-show-on-scroll">
                  {item.title}
                </h5>
           
              </div>
              <div className="flex flex-co justify-start items-center gap-4">
                <p className="text-black text-base sm:text-para opacity-70 js-show-on-scroll relative">
                  {item.text}
                  
                  <span
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHideHoverData(key);
                    }}
                  >
                    {item.astrick}
                  </span>
           
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heighlight;
