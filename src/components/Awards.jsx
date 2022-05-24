import React from 'react';
import './Awards.css';
import award2020 from '../image-assets/1_Homepage/Awards/Award_2020.png';
import award2021 from '../image-assets/1_Homepage/Awards/Award_2021.png';
import award2022 from '../image-assets/1_Homepage/Awards/Award_2022.png';

const Awards = () => {
  return (
    <div className='awards-container'>
        <div className='awards-icon'>
            <img src={award2020} alt='award-icon' />
        </div>
        <div className='awards-icon'>
            <img src={award2021} alt='award-icon' />
        </div>
        <div className='awards-icon'>
            <img src={award2022} alt='award-icon' />
        </div>
        <div className='awards-description'>
            <p>We've won the Reader's Digest Trusted Brand award<br/>
            three years in a row. Which is better than winning it<br/> 
            two years in a row, but not quite as far as four.</p>
        </div>
    </div>
  )
}

export default Awards