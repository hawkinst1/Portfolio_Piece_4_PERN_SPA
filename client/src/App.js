import React from 'react'
import "./App.css"


import { BrowserRouter, Navigate, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Register from './pages/register'
import { useSelector } from 'react-redux'


const PrivateRoutes = () => {
  const {isAuth} = useSelector(state => state.auth)

  return <>{isAuth ? <Outlet/> : <Navigate to="/"/>} </>
}

const RestrictedRoutes = () => {
  const {isAuth} = useSelector(state => state.auth)

  return <>{!isAuth ? <Outlet/> : <Navigate to="/Homepage"/>} </>
}

const App = () => {
  return (
   <BrowserRouter>   
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route element={<PrivateRoutes/>}>
        <Route path="/Homepage" element={<Homepage/>} />
      </Route>

      <Route element={<RestrictedRoutes/>}>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App