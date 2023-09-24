import React, { useEffect } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import Accordian from "../Accordian/Acoordian";
import Footer from "../Footer/Footer";
import Banner from "../../components/Banner";
const Navbar = ({ children }) => {
  const [show, setShow] = useState(false);

  const nav_links = [
    {
      name: " Publish With Us",
      link: "/publish-with-us",
    },
    {
      name: "Where To Buy",
      icon: "",
      link: "/where-to-buy",
    },
    {
      name: "Contact Us",
      icon: "",
      link: "/contact-us",
    },
  ];
  return (
    <>
    <Banner/>
      <nav
        id="header"
        className="sticky top-0 start-0 z-[999999] sm:z-50 w-full   bg-[#4d6998] border-gray-200"
      >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  ">
          <div className="relative flex flex-row items-center w-full px-6 sm:px-0 md:px-0 lg:px-0 h-[60px]">
            <div className="relative w-[10rem] h-8 mr-24">
              <Link to="/">
                <img
                  fill={"true"}
                  className="bg-contain mx-auto w-full"
                  alt="logo.png"
                  src={"/Logo-trans.svg"}
                />
              </Link>
            </div>
            <div></div>
            <div className="sm:flex flex-row relative ml-auto cursor-pointer">
              <ul className="hidden relative linkhr md:flex text-black gap-[34px] flex-row">
                {nav_links.map((element, key) => (
                  <li className="menus_desk py-[15px] pr-[15px] h-[60px] group relative cursor-pointer  hover:border-l-0 hover:border-t-0 ">
                    <p className="flex relative ">
                      <Link
                        to={element.link}
                        className="sm:pt-[4px] sm:pb-[6px]   border-[white] hover:border-b-[2px]   text-white "
                      >
                        {element.name}
                      </Link>{" "}
                      <p className="absolute top-[8px] right-[-15px]">
                        {element.icon}
                      </p>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:hidden flex-row relative ml-auto cursor-pointer">
              {show === false ? (
                <Bars4Icon
                  className="animate-fadeIn h-8 w-8 text-[white]"
                  onClick={(e) => {
                    setShow(true);
                  }}
                />
              ) : (
                <XMarkIcon
                  className="animate-fadeIn h-8 w-8 text-black"
                  onClick={(e) => {
                    setShow(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {show === true && (
          <div className="block md:hidden lg:hidden sm:hidden w-full pb-[20px] ">
            <Accordian setShow={setShow} nav_links={nav_links} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
