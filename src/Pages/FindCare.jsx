import React, { useState } from "react";
import { FaSearch, FaStar, FaRegStar } from "react-icons/fa";
import Family from '../assets/Family.png'
import Olivet from '../assets/Olivet.png'
import Life from '../assets/Lifespring.png'
import Medical from '../assets/Medical.png'
import Wellness from '../assets/Wellness.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const clinics = [
  {
    id: 1,
    name: "Olivet Family Clinic",
    image: Olivet ,
    location: "Bodija, Ibadan",
    rating: 4.5,
    hours: "Mon–Sat, 8AM–6PM",
    specialties: "General Medicine, Pediatrics, Immunization",
    contact: "0803 456 7890",
    distance: "2.3 km",
    note: "Highly rated for family-centered care and child-friendly staff.",
  },
  {
    id: 2,
    name: "LifeSpring Medical Centre",
    image: Life,
    location: "Ring Road, Ibadan",
    rating: 4.2,
    hours: "24/7",
    specialties: "Emergency Care, Lab Tests, Women’s Health",
    contact: "0803 456 7890",
    distance: "4.1 km",
    note: "Known for fast emergency response and efficient diagnostics.",
  },
  {
    id: 3,
    name: "WellnessPlus Clinic & Diagnostics",
    image: Wellness,
    location: "Challenge, Ibadan",
    rating: 3.9,
    hours: "Mon–Sat, 9AM–5PM",
    specialties: "Diagnostics, Internal Medicine, Preventive Care",
    contact: "0803 456 7890",
    distance: "3.7 km",
    note: "Offers affordable lab tests and health checkup packages.",
  },
  {
    id: 4,
    name: "Olivet Family Clinic",
    image: Family,
    location: "Bodija, Ibadan",
    rating: 4.5,
    hours: "Mon–Sat, 8AM–6PM",
    specialties: "General Medicine, Pediatrics, Immunization",
    contact: "0803 456 7890",
    distance: "2.3 km",
    note: "Highly rated for family-centered care and child-friendly staff.",
  },
  {
    id: 5,
    name: "LifeSpring Medical Centre",
    image: Medical,
    location: "Ring Road, Ibadan",
    rating: 4.2,
    hours: "24/7",
    specialties: "Emergency Care, Lab Tests, Women’s Health",
    contact: "0803 456 7890",
    distance: "4.1 km",
    note: "Known for fast emergency response and efficient diagnostics.",
  },
  
];

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<FaStar key={i} className="text-black-500" />);
    else if (i === fullStars && half) stars.push(<FaStar key={i} className="text-black-300" />);
    else stars.push(<FaRegStar key={i} className="text-black-300" />);
  }
  return <div className="flex gap-1">{stars}</div>;
};

const MedicalSearch = () => {
  const [search, setSearch] = useState("");

  const handleBook = (clinic) => {
    alert(`Booking appointment at ${clinic.name}`);
  };

  const handleSave = (clinic) => {
    alert(`Saved ${clinic.name} for later`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <Navbar />
      {/* Header & Search */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-3">Find Medical care</h1>
        <div className="flex justify-center items-center max-w-xl mx-auto bg-white border rounded-md px-3 py-2 shadow">
          <input
            type="text"
            placeholder="Find health care centers and pharmacies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
          <FaSearch className="text-green-600 ml-2" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4 w-full bg-white rounded-md shadow p-4">
          <h2 className="font-semibold mb-3">Service type</h2>
          <div className="space-y-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="service" defaultChecked />
              Clinic
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="service" />
              Pharmacy
            </label>
          </div>

          <h2 className="font-semibold mb-3">Customer Ratings</h2>
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="flex items-center gap-2 mb-1">
              <input type="radio" name="rating" />
              <div className="flex text-black-500">
                {[...Array(star)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </label>
          ))}

          <h2 className="font-semibold my-3">Availability</h2>
          {["Available now", "Within 3 hours", "Within 6 hours", "Within 12 hours"].map((t, i) => (
            <label key={i} className="block mb-2">
              <input type="radio" name="availability" className="mr-2" />
              {t}
            </label>
          ))}
        </div>

        {/* Clinic Results */}
        <div className="flex-1 space-y-6">
          <p className="text-sm text-gray-500">5 of 20 results</p>
          {clinics.map((clinic) => (
            <div key={clinic.id} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4">
              {/* Image */}
              <div className="md:w-1/3 w-full">
                <img src={clinic.image} alt={clinic.name} className="rounded-md w-full h-40 object-cover" />
                <div className="mt-2 text-sm text-gray-600">
                  {clinic.location} <br />
                  <span className="flex items-center gap-1">
                    <StarRating rating={clinic.rating} /> ({clinic.rating}/5)
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="md:w-2/3 w-full flex flex-col justify-between">
                <div className="space-y-1 text-sm">
                  <p><strong>Opening Hours:</strong> {clinic.hours}</p>
                  <p><strong>Specialties:</strong> {clinic.specialties}</p>
                  <p><strong>Contact:</strong> {clinic.contact}</p>
                  <p><strong>Distance:</strong> {clinic.distance} from your location</p>
                  <p className="text-green-700 font-medium">{clinic.note}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleBook(clinic)}
                    className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => handleSave(clinic)}
                    className="border border-gray-300 py-1 px-4 rounded hover:bg-gray-100"
                  >
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
            Next page
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MedicalSearch;
