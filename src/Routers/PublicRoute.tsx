import React, { useEffect, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import { AdminDashboard } from '../Components/AdminDashboard'
import { Dashboard } from '../Components/Dashboard'
import { About } from '../Pages/About'
import { Admin } from '../Pages/Admin'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Signup } from '../Pages/Signup'

export const PublicRoute = () => {
  const [userToken,setUserToken ] = useState<any>(localStorage.getItem("userToken"))
  const [adminToken, setAdminToken] = useState<any>(localStorage.getItem("adminToken"))

  useEffect(()=>{
    setUserToken(localStorage.getItem("userToken"))
    setAdminToken(localStorage.getItem("adminToken"))
  },[userToken,adminToken])
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/adminDashboard' element={<AdminDashboard />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  )
}
