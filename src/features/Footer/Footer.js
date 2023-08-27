import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#4d6998] shadow text-center text-white relative ">
        <div className="mx-auto lg:max-w-[90%]">
          <div className="mx-6 sm:py-10 py-8 text-center md:text-left  border-b-2 border-neutral-200 ">
            <div className="block sm:flex items-start justify-between">
              <div className="flex justify-between gap-3 flex-col items-start">
                <span className=" hidden sm:block text-4xl mb-4 ">
                  <Link href="/">
                    <p className="w-[220px] h-15 object-contain"> True-Edu </p>
                    <p className="w-[20px] h-15 text-[18px] object-contain"> Publications </p>
                    

                    

                  </Link>
                </span>
                <div>
                  <div className=" sm:flex justify-between gap-3  items-start">
                    <div className="flex flex-wrap sm:justify-between gap-3 items-start">
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/Publish-Wit-Us">Publish With Us</Link>
                      </h6>

                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/article/Where To Buy-overview">
                          Where To Buy
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200] cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/article/Contact Us-overview">
                          Contact Us
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/list-of-About True-Edu">
                          About True-Edu{" "}
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/data-processing-agreement">
                          Our Mission
                        </Link>
                      </h6>
                      <h6 className="  text-white   font-[200]  cursor-pointer btext-xl bg-transparent  hover:bg-white hover:text-black hover:border-black    py-1 px-2 ">
                        <Link href="/privacy-policy">Who We Are</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 bg-slate-950 shadow  p-6 text-center dark:bg-neutral-700">
            <p className="font-thin text-neutral-600  ">
              ©2023 True-Edu Publications. All Rights Are Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
