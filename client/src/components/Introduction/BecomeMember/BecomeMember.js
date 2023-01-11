import "./BecomeMember.css"
import React from 'react'
import { NavLink } from "react-router-dom"


function BecomeMember() {
  return (
    <div className="BM__container body_standard flex_center">
        <div className="BM__container-content flex_center">
            <h1 className="title__Style">Become a Member</h1>
            <div className="BM__container-content-text flex_center">
                <h4 className="title__Style_h4 pL-2">Access archives hidden to the public</h4>
                <p className="p__style_1 pL-2"> sample text sample text sample text sample text sample text sample text </p>
                <h4 className="title__Style_h4 pL-2">Discount on Parking</h4>
                <p className="p__style_1 pL-2"> sample text sample text sample text sample text sample text sample text </p>
                <h4 className="title__Style_h4 pL-2">Earn Rewards for membership length</h4>
                <p className="p__style_1 pL-2"> sample text sample text sample text sample text sample text sample text </p>
            </div>
            <div className="btn_style_1"><NavLink to="/register" >Join Now</NavLink></div>
        </div>
    </div>
  )
}

export default BecomeMember