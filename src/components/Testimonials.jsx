import React from 'react'
import {useState} from 'react';
import './Testimonials.css';

import BoughtACar from './TestimonialTabs/BoughtACar';
import Finance from './TestimonialTabs/Finance';
import Insurance from './TestimonialTabs/Insurance';
import SoldACar from './TestimonialTabs/SoldACar';
import Support from './TestimonialTabs/Support';

const Testimonials = () => {

    const [activeTab, setActiveTab] = useState('1');
    
    const handleTabClick = (e) => {
        e.preventDefault();
        setActiveTab(e.target.id);
    }

    let activeTabJSX = <></>;

    if (activeTab === '1') {
        activeTabJSX =  <BoughtACar/>;
    }
    else if (activeTab === '2') {
        activeTabJSX = <SoldACar/>;
    }
    else if (activeTab === '3') {
        activeTabJSX = <Finance/>;
    }
    else if (activeTab === '4') {
        activeTabJSX = <Insurance/>;
    }
    else if (activeTab === '5') {
        activeTabJSX = <Support/>;
    }

    return (
        <div className='testimonials-container'>
            <div className='test-title'>
                <h1>Testimonials</h1>
                <h2>What our customers are saying</h2>
            </div>
    
            <div className='test-navbar-container'>
                <div className='test-navbar'>
                    <div id='1' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "1" ? "active" : "")}>Bought a car</div>
                    <div id='2' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "2" ? "active" : "")}>Sold a car</div>
                    <div id='3' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "3" ? "active" : "")}>Finance</div>
                    <div id='4' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "4" ? "active" : "")}>Insurance</div>
                    <div id='5' onClick={handleTabClick} className={'test-navbar-item ' + (activeTab === "5" ? "active" : "")}>Support</div>
                </div>
            </div>
            
            <div className='test-content'>
                { activeTabJSX }
            </div>
        </div>
    )
}

export default Testimonials