import React from "react";
import { FaChevronCircleDown, FaTachometerAlt, FaRegSun } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="bg-blue-500 h-screen px-[25px]">
        <div className="px-4 py-3 flex items-center justify-center border-b-2 border-[#fcd21d]/[0.3]">
          <div className="text-white text-[20px] leading-6 font-extrabold cursor-pointer">
            admin panal
          </div>
        </div>
        <div className="flex items-center gap-4 py-5 border-b border-[#fcd21d]/[0.3] px-4">
          <FaTachometerAlt color="white" />
          <p className="text-[14px] leading-4 font-bold text-white">
            Dashboard
          </p>
        </div>

        <div className="">
          <p className="text-[14px] leading-5 font-bold text-white/[0.4]">
            INTERFACE
          </p>
          <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
            <div className=" flex items-center gap-2">
              <FaRegSun color="white" />
              <p>components</p>
            </div>
            <FaChevronCircleDown color="white" />
          </div>

          <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
            <div className=" flex items-center gap-2">
              <FaRegSun color="white" />
              <p>Utilise</p>
            </div>
            <FaChevronCircleDown color="white" />
          </div>
          <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
            <div className=" flex items-center gap-2">
              <FaRegSun color="white" />
              <p>Product</p>
            </div>
            <FaChevronCircleDown color="white" />
          </div>
          <div className="flex items-center justify-between gap-2 py-4 cursor-pointer">
            <div className=" flex items-center gap-2">
              <FaRegSun color="white" />
              <p>Coupon</p>
            </div>
            <FaChevronCircleDown color="white" />
          </div>
          <div className="h-[40px] w-10 bg-[#9a8c50] rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
