import React from 'react'
import Layout from '../components/layout'
import "../App.css"
import Introduction from '../components/Introduction/Introduction'
import Displays from "../components/Displays/Displays"
import CafeMenu from "../components/CafeMenu/CafeMenu"
import Footer from "../components/Footer/Footer"
import Spacing from '../components/spacing/spacing'


function Home() {
  return (
    <Layout>     
     
        <Introduction/>
        <Displays/>
        <CafeMenu/>
        <Footer/>
      </Layout>
  )
}

export default Home