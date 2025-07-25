// import { useState } from 'react'
import React from 'react'
import './App.css'

import FindCare from './Pages/FindCare.jsx'
import SupportPage from './Pages/SupportPage';
import Homepage from './Pages/Homepage';
import { Routes, Route } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/Findcare" element={<FindCare />} ></Route>
      {/* Add other routes here as needed */}
      <Route path="/" element={<Homepage />} />
      <Route path="/SupportPage" element={<SupportPage />} />
    </Routes>
      
      
     
    </>
  )
}

export default App
