import React from 'react'
import "./CafeMenu.css"
import { menu } from '../../constants'
import MenuItem from './MenuItem/MenuItem'

function CafeMenu() {
  return (
    <div className="cafe__container body_plain flex_center" id="cafe">
      <h1 className='title__Style big'>Cafe</h1>
      <div className='cafe__container-content'>
        <div className='cafe__container-content-left'>
          <h2 className='title__Style'>Drinks</h2>
          <div className='flex_center cafe__container-content-left_menu'>
            {menu.cafeMenu.map((item,index) => (
              item.category === "drink" ? <MenuItem key={item.category + index} title={item.item} price={item.price} memberPrice={item.memberPrice}/> : null 
            ))}
          </div>
        </div>
        <div className='cafe__container-content-middle'></div>
        <div className='cafe__container-content-right '>
        <h2 className='title__Style'>Food</h2>
        <div className='flex_center cafe__container-content-left_menu'>
            {menu.cafeMenu.map((item,index) => (
              item.category === "food" ? <MenuItem key={item.category + index} title={item.item} price={item.price} memberPrice={item.memberPrice}/> : null 
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CafeMenu

