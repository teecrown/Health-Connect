import React from 'react'
import Navbar from '../Components/Navbar'
// import hand from '../assets/hand.png'
import reception from '../assets/reception.png'
import machine from '../assets/machine.png'
import beds from '../assets/beds.png'
import nurse from '../assets/nurse.png'
import hallway from '../assets/hallway.png'
import { useState } from 'react';
import Footer from '../Components/Footer'

export default function FindMedicalCare() {
// const FindMedicalCare = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState(null);

  const clinics = [
    {
      name: "Olivet Family Clinic",
      image: reception,
      hours: "Mon– Sat, 8AM–6PM",
      specialties: "General Medicine, Pediatrics, Immunization",
      contact: "0803 456 7890",
      distance: "2.3 km",
      location: "Molete,Ibadan",
      description: "Highly rated for family-centered care and child-friendly staff.",
      rating: 4.5,
    },
    {
      name: "LifeSpring Medical Centre",
      image: machine,
      hours: "24/7",
      specialties: "Emergency Care, Lab Tests, Women’s Health",
      contact: "0803 456 7890",
      distance: "4.1 km",
      location: "Obantoko,Abeokuta",
      description: "Known for fast emergency response and efficient diagnostics.",
      rating: 4.2,
    },
    {
      name: "WellnessPlus Clinic & Diagnostics",
      image: beds,
      hours: "Mon–Sat, 9AM–5PM",
      specialties: "Diagnostics, Internal Medicine, Preventive Care",
      contact: "0803 456 7890",
      distance: "3.7 km",
      location: "Ring road",
      description: "Offers affordable lab tests and health checkup packages.",
      rating: 3.9,
    },
     {
      name: "Twins Family Clinic",
      image: nurse,
      hours: "Mon– Sat, 8AM–6PM",
      specialties: "General Medicine, Pediatrics, Immunization",
      contact: "0803 456 7890",
      distance: "2.3 km",
      location: "Challenge, Ibadan",
      description: "Highly rated for family-centered care and child-friendly staff.",
      rating: 3.5,
    },
    {
      name: "Grace Medical Centre",
      image: hallway,
      hours: "24/7",
      specialties: "Emergency Care, Lab Tests, Women’s Health",
      contact: "0803 456 7890",
      distance: "4.1 km",
      location: "Bodija, Ibadan",
      description: "Known for fast emergency response and efficient diagnostics.",
      rating: 2.2,
    },
  ];

  const filteredClinics = clinics.filter(
    (clinic) =>
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!ratingFilter || Math.floor(clinic.rating) === ratingFilter)
  );
  return (
    
    <div>
        <Navbar />
         <div className=" flex  items-center  justify-center  h-[135px] sm:h-[200px] md:h-[238px] bg-gradient-to-b from-[#195188] to-[#061522] w-full  ">
        <div className=" flex flex-col justify-between align-middle items-center w-[352px] h-[79px] sm:w-[548px] sm:h-[102px] md:w-[748px] md:h-[162px] ">
          <h1 className="text-[#FFFFFF] font-Manrope font-700 text-[21px] sm:text-[45px] leading-[100%] text-center">
            Find Medical Care
          </h1>
          <label htmlFor="" className="">
            <input
              type="search"
              name=" search"
              id="search"
              placeholder="Find Helth care centers and pharmacies"
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




  
    <div className=" relative flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-64 ml-[50px] bg-white shadow-lg  left-0 top-0 h-full p-6 z-10">
        <div>
          <div className="text-sm font-semibold text-gray-700 mb-4">Enter your location</div>
          <p className="text-blue-600 cursor-pointer mb-6">pick on map</p>

          <div className="mb-6">
            <h2 className="font-semibold mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search clinic name"
              className="w-full px-3 py-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-2">Customer Ratings</h2>
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars} className="block mb-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="mr-2"
                  onChange={() => setRatingFilter(stars)}
                  checked={ratingFilter === stars}
                />
                {"★".repeat(stars)}
              </label>
            ))}
            <label className="block mt-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                className="mr-2"
                onChange={() => setRatingFilter(null)}
                checked={ratingFilter === null}
              />
              All Ratings
            </label>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className=" relative ml-6 p-6 overflow-y-scroll w-full">
        <div className="space-y-10">
          {filteredClinics.map((clinic, index) => (
            <div key={index} className="flex bg-white shadow rounded-xl p-4">
              <div>
               <h2 className="text-xl font-semibold mb-1 w-[170px]">{clinic.name}</h2>
                
                 <img
                src={clinic.image}
                alt={clinic.name}
                className="w-40 h-32 rounded-lg object-cover mr-6"
              />
             <div className="flex flex-col items-start mb-2">
<h2>{clinic.location}</h2>
    {/* Show filled stars for the rating */}
   <h2>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.round(clinic.rating) ? "text-[#061522]" : "text-gray-300"}>
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-600">{clinic.rating}</span>
    </h2> 
  </div>
             </div>
              <div className="flex-1">
                
                <div className="grid grid-cols-2 gap-x-4 text-sm mb-2">
                  <div>
                    <p><span className="font-semibold">Opening Hours:</span> {clinic.hours}</p>
                    <p><span className="font-semibold">Specialties:</span> {clinic.specialties}</p>
                  <div>
                    <p><span className="font-semibold">Contact:</span> {clinic.contact}</p>
                    <p><span className="font-semibold">Distance:</span> {clinic.distance} from your location</p>
                  </div>
                  </div>
                </div>
            <p className="text-sm text-[#0E3924] mb-2">{clinic.description}</p>
                <div className="flex items-center gap-4">
                  <button className="bg-green-600 text-white px-4 py-1 rounded">Book Appointment</button>
                  <button className="border border-green-600 text-green-600 px-4 py-1 rounded">Save for Later</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  



<Footer />
    </div>
  )
}

// export default FindMedicalCare