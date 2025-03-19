import React from "react";

export default function Cards({ item }) {
  return (
    <div>
      <div className="m-5 max-w-sm border border-gray-300 rounded-3xl shadow-sm hover:scale-105 duration-200 ">
        
          <img
           src={item.image}
          />
        <div className="p-5">
          
            <div className="flex items-center gap-3">
                <p className="mb-2 text-2xl text-gray-900 dark:text-white">
                {item.name}
                </p>
                <p className="mb-2 text-sm bg-pink-500 rounded-md bg px-2 font-thin">free</p>
            </div>
          
          <p className="mb-3 font-normal">
            {item.title}
          </p>
          <div className="flex justify-between">
            <div className="border-[2px] outline-none  border-blue-gray-100 hover:bg-pink-500 rounded-md py-1 bg px-2 font-thin">${item.price}</div>
            <div className=" border-[2px] outline-none border-blue-gray-100 hover:bg-pink-500 rounded-md py-1 bg px-2 font-thin">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
