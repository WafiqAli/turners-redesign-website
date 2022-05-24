import React from 'react';
import './FourBlueBanners.css';
import blueGirl1 from '../image-assets/1_Homepage/What does Turners Offer_/Blue Lady_1.png';
import blueGirl2 from '../image-assets/1_Homepage/What does Turners Offer_/Blue Lady_2.png';
import blueGirl3 from '../image-assets/1_Homepage/What does Turners Offer_/Blue Lady_3.png';
import blueGirl4 from '../image-assets/1_Homepage/What does Turners Offer_/Blue Lady_4.png';

const FourBlueBanners = () => {
  return (
    <div className='fbb-container'>
        <img className='blue-girl one' src={blueGirl1} alt='blue girl' />
        <img className='blue-girl two' src={blueGirl2} alt='blue girl' />
        <img className='blue-girl three' src={blueGirl3} alt='blue girl' />
        <img className='blue-girl four' src={blueGirl4} alt='blue girl' />

        <div className='fbb-banner'><span className='fbb-text one'>Buy<br/>{'&'}<br/>Sell</span></div>
        <div className='fbb-banner'><span className='fbb-text two'>Auction</span></div>
        <div className='fbb-banner'><span className='fbb-text three'>Finance</span></div>
        <div className='fbb-banner'><span className='fbb-text four'>Insurance</span></div>
        <div className='fbb-question'>
            <p>What<br/>does<br/>Turners<br/>offer?<br/><button className='fbb-button'><span>Click to View!</span></button></p>
            
        </div>
    </div>
  )
}

export default FourBlueBanners