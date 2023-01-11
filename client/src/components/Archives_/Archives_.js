import React from 'react'
import "./Archives_.css"
import {images} from "../../constants"

function Archives_() {
  return (
    <div className='archives__container flex_center' id="archives">
      <h1 className='title__Style big'>Archives of London's Museum</h1>
      <div className='archives__container-web'>
        <div className='archives__container-web_bubble bubble_1'>
          <img src={images.steam_archive} alt="bubble_image" width={"100%"} /> 
        </div>
        <div className='archives__container-web_bubble bubble_2'>
        <img src={images.roman_archive} alt="bubble_image" width={"100%"}/>
        </div>
        <div className='archives__container-web_bubble bubble_3'>
          <img src={images.specimen_archive} alt="bubble_image"/>
        </div>
        <div className='archives__container-web_bubble bubble_4'>
          <img src={images.ww2_archive} alt="bubble_image"/>
        </div>
        <div className='archives__container-web_bubble bubble_5'>
          <img src={images.bone_archives} alt="bubble_image" />
        </div>
        <div className='archives__container-web_bubble bubble_6'>
          <img src={images.medievalImg} alt="bubble_image" />  
        </div>
      </div>
      <div className='archives__container-spacer'/> 
    </div>
  )
}

export default Archives_