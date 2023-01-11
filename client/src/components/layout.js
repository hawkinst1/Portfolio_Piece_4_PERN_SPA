import React from 'react'
import Navbar from './navbar/navbar'

const Layout = ({children})=> {
  
  return (
    <div >
        <Navbar/>
        <div className='body_standard'>
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}

export default Layout