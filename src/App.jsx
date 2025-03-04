import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import AboutUs from './components/about-us/AboutUs'
import ContactUs from './components/contact-us/ContactUs'
import EmployeeDashboard from './components/empdashboard/EmployeeDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee-dashboard/profile" element={<EmployeeDashboard />} />
          <Route path="/employee-dashboard/education" element={<EmployeeDashboard />} />
          <Route path="/employee-dashboard/experience" element={<EmployeeDashboard />} />
          <Route path="/employee-dashboard/feedback" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
