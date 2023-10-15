import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div class=" md:block">
      <div className="z-40 text-center p-[3px] bg-[#E97451]">
        <h6 className="text-blue-400 text-white xs:flex-row font-semibold xs:flex-col sm:flex justify-center text-[12px] md:text-para lg:text-para sm:text-para sm:leading-8 gap-2">
        
          Create a brighter future by turning the pages of{" "}
          <span className="mt-2 sm:mt-0 inline  uppercase underline ">
            <Link to="/books">our books </Link>
          </span>{" "}
          and shape your tomorrow.
        </h6>
      </div>
    </div>
  );
};

export default Banner;
