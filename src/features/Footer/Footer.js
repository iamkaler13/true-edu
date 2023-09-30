import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mx-auto max-w-[100rem] py-0 sm:py-0 sm:px-0 ">
      <div className="bg-[#E97451] h-[7px]">
        <p className="s"></p>
      </div>

      <footer className=" bg-[#4d6998] shadow text-center text-white relative ">
        <div className="mx-auto lg:max-w-[88%]">
          <div className="mx-6 sm:py-10 py-8 text-center md:text-left  border-b-2 border-neutral-200 ">
            <div className="block sm:flex items-start justify-between">
              <div className="flex justify-between gap-3 flex-col items-start">
                <span className=" hidden sm:block text-4xl mb-8 ">
                  <div className="relative w-[12rem] h-8 mr-24">
                    <Link to="/">
                      <img
                        fill={"true"}
                        className="bg-contain mx-auto w-full"
                        alt="logo.png"
                        src={"/logo-trans.svg"}
                      />
                    </Link>
                  </div>
                </span>
                <div>
                  <div className=" sm:flex justify-between gap-3  items-start">
                    <div className="flex flex-wrap sm:justify-between gap-3 items-start">
                     

                     

                      {/* <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent      hover:text-white hover:border-b-[1px]    py-1 px-2 ">
                        <Link to="/our-mission">Our Mission</Link>
                      </h6> */}
                      <h6 className="  text-white   font-[200] cursor-pointer btext-xl bg-transparent    hover:text-white hover:border-b-[1px]   py-1 px-2 ">
                        <Link to="/about-us">About Us </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent    hover:text-white hover:border-b-[1px]    py-1 px-2 ">
                        <Link to="/publish-With-us">Publish With Us</Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent     hover:text-white hover:border-b-[1px]  py-1 px-2 ">
                        <Link to="/contact-us">Contact Us</Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent    hover:text-white hover:border-b-[1px]    py-1 px-2 ">
                        <Link to="/where-to-buy">
                          Where To Buy
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent    hover:text-white hover:border-b-[1px]    py-1 px-2 ">
                        <Link to="/privacy-policy">
Privacy Policy
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent    hover:text-white hover:border-b-[1px]    py-1 px-2 ">
                        <Link to="/our-team">
Our team                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 bg-slate-950 shadow  p-6 text-center dark:bg-neutral-700">
            <p className="font-thin text-neutral-600 sm:m-auto  ">
              ©2023 True-Edu Publications. All Rights Are Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
