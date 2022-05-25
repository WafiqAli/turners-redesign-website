import React from 'react';
import './CarsTab.css';

import hatchbackImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Hatchback.png';
import SUVImg from '../../image-assets/1_Homepage/Interested_ Search_Now/SUV.png';
import convertibleImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Convertible.png';
import vanImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Van.png';
import sedanImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Sedan.png';
import utilityImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Utility.png';
import wagonImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Wagon.png';
import coupeImg from '../../image-assets/1_Homepage/Interested_ Search_Now/Coupe.png';

const CarsTab = () => {
  return (
    <div className='carsTab-container'>
        <div className='carsTab-item'>
            <img src={hatchbackImg} alt='car pic'></img>
            <div>
                <input type='radio' id='hatchback' name='car' value='hatchback' />
                <label for='hatchback'>Hatchback</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={SUVImg} alt='car pic'></img>
            <div>
                <input type='radio' id='SUV' name='car' value='SUV' />
                <label for='SUV'>SUV</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={convertibleImg} alt='car pic'></img>
            <div>
                <input type='radio' id='convertible' name='car' value='convertible' />
                <label for='convertible'>Convertible</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={vanImg} alt='car pic'></img>
            <div>
                <input type='radio' id='van' name='car' value='van' />
                <label for='van'>Van</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={sedanImg} alt='car pic'></img>
            <div>
                <input type='radio' id='sedan' name='car' value='sedan' />
                <label for='sedan'>Sedan</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={utilityImg} alt='car pic'></img>
            <div>
                <input type='radio' id='utility' name='car' value='utility' />
                <label for='utility'>Utility</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={wagonImg} alt='car pic'></img>
            <div>
                <input type='radio' id='wagon' name='car' value='wagon' />
                <label for='wagon'>Wagon</label>
            </div>
        </div>
        <div className='carsTab-item'>
            <img src={coupeImg} alt='car pic'></img>
            <div>
                <input type='radio' id='coupe' name='car' value='coupe' />
                <label for='coupe'>Coupe</label>
            </div>
        </div>
    </div>
  )
}

export default CarsTab