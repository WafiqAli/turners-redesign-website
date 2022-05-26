import React from 'react'
import './HomeContent.css';
import TopBanner from './TopBanner';
import Awards from './Awards';
import FourBlueBanners from './FourBlueBanners';
import VehicleSearch from './VehicleSearch';
import Testimonials from './Testimonials';

const HomeContent = () => {
  return (
    <div className='home-container'>
        <TopBanner />
        <Awards />
        <FourBlueBanners />
        <VehicleSearch />
        <Testimonials />
    </div>
  )
}

export default HomeContent