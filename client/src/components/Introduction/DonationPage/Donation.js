import React from 'react'
import "./Donation.css"

function Donation() {
  return (
    <div className='donation__container body_standard_small flex_center'>
      <div className='donation__container-main'>
        <div>
          <h1 className='title__style-bold'>Support the Collection</h1>
        </div>
        <div className='donation__container-main_buttons'>
          <div className='btn_style_2'>
              Become a Member
          </div>
          <div className='btn_style_2'>
              Make a donation
          </div>
        </div>
      </div>

    </div>
  )
}

export default Donation