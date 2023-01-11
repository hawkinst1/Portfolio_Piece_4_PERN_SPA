import React from 'react'
import "./Members.css"

function Members() {
  return (
    <div className='members__container' id="members">
      <div className='members__container-content'>
      <h1 className='title__Style big'>Members Lounge</h1>
        <div>
        <br></br>
        <br></br>
          <h3 className='title__Style '>Access All Areas</h3>
          <p className='p__style_1'>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text 
          sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text 
          sample text sample text sample text sample text sample text sample text 
          </p>
        </div>
        <br></br>
        <br></br>
        <div>
          <h3 className='title__Style '>Research Access</h3>
          <p className='p__style_1'>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text 
          sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text 
          sample text sample text sample text sample text sample text sample text 
          </p>
        </div>
      </div>
      <div className='members_right'></div>
    </div>
  )
}

export default Members