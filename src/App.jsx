// import { useState } from 'react'
import React from 'react'
import './App.css'
import SupportPage from './Pages/SupportPage';
import Homepage from './Pages/Homepage';
import { Routes, Route } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Support" element={<SupportPage />} />
    </Routes>
      
      
     
    </>
  )
}

export default App
