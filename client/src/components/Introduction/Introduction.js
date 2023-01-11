import React from 'react'
import "./Introduction.css"
import { useSelector } from "react-redux";

import Exhibition_events from './Exhibitions_events/Exhibition_events';
import Donation from './DonationPage/Donation';
import BecomeMember from './BecomeMember/BecomeMember';



function Introduction() {
  const {isAuth} = useSelector(state => state.auth)
  return (
    <section >
      {
        isAuth ? (
          <div>           
            <div className='opaque-box width_styling'>
              <h1 className='title__Style intro__members-header'><span className='intro__members-header_E'>E</span>xplore the natural and social history of our city</h1>
            </div>
            <div className='intro__members-header-divider'/>
            <div className='app__introduction'>
              <Exhibition_events/>
            </div>
            <div className='app__intro-donation'>
              <Donation/>
            </div>

          </div>
        ) : (
          <div>
            <BecomeMember/>
          </div>
        )          
      }
      <div>
    
      </div>

    </section>
  )
}

export default Introduction