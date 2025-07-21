// import { useState } from 'react'
import React from 'react'
import './App.css'
import SupportPage from './Pages/SupportPage'
import { Routes, Route } from "react-router";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<SupportPage />} ></Route>
    </Routes>
      
      
     
    </>
  )
}

export default App
