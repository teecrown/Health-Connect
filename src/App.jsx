// import { useState } from 'react'
import React from 'react'
import './App.css'
import SupportPage from './Pages/SupportPage'
import FindCare from './Pages/FindCare.jsx'
import { Routes, Route } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<SupportPage />} ></Route>
      <Route path="/findcare" element={<FindCare />} ></Route>
      {/* Add other routes here as needed */}
    </Routes>
      
      
     
    </>
  )
}

export default App
