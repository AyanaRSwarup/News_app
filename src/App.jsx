import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import All from './components/pages/all'
import Entertainment from './components/pages/Entertainment'
import Technology from './components/pages/Technology'
import Health from './components/pages/Health'
import Sports from './components/pages/Sports'

const App = () => {
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/tech' element={<Technology/>}/>
        <Route path='/health' element={<Health/>}/>
        <Route path='/sports' element={<Sports/>}/>
      </Routes>
    </div>
  )
}

export default App