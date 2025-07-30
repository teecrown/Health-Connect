// import { useState } from 'react'
import React from 'react'
import './App.css'

import FindCare from './Pages/FindCare'
import Healthtips from './Pages/Healthtips'
import SupportPage from './Pages/SupportPage';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login'
import { Routes, Route } from "react-router";
// import Healthtips from "./Pages/Healthtips";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/FindCare" element={<FindCare />} />
      {/* Add other routes here as needed */}
      <Route path="/" element={<Homepage />} />
      <Route path="/SupportPage" element={<SupportPage />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Healthtips" element={<Healthtips />} />
    </Routes>
      
      
     
    </>
  );
}

export default App;
