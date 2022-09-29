import React from 'react'
import Banner from '../components/Banner';
import Company from '../components/Company';
import Dashmeet from '../components/Dashmeet';
import Journey from '../components/Journey';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Journey />
      <Company />
      <Dashmeet />
    </div>
  )
}

export default LandingPage;