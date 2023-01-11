import React from 'react'
import { useSelector } from "react-redux";
import "./Footer.css"
import {images} from "../../constants"
import Navbar from "../navbar/navbar"

function Footer() {
  const {isAuth} = useSelector(state => state.auth)
  return (
    <section >
      {
        isAuth ? (
          <div className='footer__member_container body_standard'>
            <div className='footer__member_container_content flex_center'>
              <div className='footer__member-icons flex_center'>
                <div className='footer__member-icons-header'>
                  <h1 className='title__Style'>Connect</h1>
                </div>
                <div className='footer__member-icons-images'>
                  <img src={images.facebook} height="100px"/>
                  <img src={images.instagram} height="100px"/>
                  <img src={images.twitter} height="100px"/>
                  <img src={images.youtube} height="100px"/>
                </div>
              </div>
              <div className='footer__member-links'>
                <Navbar/>
              </div>
            </div>
          </div>
        ) : (
          <div className='footer__member_container body_standard'>
            <div className='footer__member_container_content flex_center'>
              <div className='footer__member-icons flex_center'>
                  <div className='footer__member-icons-header'>
                    <h1 className='title__Style'>Connect</h1>
                  </div>
                  <div className='footer__member-icons-images'>
                    <img src={images.facebook} height="100px"/>
                    <img src={images.instagram} height="100px"/>
                    <img src={images.twitter} height="100px"/>
                    <img src={images.youtube} height="100px"/>
                  </div>
                </div>
                <div className='footer__member-links'>
                  <Navbar/>
              </div>
            </div>
          </div>
        )

      }

    </section>
  )
}

export default Footer