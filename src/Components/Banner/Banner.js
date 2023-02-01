

import React, { useEffect } from "react"
import "./Banner.css"
function Banner() {
  useEffect(()=>{
   
  },[])
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
               <button className='button'>My list</button>
        </div>
          <h1 className='description'>A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
