import React from "react";
// import Navbar from "../Components/Navbar.jsx";
import hand from "../assets/hand.png";

import mosq from "../assets/mosquito.png";
// import 2girls from "../assets/2girls.png";
import inject from "../assets/inject.png";

const FindCare = () => {
  return (
    <div>
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
        <div className="flex justify-between py-[20px] ">
          <p className="leading-[100%] text-[35px] font-[700] text-[#061522]  ">
            Dieases Prevention
          </p>
          <a href="">view more</a>
        </div>

        <div className="cards-container flex gap-[20px] my-[20px] ">
          <div className=" card1 p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[20px] bg-[#FDFDFD] ">
            <div className="">
              <img src={hand} alt="" srcset="" />
            </div>
            <div className="flex justify-between">
              <p>Wash Your Hands Often</p>
              <p> icon</p>
            </div>
            <div>
              <p>
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div>
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card1 p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[20px] bg-[#FDFDFD] ">
            <div className="">
              <img src={inject} alt="" srcset="" />
            </div>
            <div className="flex justify-between">
              <p>Wash Your Hands Often</p>
              <p> icon</p>
            </div>
            <div>
              <p>
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div>
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card1 p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[20px] bg-[#FDFDFD] ">
            <div className="">
              <img src={mosq} alt="" srcset="" />
            </div>
            <div className="flex justify-between">
              <p>Wash Your Hands Often</p>
              <p> icon</p>
            </div>
            <div>
              <p>
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div>
              <a href="http://">Learn More</a>
            </div>
          </div>
          {/* <div className=" card2">
           <img src={inject} alt="" srcset="" />
           <div className="flex justify-between">
            <p>Keep Up with Vaccinations</p>
            <p>icon</p>
           </div>
           <div>
            <p>Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
           </div>
           <div>
            <a href="http://">Learn More</a>
           </div>
        </div> */}

          {/* <div className=" card3">
           <img src={mosq} alt="" srcset="" />
           <div className="flex justify-between">
            <p>Mosquito Safety</p>
            <p>icon</p>
           </div>
           <div>
            <p>Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
           </div>
           <div>
            <a href="http://">Learn More</a>
           </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default FindCare;
