import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'

const AppRouter = () => {
  return (
   <BrowserRouter>
   <Navbar />
       <Routes>

           <Route exact path="/"  element={<Dashboard/>} />
           <Route path="/register"  element={<Register/>} />
           <Route path="/login"  element={<Login/>} />
           <Route path="/newBlog"  element={<NewBlog/>} />
           <Route path="/details"  element={<Details/>} />
           <Route path="/profile"  element={<Profile/>} />
           <Route path="/updateBlog"  element={<UpdateBlog/>} />
       </Routes>
   </BrowserRouter>
  )
}

export default AppRouter