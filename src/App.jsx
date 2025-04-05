import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Dashboard />} />
          <Route path="/change-password" element={<Dashboard />} />
          <Route path="/delete-account" element={<Dashboard />} />
          <Route path="/logout" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
