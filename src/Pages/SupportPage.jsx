import React from "react";
import Navbar from "../Components/Navbar";
import FindCare from "./Healthtips.jsx";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

const SupportPage = () => {
  return (
    <div>
      <Navbar />
      <FindCare />

      <FAQ />
      <Footer />
    </div>
  );
};

export default SupportPage;
