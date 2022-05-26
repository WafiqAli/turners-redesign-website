import React from 'react'

const CarsForm = () => {
  return (
    <div>
        <div className='carsTab-form-container'>
            <form action='/' className='carsTab-form'>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Keywords</legend>
                    <input type='text' id='keywords' />
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Sale Method</legend>
                    <select className='carsTab-select normal' id='sale-method' name='sale-method'>
                        <option disabled selected></option>
                        <option>All Sale Methods</option>
                        <option>Auction</option>
                        <option>BuyNow</option>
                        <option>Tender</option>
                        <option>Online Auction</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Make</legend>
                    <select className='carsTab-select normal' id='make' name='make'>
                        <option disabled selected></option>
                        <option>All Makes</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Chevrolet</option>
                        <option>Toyota</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Engine Size</legend>
                    <select className='carsTab-select short' name='make'>
                        <option disabled selected></option>
                        <option>Any Engine Size</option>
                        <option>1.5L</option>
                        <option>2.0L</option>
                    </select>
                    <span> - </span>
                    <select className='carsTab-select short' name='make'>
                        <option disabled selected></option>
                        <option>Any Engine Size</option>
                        <option>2.5L</option>
                        <option>3.0L</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Odometer</legend>
                    <select className='carsTab-select short' name='odometer'>
                        <option disabled selected></option>
                        <option>Any Kms</option>
                        <option>30,000kms</option>
                        <option>40,000kms</option>
                    </select>
                    <span> - </span>
                    <select className='carsTab-select short' name='odometer'>
                        <option disabled selected></option>
                        <option>Any Kms</option>
                        <option>50,000kms</option>
                        <option>60,000kms</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Year</legend>
                    <select className='carsTab-select short' name='year'>
                        <option disabled selected></option>
                        <option>Any Year</option>
                        <option>1990</option>
                        <option>2000</option>
                    </select>
                    <span> - </span>
                    <select className='carsTab-select short' name='year'>
                        <option disabled selected></option>
                        <option>Any Year</option>
                        <option>2010</option>
                        <option>2020</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Price</legend>
                    <select className='carsTab-select short' name='price'>
                        <option disabled selected></option>
                        <option>Any Price</option>
                        <option>$2K</option>
                        <option>$3K</option>
                    </select>
                    <span> - </span>
                    <select className='carsTab-select short' name='price'>
                        <option disabled selected></option>
                        <option>Any Price</option>
                        <option>$4K</option>
                        <option>$5K</option>
                    </select>
                </fieldset>
                <fieldset className='carsTab-form-fieldset'>
                    <legend>Location</legend>
                    <select className='carsTab-select normal' name='location'>
                        <option disabled selected></option>
                        <option>All Locations</option>
                        <option>Auckland</option>
                        <option>Hamilton</option>
                    </select>
                </fieldset>
                <button className='carsTab-submit' type='submit'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default CarsForm