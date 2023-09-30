import React from 'react'
import { Link } from 'react-router-dom'
const Myapp = () => {
  return (
    <div className="about shadow-lg">
    <div className=" mx-auto max-w-[90%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] sm:py-10 py-6">
      <div className="mt-4 block sm:flex md:flex lg:flex justify-between items-center">
      <div className="sm:hidden block ">
          <div className="relative w-auto h-auto sm:w-[460px] mt-[-40px]">
       
            <img
              src="/mobile-app.svg"
              className="w-full mx-auto bg-contain !static sm:absolute"
              fill={true}
            />
          </div>
        </div>
        <div className="text-center sm:text-left">
        
            <h2 className="font-bold text-[45px] sm:leading-none leading-[50px] text-[#252C47] sm:mt-0 mt-4 sm:text-[40px] sm:leading-none">
            Streamline your college studies with our app          </h2>
          <div className="block sm:w-[500px]">

            <p className="mt-6 mb-4 text-[#474F70] text-[18px] sm:text-[20px]">
            Unlock the power of knowledge with our college study book app              </p>
            <p className=" mt-4 text-[#474F70] font-semibold text-[18px] sm:text-[20px]">
           Lower costs + saved time = enhanced profitability and streamlined operations.
            </p>
          </div>
          <div className="block">
            <form className="grid grid-cols-1 sm:grid-cols-1  gap-1 mt-8">
              <div className="block sm:flex w-[100%] items-center gap-8">
            
              <div className="flex items-center justify-center h-[62px] sm:h-auto learnmore_animation cursor-pointer text-center w-full mt-4 sm:mt-0 text-[red] py-5 sm:py-[20px] text-[20px] font-bold px-3 sm:w-[170px] hover:bg-black border-[#FF5721] border-2 hover:text-white dark:focus:ring-yellow-900 rounded-2xl">
                            <Link to="/request-demo">Coming Soon</Link>
                          </div>
            
              </div>
              <div className="inline mt-5  sm:max-w-[30%] sm:mt-[20px]"></div>
            </form>
          </div>
        </div>
        <div className="sm:block hidden">
          <div className="relative w-auto h-auto sm:w-[550px] ]">
       
            <img
              src="/mobile-app.svg"
              className="w-full mx-auto bg-contain !static sm:absolute"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default Myapp