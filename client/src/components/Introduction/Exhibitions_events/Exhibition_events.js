import React from 'react'
import { images } from '../../../constants'
import "./Exhibition_events.css"

function Exhibition_events() {

    const openTime = new Date();
    const options = { month: "short" }; 
 
    const WW2ExhibitionDay = openTime.getDate()
    const WW2ExhibitionMonth = new Intl.DateTimeFormat("en-US", options).format(openTime)
    const WW2ExhibitionYear = openTime.getFullYear()
    const openDate = WW2ExhibitionDay + " " + WW2ExhibitionMonth + " " + WW2ExhibitionYear

    const d = new Date();
    d.setDate(d.getDate() + 7);
        let n = d.getDate();
        let m = d.getMonth()+1;
        let fullMonth = new Intl.DateTimeFormat("en-US", options).format(m)
        let o = d.getFullYear();
        const closeDate = n + " " + fullMonth + " " + o;

    let leftCardDateOpen = openDate
    let leftCardDateClose = closeDate
// December
    
  return (
    <div className='EE__container'>
        <div className='EE__container-titles'>
            <h1 className='title__Style'>Exhibition and Events</h1>
            <div className='EE__container-titles-menu'>
                <h3 className='menu__text'>See all Exhibitions and Events</h3>
                <div className='arrow_down'><div className='box'></div></div>
            </div>
        </div>
        <section className='EE__container-menuCards'>
            
            <div className='EE__container-menuCards-card'>
                <div className='EE__container-menuCards-card-text'>
                    
                    <h4 className='title__Style_h4'>London in WWII</h4>                   
                    <div className='EE__container-menuCards-card-text-title'>
                        <div>
                            <p>Exhibition</p>
                            <p>{leftCardDateOpen} - {leftCardDateClose}</p>
                        </div>
                        <div className='EE__container-menuCards-card-text-btn'>
                            Book<br></br> here
                        </div>
                    </div>
                </div>

                <div className='EE__container-menuCards-card-img'>                
                    <img src={images.leftCard} alt="london daytime" />
                </div>
            </div>
            <div className='EE__container-menuCards-card'>
            <div className='EE__container-menuCards-card-text'>
            <h4 className='title__Style_h4'>London: A modern History</h4>                   
                    <div className='EE__container-menuCards-card-text-title'>
                        <div>
                            <p>Exhibition</p>
                            <p>{leftCardDateOpen} - {leftCardDateClose}</p>
                        </div>
                        <div className='EE__container-menuCards-card-text-btn'>
                            Book<br></br> here
                        </div>
                    </div>

            </div>
                <div className='EE__container-menuCards-card-img'>                
                    <img src={images.rightCard} alt="london nighttime"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Exhibition_events