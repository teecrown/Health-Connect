import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import Hero from '../assets/Hero.png'
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaCheckSquare } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import hand from "../assets/hand.png";
import { FaHome, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import HowImage from "../assets/Laptop.png";
import { FaCloudUploadAlt } from "react-icons/fa";
import DoctorImg from "../assets/Male.png";

import mosq from "../assets/mosquito.png";
// import 2girls from "../assets/2girls.png";
import inject from "../assets/inject.png";
import bookmark from '../assets/bookmark.png';

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

                <div className="mb-15 mt-15 ml-15">
                    <div className='flex mb-7'>
                        <div className='bg-gradient-to-b from-[#01447A] to-[#003362] w-[295px] h-[306px] ml-15 rounded-[10px]'>
                            <icon> <FaShieldAlt className="font-manrope text-white text-2xl w-20 h-20 p-5" /></icon>
                            <h1 className='font-manrope font-bold text-[20px] leading-100% text-white w-[184px] h-[54px] ml-5'> Verified Clinics & Pharmacies </h1>
                            <div className='bg-white w-[275px] h-[146px] mx-2 mt-3 rounded-[5px]' >
                                <p className='font-manrope font-normal text-[20px] leading-100% w-[255px] h-[81px] pt-7 pl-3'>Easily find reliable healthcare providers near you.</p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-[#01447A] to-[#003362] w-[295px] h-[306px] ml-15 rounded-[10px]'>
                            <icon> <HiOutlineDocumentCheck className="font-manrope text-white text-2xl w-20 h-20 p-5" /></icon>
                            <h1 className='font-manrope font-bold text-[20px] leading-100% text-white w-[184px] h-[54px] ml-5'> Expert-Reviewed Health Tips </h1>
                            <div className='bg-white w-[275px] h-[146px] mx-2 mt-3 rounded-[5px]' >
                                <p className='font-manrope font-normal text-[20px] leading-100% w-[255px] h-[81px] pt-7 pl-3'> Get accurate, wellness advice you can trust. </p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-[#01447A] to-[#003362] w-[295px] h-[306px] ml-15 rounded-[10px]'>
                            <icon> <FaMapMarkerAlt className="font-manrope text-white text-2xl w-20 h-20 p-5" /></icon>
                            <h1 className='font-manrope font-bold text-[20px] leading-100% text-white w-[184px] h-[54px] ml-5'> Location-Based Search </h1>
                            <div className='bg-white w-[275px] h-[146px] mx-2 mt-3 rounded-[5px]' >
                                <p className='font-manrope font-normal text-[20px] leading-100% w-[255px] h-[81px] pt-7 pl-3'> Access care tailored to your area in just a few taps </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center align-center -ml-10'>
                        <div className='bg-gradient-to-b from-[#01447A] to-[#003362] w-[295px] h-[306px] ml-15 rounded-[10px]'>
                            <icon> <FaClock className="font-manrope text-white text-2xl w-20 h-20 p-5" /></icon>
                            <h1 className='font-manrope font-bold text-[20px] leading-100% text-white w-[184px] h-[54px] ml-5'> Fast Medical Support </h1>
                            <div className='bg-white w-[275px] h-[146px] mx-2 mt-3 rounded-[5px]' >
                                <p className='font-manrope font-normal text-[20px] leading-100% w-[255px] h-[81px] pt-7 pl-3'> Get expert responses to your inquiries within 12 hours. </p>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-[#01447A] to-[#003362] w-[295px] h-[306px] ml-15 rounded-[10px]'>
                            <icon> <FaCheckSquare className="font-manrope text-white text-2xl w-20 h-20 p-5" /></icon>
                            <h1 className='font-manrope font-bold text-[20px] leading-100% text-white w-[184px] h-[54px] ml-5'> User-Friendly Experience </h1>
                            <div className='bg-white w-[275px] h-[146px] mx-2 mt-3 rounded-[5px]' >
                                <p className='font-manrope font-normal text-[20px] leading-100% w-[255px] h-[81px] pt-7 pl-3'> Simple, mobile-first design built with your convenience in mind. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-12 px-6 lg:px-16" style={{ backgroundImage: `url('/src/assets/bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Section - Text and Image */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white font-[900]">How It Works</h2>
                            <p className="text-white font-[700] leading-relaxed">
                                Whether you're looking for the nearest clinic, health tips, or expert support,
                                <span className="font-semibold"> Health Connect</span> makes it easy to get what you
                                need when you need it.
                            </p>
                            <img
                                src={HowImage}
                                alt="Health illustration"
                                className="rounded-lg shadow-md w-full object-cover"
                            />
                        </div>

                        {/* Right Section - Steps */}
                        <div className="space-y-5">
                            {/* Card 1 */}
                            <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                <FaHome className="text-green-600 text-2xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Search for Care</h3>
                                    <p className="text-gray-600 text-sm">
                                        Use our smart search to find nearby clinics, pharmacies, or healthcare providers—filtered
                                        by location and service type.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                <FaLightbulb className="text-green-600 text-2xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Learn & Stay Informed</h3>
                                    <p className="text-gray-600 text-sm">
                                        Browse expert-reviewed health tips, updates, and wellness advice—all in one place.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                <FaHandsHelping className="text-green-600 text-2xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Get Support</h3>
                                    <p className="text-gray-600 text-sm">
                                        Submit your health questions and get a professional response within 12 hours.
                                        In emergencies, use our clinic locator for fast access to care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-red font-manrope py-12 px-6 lg:px-16">
                     <div className='w-[924px] h-[193px] flex flex-col justify-center align-center ml-25 '>
                            <h2 className="text-2xl font-bold mb-2 flex justify-center align-center -pl-7">Consult a Medical Expert</h2>
                            <p className="text-sm font-[300] mb-6 w-[724px] h-[105px] mt-7 pl-15">
                                Have a health concern? Get reliable answers from certified medical professionals.
                                Submit your question and an expert will respond within 12 hours. For urgent issues,
                                please locate the nearest healthcare facility using our Find a Clinic tool.
                            </p>
                        </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                       
                        {/* Form Section */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">

                            <form className="space-y-4" >
                                {/* Full Name */}
                                <div>
                                    <label className="block mb-1 text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        className="w-full border border-green-500 rounded px-3 py-2 text-black"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-1 text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-green-500 rounded px-3 py-2 text-black"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block mb-1 text-sm">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full border border-green-500 rounded px-3 py-2 text-black"
                                    />
                                </div>

                                {/* Medical Category */}
                                <div>
                                    <label className="block mb-1 text-sm">Medical Category</label>
                                    <select
                                        name="category"
                                        className="w-full border border-green-500 rounded px-3 py-2 text-black"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                        <option value="Pediatrician">Pediatrician</option>
                                        <option value="General">General</option>
                                    </select>
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block mb-1 text-sm">
                                        Upload Image or File (if necessary)
                                    </label>
                                    <label className="flex items-center cursor-pointer bg-green-600 hover:bg-green-700 px-4 py-2 text-white rounded-md w-fit gap-2">
                                        <FaCloudUploadAlt />
                                        <span>Upload File</span>
                                        <input
                                            type="file"
                                            name="file"
                                            className="hidden"
                                        />
                                    </label>
                                    {/* {formData.file && (
                                        <p className="text-xs text-gray-400 mt-1">
                                            {formData.file.name}
                                        </p>
                                    )} */}
                                </div>

                                {/* Health Concern */}
                                <div>
                                    <label className="block mb-1 text-sm">Your Health Concern</label>
                                    <textarea
                                        name="concern"
                                        placeholder="Describe your concern"
                                        className="w-full border border-green-500 rounded px-3 py-2 text-black"
                                        rows="4"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
                                >
                                    Send to Medical Expert
                                </button>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src={DoctorImg}
                                alt="Medical Expert"
                                className="rounded-lg shadow-md w-[80%] object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div>

                    {/* //cards  */}

                    <div className=" mb-[56px] bg-[#F0F3F6] px-[10px] sm:px-[100px]">
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
                <div className=" flex  items-center -mt-20  justify-center  h-[135px] sm:h-[200px] md:h-[598px] bg-gradient-to-b from-[#195188] to-[#061522] w-full  ">
                    <div className=" flex flex-col justify-between align-middle items-center w-[352px] h-[79px] sm:w-[548px] sm:h-[102px] md:w-[748px] md:h-[162px] ">
                        <h1 className="text-[#FFFFFF] font-Manrope font-700 text-[21px] sm:text-[35px] leading-[100%] text-center">
                            Find Care Near You, Fast
                        </h1>
                        <p className='w-[945px] h-[70px] flex justify-center align-center text-white mt-10 mb-10 font-normal text-[20px] leading-[35px] text-center'>Looking for a trusted clinic, pharmacy, or healthcare provider in your area? With Health Connect’s smart 
                            search, you’re just one click away from verified care options around you.</p>
                        <label htmlFor="" className="">
                            <input
                                type="search"
                                name=" search"
                                id="search"
                                placeholder="Maternity care close to me"
                                className="w-[200px] h-[33px] sm:w-[408px] sm:h-[62px] rounded-[20px] bg-[#FFFFFF] pl-[20px] mb-7 "
                            />
                        </label>
                        <button
                                type="submit"
                                name="search"
                                className="bg-[#0B9A55] w-[90px] h-[33px] sm:w-[170px] sm:h-[67px] text-white rounded-[10px] cursor-pointer hover:bg-green-700"
                            >
                                {" "}
                                search now{" "}
                            </button>
                    </div>
                </div>
                <FAQ />
                
            </section>
            <Footer />
        </div>
    )
}

export default Homepage