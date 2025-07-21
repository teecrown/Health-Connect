import React from "react";
import Navbar from "../Components/Navbar.jsx";

const FindCare = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex  items-center  justify-center  h-[135px] sm:h-[200px] md:h-[238px] bg-gradient-to-b from-[#195188] to-[#061522] w-full  ">
        <div className=" flex flex-col justify-between align-middle items-center w-[352px] h-[79px] sm:w-[548px] sm:h-[102px] md:w-[748px] md:h-[162px] ">
          <h1 className="text-[#FFFFFF] font-Manrope font-700 text-[21px] sm:text-[45px] leading-[100%] text-center">
            Search for a Health Topic
          </h1>
          <label htmlFor="" className="">
            <input
              type="search"
              name=" search"
              id="search"
              placeholder="What are you curious about?"
              className="w-[200px] h-[33px] sm:w-[408px] sm:h-[62px] rounded-l-[38px] bg-[#FFFFFF] pl-[20px] "
            />
            <button
              type="submit"
              name="search"
              className="bg-[#0B9A55] w-[90px] h-[33px] sm:w-[180px] sm:h-[62px] text-white rounded-r-[38px] cursor-pointer hover:bg-green-700"
            >
              {" "}
              search{" "}
            </button>
          </label>
        </div>
      </div>

      {/* //cards  */}

      <div className=" mt-[56px] bg-[#F0F3F6] px-[100px]">
        <div className="flex justify-between ">
            <p>Dieases Prevention</p>
            <p> view more</p>
        </div>
        <div className="">
            <img src="" alt="" srcset="" />
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

      </div>




    </div>
  );
};
export default FindCare;
