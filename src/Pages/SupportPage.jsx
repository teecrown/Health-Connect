import React from "react";
import Navbar from "../Components/Navbar";
import FindCare from "./Healthtips.jsx";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import support from "../assets/support-hero.jpg";

const SupportPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={support} alt="" className='absolute w-full  h-[201px] sm:h-[313px] ' />
      </div>
          
      <div className=" relative  flex justify-center  items-center border w-[620px] p-4 ">
        <div >
        <h2 className="text-white leading-[100%] font-700 text-[45px]   text-center justify-center items-center w-[582px] h-[122px] ">
          {" "}
          We're <span className='text-[#0B9A55]'> Here to Help</span>, Every Step of the Way{" "}
        </h2>
        <p className="text-center text-white text-[18px] leading-[100%] font-500 w-[600px] h-[72px]">
          {" "}
          Have questions, concerns, or need guidance? The Health Connect support
          team is committed to helping you find answers quickly. Your peace of
          mind matters to us.
        </p>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default SupportPage;
