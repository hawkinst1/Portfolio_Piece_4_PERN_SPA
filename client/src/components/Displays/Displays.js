import React from 'react'
import "./Displays.css"

import {images} from "../../constants"

function Displays() {
  return (
    <div className='display__container' id="display">
      <h1 className='title__Style big'>Displays</h1>
      <div className='display__container-grid'>
        <div className='display__container-grid_content flex_center'>
          <h2 className='title__Style'>Anglo-Saxon</h2>
          <div className='display__container-grid_item'>
            <img src={images.medievalImg} width="100%"/>
          </div>
        </div>
        <div className='display__container-grid_content flex_center'>
          <h2 className='title__Style'>Prehistoric</h2>
          <div className='display__container-grid_item'>
            <img src={images.bone_archives} width="100%"/>
          </div>
        </div>
        <div className='display__container-grid_content flex_center'>
          <h2 className='title__Style'>Modern Warfare</h2>
          <div className='display__container-grid_item'>
            <img src={images.ww2_archive} width="100%"/>
          </div>
        </div>
        <div className='display__container-grid_content flex_center'>
          <h2 className='title__Style'>Natural History</h2>
          <div className='display__container-grid_item'>
            <img src={images.specimen_archive} width="100%"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Displays