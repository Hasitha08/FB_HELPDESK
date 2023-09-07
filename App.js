import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Connect from './pages/Connect'
import Login from './pages/Login'
import Register from './pages/Register'
import Delete from './pages/Delete'
import Agent from './pages/Agent'
import Home from './pages/Home'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/delete' element={<Delete />}/>
    <Route path='/connect' element={<Connect />}/>
    <Route path='/agent' element={<Agent />} />
   </Routes>
  )
}

export default App
