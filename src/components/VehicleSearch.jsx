import React from 'react';
import './VehicleSearch.css';
import {useState} from 'react';
import AuctionsTab from './vehicleSearchTabs/AuctionsTab';
import CarsTab from './vehicleSearchTabs/Cars/CarsTab';
import TrucksMachineryTab from './vehicleSearchTabs/TrucksMachineryTab';
import DamagedTab from './vehicleSearchTabs/DamagedTab';
import BoatsMarineTab from './vehicleSearchTabs/BoatsMarineTab';
import MotorcyclesTab from './vehicleSearchTabs/MotorcyclesTab';
import GeneralGoodsTab from './vehicleSearchTabs/GeneralGoodsTab';
import BusCaravanTab from './vehicleSearchTabs/BusCaravanTab';

const VehicleSearch = () => {

    const [activeTab, setActiveTab] = useState('2');
    
    let activeTabJSX;
    if (activeTab === '1') {
        activeTabJSX =  <AuctionsTab/>;
    }
    else if (activeTab === '2') {
        activeTabJSX = <CarsTab/>;
    }
    else if (activeTab === '3') {
        activeTabJSX = <TrucksMachineryTab/>;
    }
    else if (activeTab === '4') {
        activeTabJSX = <DamagedTab/>;
    }
    else if (activeTab === '5') {
        activeTabJSX = <BoatsMarineTab/>;
    }
    else if (activeTab === '6') {
        activeTabJSX = <MotorcyclesTab/>;
    }
    else if (activeTab === '7') {
        activeTabJSX = <GeneralGoodsTab/>;
    }
    else if (activeTab === '8') {
        activeTabJSX = <BusCaravanTab/>;
    }

    const handleTabClick = (e) => {
        e.preventDefault();
        setActiveTab(e.target.id);
    }


    return (
    <div className='vs'>
        <h1 className='vs-header'>Interested? <span>Search Now!</span></h1>
        <div className='vs-search-container'>
            <div className='vs-navbar'>
                <div id='1' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "1" ? "active" : "")}>Auctions</div>
                <div id='2' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "2" ? "active" : "")}>Cars</div>
                <div id='3' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "3" ? "active" : "")}>Trucks {'&'} Machinery</div>
                <div id='4' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "4" ? "active" : "")}>Damaged {'&'} End of Life</div>
                <div id='5' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "5" ? "active" : "")}>Boats {'&'} Marine</div>
                <div id='6' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "6" ? "active" : "")}>Motorcycles</div>
                <div id='7' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "7" ? "active" : "")}>General Goods</div>
                <div id='8' onClick={handleTabClick} className={'vs-navbar-item ' + (activeTab === "8" ? "active" : "")}>Buses, Caravans {'&'} Motorhomes</div>
            </div>
            <div className='vs-content'> 
                { activeTabJSX } 
                
            </div>
        </div>
    </div>
  )
}

export default VehicleSearch