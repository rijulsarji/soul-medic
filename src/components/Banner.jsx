import React from 'react'
import "../styles/components/Banner.css"

const Banner = () => {
  return (
    <div className="bannerBody">
      <div className="bannerBG"></div>
      <div className='bannerContent'>
        <h1>Welcome to GetHealingsDone</h1>
        <p>Your way to inner peace</p>
      </div>
    </div>
  );
}

export default Banner