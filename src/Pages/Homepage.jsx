import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../assets/Hero.png'
import { FaShieldAlt, FaMapMarkerAlt, FaClock, FaCheckSquare } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';

const features = [
    {
        icon: <FaShieldAlt className="text-white text-2xl" />,
        title: "Verified Clinics & Pharmacies",
        description: "Easily find reliable healthcare providers near you.",
    },
    {
        icon: <HiOutlineDocumentCheck className="text-white text-2xl" />,
        title: "Expert-Reviewed Health Tips",
        description: "Get accurate, wellness advice you can trust.",
    },
    {
        icon: <FaMapMarkerAlt className="text-white text-2xl" />,
        title: "Location-Based Search",
        description: "Access care tailored to your area in just a few taps",
    },
    {
        icon: <FaClock className="text-white text-2xl" />,
        title: "Fast Medical Support",
        description: "Get expert responses to your inquiries within 12 hours.",
    },
    {
        icon: <FaCheckSquare className="text-white text-2xl" />,
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
                        <h1 className='text-5xl font-bold leading-100% mt-[133px]'> Find Trusted Healthcare, Fast </h1>
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
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={
                                "bg-gradient-to-b from-[#01447A] to-[#003362] text-white rounded-xl shadow-lg p-4 flex flex-col justify-between w-[295px] h-[306px]" +
                                (index % 3 === 1 ? " mx-[5px]" : "")
                            }
                        >
                            {/* Icon + Title */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className=" p-2 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                            </div>

                            {/* Description box */}
                            <div className="bg-white text-[#1d1d1d] p-4 rounded-md text-sm w-[275px] h-[146px] justify-center align-center">
                                {feature.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Homepage