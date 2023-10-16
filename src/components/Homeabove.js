import React from "react";
import { Link } from "react-router-dom";
const Homefold = () => {
  return (
    <>
      <div className="bg-[heading] relative  h-[378px] sm:h-[569px] shadow-lg sm:mb-0 mb-0">
        <div className=" mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%]  py-0 sm:py-20 relative">
          <div className="block sm:flex   justify-center  gap-10">
            <div>
              <p
                className={
                  "text-center   font-bold mt-[29px]   w-[40%] sm:w-[136px] m-auto text-base py-1 sm:mt-8  px-1  focus:ring-yellow-300 text-white rounded-[20px] bg-[#4d6998] hover:bg-black dark:focus:ring-yellow-900"
                }
              >
                INTRODUCING{" "}
              </p>
              <div className="relative flex items-center justify-center gap-[6rem] w-full my-6 sm:my-[50px]  mx-auto">
                <div
                  data-line-position="left"
                  class="connect-heading-line  sm:mt-8 mt-4"
                ></div>
                {/* <h1 className=" font-bold  m-auto text-center sm:mt-8 mt-4 sm:text-[50px] text-[27px] text-heading  sm:leading-none  ">
                  True-Edu Publications
                </h1> */}
                <div className="relative w-[15rem] h-8 mr-24">
                  <Link to="/">
                    <img
                      fill={"true"}
                      className="bg-contain mx-auto w-full"
                      alt="logo.png"
                      src={"/logo-blue.svg"}
                    />
                  </Link>
                </div>
              </div>

              <div className="font-bold text-2xl m-auto w-[300px] sm:w-full text-center mt-4  md:text-h3 lg:text-h3 sm:text-[30px] t  sm:mt-8 mb-2 sm:mb-4 text-heading">
                Your Journey, Our Books{" "}
              </div>

              <p className=" text-xl text-center  md:text-xl sm:max-w-[632px] sm:ml-[1rem] sm:mt-8   mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
                Empowering students with enriching books. Explore, learn, and
                thrive with every page. Your journey to knowledge and success
                starts here
              </p>
              <div className="block sm:grid md:grid lg:grid grid-cols-1 mx-auto sm:w-[60%] gap-4 sm:mt-8 mt-3 sm:mb-8">
                <button
                  className={
                    "py-2 px-8 mb-[12px] sm:mb-0 w-full first-letter:w-full focus:ring-yellow-300 text-lg font-semibold text-white bg-[#4d6998] hover:bg-[black] dark:focus:ring-yellow-900 rounded-lg"
                  }
                >
                  <div className="trytempo">
                    <Link to="/books">Exploring Books</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homefold;
