import React from "react";
import { useEffect } from "react";
const Publish = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className=" bg-white sm:py-10 py-0 px-5 sm:px-0  ">
      <div className="block mt-10 sm:mt-[-70px] sm:flex md:flex lg:flex justify-evenly items-center gap-14 sm:gap-[9.5rem] ">
        <div className="">
      
          <h2 className="sm:w-[473px] font-bold text-[#252C47] sm:mt-0 mt-1 text-[26px] sm:text-[30px]  sm:leading-none ">
            Publish Your Book with Us
          </h2>
          <div className="block sm:w-[473px]">
            <p className="mt-6 mb-4 text-[#474F70] text-[18px] sm:text-[20px]">
              Are you an aspiring author eager to share your literary
              masterpiece with the world? Look no further! True-Edu Publications
              is dedicated to nurturing emerging talents and showcasing
              exceptional literary works.
            </p>
          </div>
        </div>
        <div className="">
          <div className="relative w-auto h-auto sm:w-[499px] ]">
            <img
              src="/mobile-app.svg"
              className="w-full mx-auto bg-contain !static sm:absolute"
              fill={true}
              alt="publish"

            />
          </div>
        </div>
      </div>
<div className="sm:px-10">

      <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
        Why Choose True-Edu Publications?
      </h2>
      <ul className="flex flex-col gap-3">
        <li className="text-base">
          <p>
          •	Dedicated Support: We provide personalized assistance throughout the publishing journey, from manuscript to market.
          </p>
        </li>
        <li className="text-base">
          <p>
          •  Quality and Excellence: We uphold high standards of quality to ensure your book reaches its fullest potential.
          </p>
        </li>
        <li className="text-base">
          <p>
          •  Global Reach: Our network allows for widespread distribution, connecting your book with readers across the globe.
          </p>
        </li>

      </ul>
      <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
        How to Get Started
      </h2>
      <p>
        We're excited to collaborate with authors who are passionate about
        making a difference through their writing. To initiate this enriching
        journey, we invite you to share your details with us:
      </p>
      <p className="font-bold my-3">Author Details:</p>
      <ul className="flex flex-col gap-3">
        <li className="text-base">
          <p>
           <span className="font-semibold">1. Full Name:</span> Provide your full name as you'd like it to appear on
            your published works.
          </p>
        </li>
        <li className="text-base">
          <p>
            <span className="font-semibold">2. Mobile Number:</span> Share a contact number where we can reach you for
            discussions regarding your manuscript.
          </p>
        </li>
        <li className="text-base">
          <p>
          <span className="font-semibold">3. Email Address:</span> Enter your primary email address for communication
            and updates on your publishing process.
          </p>
        </li>

        <li className="text-base">
          <p>
          <span className="font-semibold">4. Teaching Experience / Writing Experience:</span> Briefly tell us about
            your teaching or writing background, including any published works
            or notable achievements.
          </p>
        </li>
        <li>
          <p className="text-bases">
          <span className="font-semibold">5. Preferred Writing Subjects:</span> Let us know the subjects or genres
            you're enthusiastic about writing, and we'll help you find the
            perfect fit for your creativity.
          </p>
        </li>
      </ul>
      <p className="font-bold my-3">Submit Your Information</p>
      <p className="mb-3">
        Please share all of the above detail by E-mail on
       <span className="text-[blue] cursor-pointer"
        onClick={(e) => {
          window.location = 'mailto:yourmail@domain.com'       
      }}
       > trueeducation0100@gmail.com</span> Thank you for considering True-Edu
        Publications as your publishing partner. We can't wait to embark on this
        exciting literary adventure together!
      </p>
    </div>
</div>

  );
};

export default Publish;
