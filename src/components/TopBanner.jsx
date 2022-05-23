import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <div>
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
        <div className='flying-cars-banner'></div>
    </div>
  )
}

export default TopBanner