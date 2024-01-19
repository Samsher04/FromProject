import { useState } from 'react'
import './App.css'
import RegistrationForm from './Component/Form'
import AddressForm from './Component/Form2'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<RegistrationForm />} />
       <Route path="/add" element={<AddressForm />} />
    </Routes>
    </>
  )
}

export default App
