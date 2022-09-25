import React from 'react'
import Intro from '../components/Intro';
import Banner from '../components/Banner';
import Company from '../components/Company';
import Journey from '../components/Journey';

const LandingPage = () => {
  return (
    <div>
      <Banner />    
      <Intro />
      <Company />
      <Journey />
    </div>
  )
}

export default LandingPage;