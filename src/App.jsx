import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/herosection/HeroSection'
import Home from './components/pages/home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
          <Routes>
            <Route path='/' exact component={Home} />
          </Routes>         
      </Router>

      
    </>
  )
}

export default App