import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { HiOutlinePhoto } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-[86px] h-[1024] bg-black rounded-r-2xl  ">
      <div className="w-[36px] h-[36px ] top-[40px] left-[30px] m-auto mt-3  rounded-full">
        <img
          className="bg-white rounded-full text-white"
          alt="icon"
          src="https://uibundle.s3.amazonaws.com/images/author-avatar-1607009340-1526"
        />
      </div>
      <hr className="bg-fuchsia-50 opacity-20 w-[70px] h-[2px] m-auto mt-8"></hr>
      <div className="p-4 w-full h-[100px ] flex justify-center">
        <AiOutlineUser className="w-6 h-6 m-auto mt-6 text-white font-bold " />
      </div>
      <div className="p-4">
        <AiOutlineCloudDownload className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <SlGraph className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <HiOutlinePhoto className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <SlCalender className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <AiOutlineFire className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <AiOutlinePieChart className="w-6 h-6 top-[162px] left-[36px] m-auto mt-6 text-white font-bold opacity-30" />
      </div>
      <div className="p-4">
        <AiOutlineSetting className="w-6 h-6 top-[162px] left-[36px] m-auto mt-96 bg- text-white font-bold opacity-30" />
      </div>
    </div>
  );
};

export default Dashboard;
