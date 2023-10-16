import React from "react";
import Connect from "../components/Connect";
import { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className=" bg-white sm:py-5 py-5 px-5 sm:px-0  ">
      <div className="sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
          <div>
            <div class="bg-white p-10 rounded-lg shadow md:w-[100%  ] mx-auto">
              <form action="">
                <div class="mb-5">
                  <label for="name" class="block mb-2 text-left font-bold text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Full Name"
                    class="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="twitter"
                    class="block mb-2 font-bold text-gray-600 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Email"
                    class="border border-red-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="twitter"
                    class="block mb-2 text-left font-bold text-gray-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="Subject"
                    name="Subject"
                    placeholder="Subject"
                    class="border border-red-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="twitter"
                    class="block mb-2 font-bold text-left text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="essage"
                    placeholder="Message"
                    class="border border-red-300 shadow    p-3 w-full rounded mb-"
                  />
                </div>
                <div className="block sm:grid md:grid lg:grid grid-cols-1 mx-auto sm:w-[60%] gap-4 sm:mt-8 mt-3 sm:mb-8">
                  <button
                    className={
                      "py-2 px-8 mb-[12px] sm:mb-0 w-full first-letter:w-full focus:ring-yellow-300 text-lg font-semibold text-white bg-[#4d6998] hover:bg-[black] dark:focus:ring-yellow-900 rounded-lg"
                    }
                  >
                    <div className="trytempo">Submit</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className=" sm:p-8 sm:mt-3">
              <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
                Contact Information:
              </h2>
              <p className="my-3">
                <span className="font-bold"> Office Address:</span> True-Edu
                Publications, Sub Tehsil-Sadwan, Nurpur, Himachal Pradesh, Pin
                Code – 176202.
              </p>

              <p className="my-3">
                {" "}
                <span className="font-bold"> Whatsapp: </span> For general
                inquiries or support please text us on 7807585896.
              </p>
              <p className="my-3">
                <span className="font-bold">E-mail:</span>{" "}
                <span className="text-[blue]">support@trueedu.in </span> or{" "}
                <span className="text-[blue]">
                  trueeducation0100@gmail.com{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <Connect />
      </div>
    </div>
  );
};

export default ContactUs;
