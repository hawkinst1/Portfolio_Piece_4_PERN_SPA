import "./Navbar.css"


import {images} from "../../constants/index"
import { useDispatch } from 'react-redux'
import { unAuthenticateUser } from '../../redux/slices/authSlice'
import { fetchProtectedData, onLogout } from '../../api/authApi'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react"


const Navbar = () =>{

    let isHovered = false;
 


    const dispatch = useDispatch()
    const logout = async () => {
        try {
          await onLogout()
          dispatch(unAuthenticateUser())
          localStorage.removeItem("isAuthenticated")
        } catch (error) {
          console.log(error)
        }
      }
    
      const {isAuth} = useSelector(state => state.auth)

      const menuDisplay =( ) => {
        const menuIcon = document.getElementById("mobile__menu");
        if(isHovered){
            menuIcon.classList.remove("mobile__navbar-menu-icon_click")   
            isHovered = false     
        } else {
            menuIcon.classList.add("mobile__navbar-menu-icon_click")
            isHovered = true
        }
      }

  return (
        <section className="app__navbar flex_center">
            <div>
                <img src={images.logo} alt="logo text"/>    
            </div>
            <div className="mobile__navbar">
                <div className="mobile__navbar-menu-icon" id="mobile__menu"/> 
               <span style={{color:"white"}}  onClick={menuDisplay}>Menu</span>
            </div>
           
            <nav className="app__navbar-menu menu__text">
                    <ul className="app__navbar-menu_list title_style ">
                        <li>
                            <NavLink to="/" >
                                <span>Home</span>
                            </NavLink>
                        </li>

                        {isAuth ? (
                            <div style={{display:"inline"}}>
                                <li>
                                    <a href="#members" >
                                        <span>Members</span>
                                    </a>                            
                                </li>
                                <li>
                                    <a href="#archives" >
                                        <span>Archives</span>
                                    </a>
                                    </li>
                                <li>
                                    <a href="#offers" >
                                        <span>Special Offers</span>
                                    </a>
                                </li>
                           </div>
                            ) : (
                                <div style={{display:"inline"}}>
                                    <li style={
                                        {padding: "0", margin: "0"}}>
                                        
                                    </li>
                                </div>
                        )}
                        <li>
                            <a href="#display"  >
                                <span>Display</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cafe" >
                                <span>Cafe</span>
                            </a>
                        </li>
                    </ul>
            </nav>
            <div className="app__navbar-options">
            <div className="app__divider"/>
                    {isAuth ? (
                    <div>
                        <span 
                            className={"app__normalText"} 
                            style={{cursor:"pointer"}}
                            onClick={() => logout()}                          
                            >
                            Logout
                        </span>  
                    </div>    
                    ) : (
                        <div
                        >                           
                            <NavLink to="/register" className={"app__normalText"}>
                                <span>Register</span>                         
                            </NavLink>  
                            <span className="app__normalText"> | </span>
                            <NavLink to="/login" className={"app__normalText"}>
                                <span>Login</span>                         
                            </NavLink>                      
                        </div>   
                    )
                        
                    }
            </div>
        </section>

  )
}

export default Navbar