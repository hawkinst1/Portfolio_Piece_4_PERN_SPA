import React from 'react'
import "./MenuItem.css"


function MenuItem({title,price,memberPrice}) {
  return (
    <div className='menuItem__container'>
     <p className='p__style_1'>{title}</p>
     <p className='p__style_1'>Price ...... {price}</p>
     <p className='p__style_1'>Member Price ...... {memberPrice}</p>
    </div>
  )
}

export default MenuItem