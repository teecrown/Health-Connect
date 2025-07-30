import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../assets/Hero.png'
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaCheckSquare } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import hand from "../assets/hand.png";

import mosq from "../assets/mosquito.png";
// import 2girls from "../assets/2girls.png";
import inject from "../assets/inject.png";
import bookmark from '../assets/bookmark.png';


const features = [
    {
        icon: <FaShieldAlt className="font-manrope text-white text-2xl" />,
        title: "Verified Clinics & Pharmacies",
        description: "Easily find reliable healthcare providers near you.",
    },
    {
        icon: <HiOutlineDocumentCheck className="font-manrope text-white text-2xl" />,
        title: "Expert-Reviewed Health Tips",
        description: "Get accurate, wellness advice you can trust.",
    },
    {
        icon: <FaMapMarkerAlt className="font-manrope text-white text-2xl" />,
        title: "Location-Based Search",
        description: "Access care tailored to your area in just a few taps",
    },
    {
        icon: <FaClock className="font-manrope text-white text-2xl" />,
        title: "Fast Medical Support",
        description: "Get expert responses to your inquiries within 12 hours.",
    },
    {
        icon: <FaCheckSquare className="font-manrope text-white text-2xl" />,
        title: "User-Friendly Experience",
        description: "Simple, mobile-first design built with your convenience in mind.",
    },
];

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <section>
                <div className='Herosection flex mb-10 justify-between gap-5 mx-10'>
                    {/* <Words /> */}
                    <div>
                        <h1 className='font-manrope text-5xl font-bold leading-100% mt-[133px]'> Find Trusted Healthcare, Fast </h1>
                        <p className='w-[610px] h-[150px] text-xl font-normal leading-[35px] my-[30px] '>Easily discover nearby clinics, pharmacies, and reliable health information—all in one place. HealthConnect helps you make informed health decisions with confidence.</p>
                        {/* <button/> */}
                        <div className='mb-10' >
                            <button className="w-[115px] h-[47px] bg-[#0B9A55] text-[#ffffff] rounded-[10px] border border-[#0B9A55] " > Find Care </button>
                            <button className="w-[131px] h-[47px] text-[#0B9A55] border border-[#0B9A55] rounded-[10px] bg-white "> Health tips </button>
                        </div>
                    </div>
                    <div>
                        <img src={Hero} alt='Herosection picture' className='mt-18' />
                        {/* Badge: Clinics */}
                        <div className="absolute bottom-20 left-175 bg-white rounded-lg shadow-md px-4 py-2 text-sm">
                            <span className="text-blue-600 font-semibold">2,500+</span><br />
                            Clinics and pharmacies listed nationwide
                        </div>

                        {/* Badge: Response time */}
                        <div className="absolute top-2/3 right-0 bg-white rounded-lg shadow-md px-4 py-2 text-sm">
                            <span className="text-blue-600 font-semibold">12hr</span><br />
                            Average expert response time to inquiries
                        </div>

                        {/* Badge: Health Tips */}
                        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md px-4 py-2 text-sm">
                            <span className="text-blue-600 font-semibold">100+</span><br />
                            Verified health tips and guides added monthly
                        </div>
                    </div>
                </div>
                <div className='mt-25 ml-15 flex justify-between mr-5'>
                    <div className='w-[302px] h-[175px] mb-73'>
                        <h1 className='font-bold text-[35px] leading-100% mb-17'> Why Choose Us? </h1>
                        <p className='font-normal text-[20px] leading-[35px]'> Connecting You to Better Health, Faster and Smarter. </p>
                    </div>
                    <p className='w-[817px] h-[175px] font-bold text-[20px] leading-[35px]'>Health Connect is your one-stop platform for accessing trusted healthcare information, nearby clinics, pharmacies, and expert medical support. Whether you’re searching for care or staying informed, we simplify the journey by putting everything you need right at your fingertips. Designed with accessibility, speed, and trust in mind—because your health shouldn’t be complicated.</p>
                </div>
                <div className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={
                                "bg-gradient-to-b from-[#01447A] to-[#003362] text-white rounded-xl shadow-lg p-4 flex flex-col justify-between w-[295px] h-[306px] mb-12 mx-auto"
                            }
                        >
                            {/* Icon + Title */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className=" p-2 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className=" font-manrope text-lg font-semibold">{feature.title}</h3>
                            </div>

                            {/* Description box */}
                            <div className=" font-manrope bg-white text-[#1d1d1d] pl-4 pr-4 rounded-md text-sm w-[275px] h-[146px] flex items-center justify-center text-center -mx-1 mt-auto">
                                {feature.description}
                            </div>
                        </div>
                    ))}
                </div>
                 


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
                                <div className="mt-[30px]  flex justify-center items-center underline ">
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
            </section>
            <Footer />
        </div>
    )
}

export default Homepage