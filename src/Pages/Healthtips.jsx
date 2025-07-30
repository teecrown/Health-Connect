import React from "react";
import Navbar from "../Components/Navbar.jsx";
import hand from "../assets/hand.png";

import mosq from "../assets/mosquito.png";
import girls from '../assets/2girls.png'
import inject from "../assets/inject.png";
import bookmark from '../assets/bookmark.png';
import sit from '../assets/sit.png'
import Footer from "../Components/Footer";

const Healthtips = () => {
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

      <div className=" mt-[56px] bg-[#F0F3F6] px-[10px] sm:px-[100px]">
        <div className="flex justify-between items-center py-[20px] ">
          <p className="leading-[100%] text-[18px]font-[700] sm:text-[35px] sm:font-[700] text-[#061522]  ">
            Dieases Prevention
          </p>
          <a href="">view more</a>
        </div>

        <div className="cards-container flex gap-[54px] my-[20px] w-full">

          <div className=" card1 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={hand} alt="" srcset="" />
            </div>

            <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              <p className="w-[247px]">Wash Your Hands <br /> Often</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">

              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline " >
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card2 rounded-[35px] p-[15px] w-[187px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={inject} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              
              <p className="w-[247px]">Keep Up with <br /> Vaccinations</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">
              
            <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
          
              
            </div>
            <div  className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>


          <div className=" card3 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={mosq} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
             <p className="w-[247px]"> Mosquitoe <br /> Safety </p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[5px] flex flex-col justify-center align-middle">
             
              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
              Use treated nets and repellents to prevent malaria, especially in high-risk areas.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>

        
      
        </div>
      </div>

      <div className=" mt-[56px] bg-[#F0F3F6] px-[10px] sm:px-[100px]">
        <div className="flex justify-between items-center py-[20px] ">
          <p className="leading-[100%] text-[18px]font-[700] sm:text-[35px] sm:font-[700] text-[#061522]  ">
            Mental Health & Wellness
          </p>
          <a href="">view more</a>
        </div>

        <div className="cards-container flex gap-[54px] my-[20px] w-full">

          <div className=" card1 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={sit} alt="" srcset="" />
            </div>

            <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              <p className="w-[247px]">Breathe and Meditate</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">

              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline " >
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card2 rounded-[35px] p-[15px] w-[187px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={girls} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              
              <p className="w-[247px]">Keep Up with <br /> Vaccinations</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">
              
            <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
          
              
            </div>
            <div  className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>


          <div className=" card3 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={girls} alt="girls picture" />          
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
             <p className="w-[247px]"> Mosquitoe <br /> Safety </p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[5px] flex flex-col justify-center align-middle">
             
              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
              Use treated nets and repellents to prevent malaria, especially in high-risk areas.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>

        
      
        </div>
      </div>

      <div className=" mt-[56px] bg-[#F0F3F6] px-[10px] sm:px-[100px]">
        <div className="flex justify-between items-center py-[20px] ">
          <p className="leading-[100%] text-[18px]font-[700] sm:text-[35px] sm:font-[700] text-[#061522]  ">
            Dieases Prevention
          </p>
          <a href="">view more</a>
        </div>

        <div className="cards-container flex gap-[54px] my-[20px] w-full">

          <div className=" card1 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={hand} alt="" srcset="" />
            </div>

            <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              <p className="w-[247px]">Wash Your Hands <br /> Often</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">

              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline " >
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card2 rounded-[35px] p-[15px] w-[187px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={inject} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              
              <p className="w-[247px]">Keep Up with <br /> Vaccinations</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">
              
            <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
          
              
            </div>
            <div  className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>


          <div className=" card3 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src= {mosq} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
             <p className="w-[247px]"> Mosquitoe <br /> Safety </p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[5px] flex flex-col justify-center align-middle">
             
              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
              Use treated nets and repellents to prevent malaria, especially in high-risk areas.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>

        
      
        </div>
      </div>
      <Footer />
     </div>
  );
};
export default Healthtips;

import React from "react";
// import Navbar from "../Components/Navbar.jsx";
import hand from "../assets/hand.png";

import mosq from "../assets/mosquito.png";
// import 2girls from "../assets/2girls.png";
import inject from "../assets/inject.png";
import bookmark from '../assets/bookmark.png';

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

      <div className=" mt-[56px] bg-[#F0F3F6] px-[10px] sm:px-[100px]">
        <div className="flex justify-between items-center py-[20px] ">
          <p className="leading-[100%] text-[18px]font-[700] sm:text-[35px] sm:font-[700] text-[#061522]  ">
            Dieases Prevention
          </p>
          <a href="">view more</a>
        </div>

        <div className="cards-container flex gap-[54px] my-[20px] w-full">

          <div className=" card1 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={hand} alt="" srcset="" />
            </div>

            <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              <p className="w-[247px]">Wash Your Hands <br /> Often</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">

              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
                Regular handwashing with soap reduces the spread of germs and
                lowers your risk of infections.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline " >
              <a href="http://">Learn More</a>
            </div>
          </div>

          <div className=" card2 rounded-[35px] p-[15px] w-[187px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={inject} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
              
              <p className="w-[247px]">Keep Up with <br /> Vaccinations</p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[30px]">
              
            <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">Stay updated on immunizations to protect yourself and your community from preventable diseases.</p>
          
              
            </div>
            <div  className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>


          <div className=" card3 rounded-[35px] p-[15px] w-[203px] h-[304px] sm:w-[300px] sm:h-[400px] md:w-[377px] md:h-[533px] my-[10px] sm:my-[15px] bg-[#FDFDFD] ">
            <div className="">
              <img src={mosq} alt="" srcset="" />
            </div>
             <div className="flex justify-between w-full text-[#061522] font-[700] text-[25px] leading-[100%] font-[manrope] my-[30px] ">
             <p className="w-[247px]"> Mosquitoe <br /> Safety </p>
              <img src={bookmark} alt="" srcset="" />
            </div>
            <div className="mt-[5px] flex flex-col justify-center align-middle">
             
              <p className=" text-[20px] leading-[100%] font-[400] font-manrope ">
              Use treated nets and repellents to prevent malaria, especially in high-risk areas.
              </p>
            </div>
            <div className="mt-[30px]  flex justify-center items-center underline ">
              <a href="http://">Learn More</a>
            </div>
          </div>

        
      
        </div>
      </div>
     </div>
  );
};
export default FindCare;
