import React from 'react'
import './App.css'
import BasePage from './UsePages/BasePage'
import Chef from './UsePages/Chef'
import Waiter from './UsePages/Waiter'
import { Routes, Routew } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasePage />} /> 
        <Route path="/chef" element={<Chef />} />
        <Route path="/waiter" element={<Waiter />} />
      </Routes>
    </div>
  );
}

export default App;