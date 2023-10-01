import React from 'react'
import { Link } from 'react-router-dom';

const Connect = () => {
    const images = [
       
    
        { src: "/communication_channels/YouTube.png", animation: "mobile leftimg_sec animation", link:"https://youtube.com/@trueeduofficial8882?si=mGZNqCl6q1Z_S9mG"},
        { src: "/facebook.svg", animation: "mobile leftimg_sec animation2",link:"https://www.facebook.com/TrueEduPublications" },
        { src: "/communication_channels/insta.svg", animation: "mobile leftimg_sec animation2",link:"https://www.instagram.com/trueedu_publications/" },
        { src: "/whatsapp.svg", animation: "mobile leftimg_sec animation3",link:"https://api.whatsapp.com/send?phone=7807585896" },
      ];
    return (
    <div className=" bg-[white] pt-2 sm:pt-10 pb-2 sm:pb-4  sm:my-[26px] ">
    <div className="my-8  mx-auto max-w-[90%]">
      <h2 className="text-center font-bold mb-4 sm:mb-0 text-2xl text-heading md:text-h2 lg:text-h2 sm:text-h2 sm:leading-8 js-show-on-scroll ">
        {/* One platform, infinite possibilities */}
        {/* All communication channels and in every language  */}
        Join us on your favorite platform & stay updated      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-4 text-center">
        {images.map((element, key) => (
          <div
            className={`${key === 4 ? "w-[63px]" : ""} relative h-auto w-[56px] sm:w-[65px] py-4 sm:pt-24 m-auto hover:text-white js-show-on-scroll`}
            key={key}
          >
            <Link to={element.link} target='_blank'>
            <img
              src={element.src}
              fill={true}
              alt="Picture of the author"
              className={`m-auto object-contain mx-auto  , ${key === 4 || 5 ? "img-platform-whatsapp" : "img-platform-1"} ${element.animation}`}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>  )
}

export default Connect