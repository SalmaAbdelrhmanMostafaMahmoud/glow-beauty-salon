import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  return (
    <>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
</Routes>
    </>
  )
}

export default App
