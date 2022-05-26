import React from 'react';
import './CarsTab.css';

import CarsForm from './CarsForm';
import CarTypes from './CarTypes';


const CarsTab = () => {
  return (
    <div>
        <CarTypes />
        <CarsForm />
    </div>
  )
}

export default CarsTab