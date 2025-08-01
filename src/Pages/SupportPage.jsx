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
      <div className="relative text-center w-full  flex items-center h-[201px] sm:h-[313px] md:h-[500px]">
        <img
          src={support}
          alt=" Support"
          className=" w-full h-full object-cover"
        />
        <div className="absolute backdrop-blur-sm  m-auto bg-opacity-50 inset-0 flex justify-center  border border-white w-[580px] h-[250px]">
          <div className=" w-[580px] py-[20px]" >
            <h2 className="text-white leading-[100%] font-[700] text-[45px]   ">
              {" "}
              We're <span className="text-[#0B9A55]"> Here to Help</span>, Every
              Step of the Way{" "}
            </h2>
            <p className="items-center text-white text-[18px] leading-[150%] font-[400] w-[500px] py-[20px] m-auto h-[61px]">
              {" "}
              Have questions, concerns, or need guidance? The Health Connect
              support team is committed to helping you find answers quickly.
              Your peace of mind matters to us.
            </p>
          </div>
        </div>{" "}
      </div>
     
      <FAQ />
       <div className="chat-support ">
        <h2>Chat Support</h2>
        <div className="">
          <div>Health Connect Support</div>
          <div>
            <p>Hello, I’m here to help you with finding clinics, pharmacies, health tips and more. How can I help you today?</p>
           <form className="flex flex-col gap-4">
            <label htmlFor="" name=''>
              <input type="radio" name="" id="" />
              Book an appointment
            </label>
            <label htmlFor="" name=''>
              <input type="radio" name="" id="" />
           Find a nearby clinic
            </label>
            <label htmlFor="" name=''>
              <input type="radio" name="" id="" />
              Book an appointment
            </label>
            <label htmlFor="" name=''>
              <input type="radio" name="" id="" />
              Book an appointment
            </label>
           </form>
            
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
