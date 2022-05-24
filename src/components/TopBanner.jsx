import React from 'react';
import './TopBanner.css';
import whiteCar from '../image-assets/1_Homepage/Top Banner/White Car.png';

const TopBanner = () => {
  return (
    <div className='topbanner-container'>
        <div className='grey-banner'>
            <div className='banner-text-container'>
                <p>At
                    <span style={{color: 'var(--turners-brand-blue)'}}>Turners </span>
                    <br/>we can make <br/>
                    <span style={{textDecoration: 'underline', textDecorationColor: 'var(--turners-brand-red)'}}>everything possible</span>
                </p>
            </div>
        </div>
        <div className='blue-banner'></div>
        <img className='flying-car-img' src={whiteCar} alt='flying car' />
        {/* <div className='flying-cars-banner'></div> */}
    </div>
  )
}

export default TopBanner