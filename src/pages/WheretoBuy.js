import React from "react";
import { useEffect } from "react";
const WheretoBuy = () => {
  const data = [
    {
      name: "Kharbanda Books Store, Sunder Nagar",
      number: "9418201112",
    },
    {
      name: "Sharma General Store, Hamirpur ",
      number: "9418012913",
    },
    {
      name: "Mohan Enterprises, Hamirpur",
      number: "9882596453",
    },
    {
      name: "Abhinandan Books Store, Rehan",
      number: "8629080495",
    },
    {
      name: "Shakti Books Store, Chamba",
      number: "8629080495",
    },
    {
      name: "MB Sales, Banikhet",
      number: "9418143609",
    },
    {
      name: "Sethi Books Shop, Paonta Sahib",
      number: "9816028889",
    },
    {
      name: "Modern Book Shop, Kullu",
      number: "7018410633",
    },
    {
      name: "Amit Justa, Rohru",
      number: "9816686525",
    },
    {
      name: "Nikku Books, Ambota",
      number: "7018898653",
    },
    {
      name: "Prabhakar General Store, Talwar",
      number: "9805946889",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className=" bg-white sm:py-5 py-5 px-5 sm:px-0  ">
      <div className="sm:px-0">
        <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
          List of Distributor/Retailors
        </h2>
        <ul className="flex flex-col gap-[15px] sm:gap-3">
          {data.map((ele) => (
            <li className="text-base sm:flex sm:justify-between sm:w-[445px]">
                <p className="hidden sm:block">⦁ {ele.name} –</p>
                <p>
                  <span className="text-[blue] hidden sm:block">
                    {" "}
                    <a href={`tel:${ele.number}`}> {ele.number}</a>
                  </span>
                </p>
              <div className="grid grid-cols-[90%,10%] sm:hidden">
                  <p className="">⦁ {ele.name} –</p>
                  <a href={`tel:${ele.number}`} className="w-[25px]">
                
                  <svg
                    fill="none"
                    stroke="#e97451"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    ></path>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WheretoBuy;
