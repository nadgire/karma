import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import AboutUs from './components/about-us/AboutUs'
import ContactUs from './components/contact-us/ContactUs'
import Dashboard from './components/dashboard/Dashboard'
import Signup from './components/Signup'
import ChangePassword from './components/ChangePassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<Dashboard />} />
          <Route path="/dashboard/education" element={<Dashboard />} />
          <Route path="/dashboard/experience" element={<Dashboard />} />
          <Route path="/dashboard/feedback" element={<Dashboard />} />
          <Route path="/dashboard/change-password" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
