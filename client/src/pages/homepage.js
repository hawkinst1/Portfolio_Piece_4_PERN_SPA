import React from 'react'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedData, onLogout } from '../api/authApi'
import { unAuthenticateUser } from '../redux/slices/authSlice'
import "../App.css"

import Introduction from '../components/Introduction/Introduction'
import Displays from "../components/Displays/Displays"
import CafeMenu from "../components/CafeMenu/CafeMenu"
import Footer from "../components/Footer/Footer"
import Archives_ from '../components/Archives_/Archives_'
import MembersLounge from "../components/MembersLounge/Members"
import Spacing from "../components/spacing/spacing"

const Homepage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)
  const logout = async () => {
    try {
      await onLogout()

      dispatch(unAuthenticateUser())
      localStorage.removeItem("isAuthenticated")
    } catch (error) {
      console.log(error)
    }
  }
  
  const protectedInfo = async () => {
    try {
      const {data} = await fetchProtectedData()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      logout() 
    }
  }

  useEffect(() => {
    protectedInfo()
  }, [])

  return loading ? (
    <Layout>
      <h1>
        loading...
      </h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <Spacing/>
        <Introduction/>
        <Archives_/>
        <MembersLounge/>
        <Displays/>
        <CafeMenu/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Homepage 