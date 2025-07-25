// import { useState } from 'react'
import React from "react";
import "./App.css";
// import SupportPage from './Pages/SupportPage'
import FindMedicalCare from "./Pages/FindMedicalCare";
import SupportPage from "./Pages/SupportPage";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router";
import Healthtips from "./Pages/Healthtips";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/healthtips" element={<Healthtips />} />
        <Route path="/findcare" element={<FindMedicalCare />} />
        {/* Add other routes here as needed */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Support" element={<SupportPage />} />
      </Routes>
    </>
  );
}

export default App;
