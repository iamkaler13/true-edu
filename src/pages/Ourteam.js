import React from "react";

const Ourteam = () => {
  const data = [
    {
      name: " Abhishek Thakur",
      title: "Founder and CEO",
      about:
        "Abhishek Thakur is the visionary founder and CEO of True-Edu Publications. With a passion for education and a dedication to empowering students, he leads the team in creating exceptional educational products that make a difference in student's lives.      ",
      linkedin: "",
      instagram: "",
      img: "/team/Abhishek.png",
  color:"#ffffff"
    },
    {
      name: " Vivek Singh",
      title: "Sotware Developer  ",
      about:
        "Vivek Singh is the skilled lead Sotware developer responsible for designing and developing the True-Edu Publications website and Mobile App. With expertise in web technologies, they ensure an optimal and user-friendly online experience for our visitors. ",
      linkedin: "www.linkedin.com/in/vivek-singh-70bb911a6      ",
      instagram: "https://www.instagram.com/iamvivekaler/",
      img: "/team/Vivek.png",
      color:"#4d6997"
    },
    {
      name: " Gourav Sharma",
      title: "Head of Editorial     ",
      about:
        "Gourav Sharma leads our editorial team, ensuring that our publications maintain the highest standards of quality and relevance. They bring a wealth of experience and expertise to guide our content creation.      ",
      linkedin: "",
      instagram: "https://instagram.com/gourav.sharma.25786",
      img: "/team/Gaurav.png",
      color:"#fffff"
    },
    {
      name: " Sushil Bahri",
      title: "Head of Marketing     ",
      about:
        "Sushil Bahri heads our marketing efforts, spreading the word about our educational products and reaching students worldwide. Their innovative strategies help us connect with our audience effectively.      ",
      linkedin: "",
      instagram: "",
      color:"#4d6997",

      img: "/team/Sushil.png",
    },
  ];
  return (
    <div className=" bg-white sm:py-5 py-5 px-5 sm:px-0  ">
      <div className="sm:px-0">
        {data.map((ele) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[120px]">
            <div className="flex flex-col">
              
              <div className="relative w-auto sm:hidden block h-auto sm:w-[300px] mt-[20px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  m-auto">
                <img
                  src={ele.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  fill={true}
                />
              </div>
              <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:mt-6 font-semibold text-heading">
                {ele.name}
              </h2>
              <h2 className="text-lg italic sm:text-[15px] sm:leading-8 my-2 sm:my-0  text-heading">
                {ele.title}
              </h2>
              <p className="my-3">{ele.about}</p>
              <p className="my-3">
                Connect with {ele.name} on{" "}
                <span className="text-[blue]">
                  <a href={ele.linkedin} target="_blank">
                    {" "}
                    LinkedIn
                  </a>{" "}
                </span>{" "}
                |{" "}
                <span className="text-[blue]">
                  <a href={ele.instagram} target="_blank">
                    {" "}
                    Instagram{" "}
                  </a>
                </span>
              </p>
            </div>
            <div className="sm:block hidden">
              <div className="relative w-auto h-auto sm:w-[300px] mt-[20px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  m-auto">
                <img
                  src={ele.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  fill={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
