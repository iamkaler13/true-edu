import React from 'react'

const WheretoBuy = () => {

  const data =[
{
  name:"Kharbanda Books Store, Sunder Nagar",
  number:"9418201112"
  },
  {
    name:"Sharma General Store, Hamirpur ",
  number:"9418012913"

  },
  {
    name:"Mohan Enterprises, Hamirpur",
  number:"9882596453"

  },{
    name:"Abhinandan Books Store, Rehan",
    number:"8629080495"
  },
  {
    name:"Shakti Books Store, Chamba",
    number:"8629080495"
  },
  {
    name:"MB Sales, Banikhet",
    number:"9418143609"
  },
  {
    name:"Sethi Books Shop, Paonta Sahib",
    number:"9816028889"
  },
  {
    name:"Modern Book Shop, Kullu",
    number:"7018410633"
  },
  {
    name:"Amit Justa, Rohru",
    number:"9816686525"
  },
  {
    name:"Nikku Books, Ambota",
    number:"7018898653"
  },
  {
    name:"Prabhakar General Store, Talwar",
    number:"9805946889"
  },
  

  ]
  return (
<div className=" bg-white sm:py-5 py-5 px-5 sm:px-0  ">
     
<div className="sm:px-0">

      <h2 className="text-lg sm:text-[30px] sm:leading-8 my-2 sm:my-6 font-semibold text-heading">
      List of Distributor/Retailors
      </h2>
      <ul className="flex flex-col gap-3">
{data.map((ele)=>
        <li className="text-base sm:flex sm:justify-between sm:w-[445px]">
          <p>
          ⦁	{ele.name} – 
          </p>
          <p>
          <span className='text-[blue]'> <a href={`tel:${ele.number}`} >  {ele.number}</a></span>
          </p>
        </li>
  )}
      </ul>
    </div>
</div>  )
}

export default WheretoBuy