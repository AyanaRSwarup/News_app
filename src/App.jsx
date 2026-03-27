import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Router } from 'react-router-dom'
import All from './components/pages/All'
import Entertainment from './components/pages/Entertainment'
import Technology from './components/pages/Technology'
import Health from './components/pages/Health'
import Sports from './components/pages/Sports'
import Scrolldata from './components/pages/Marquee/Scrolldata.jsx'
import Stock_api from './api/Stock_api'

const App = () => {
  return (
    <div>
      
        <Stock_api>
            <Navbar />
            <Scrolldata />
            <Routes>
              <Route path='/' element={<All/>}/>
              <Route path='/entertainment' element={<Entertainment/>}/>
              <Route path='/tech' element={<Technology/>}/>
              <Route path='/health' element={<Health/>}/>
              <Route path='/sports' element={<Sports/>}/>
            </Routes>
        </Stock_api>
     
      
    </div>
  )
}

export default App
