import React from 'react'
import './HomeContent.css';
import TopBanner from './TopBanner';
import Awards from './Awards';
import FourBlueBanners from './FourBlueBanners';

const HomeContent = () => {
  return (
    <div>
        <TopBanner />
        <Awards />
        <FourBlueBanners />
    </div>
  )
}

export default HomeContent