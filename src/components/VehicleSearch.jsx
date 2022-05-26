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

    const [activeTab, setActiveTab] = useState('t2');
    
    let activeTabJSX;
    if (activeTab === 't1') {
        activeTabJSX =  <AuctionsTab/>;
    }
    else if (activeTab === 't2') {
        activeTabJSX = <CarsTab/>;
    }
    else if (activeTab === 't3') {
        activeTabJSX = <TrucksMachineryTab/>;
    }
    else if (activeTab === 't4') {
        activeTabJSX = <DamagedTab/>;
    }
    else if (activeTab === 't5') {
        activeTabJSX = <BoatsMarineTab/>;
    }
    else if (activeTab === 't6') {
        activeTabJSX = <MotorcyclesTab/>;
    }
    else if (activeTab === 't7') {
        activeTabJSX = <GeneralGoodsTab/>;
    }
    else if (activeTab === 't8') {
        activeTabJSX = <BusCaravanTab/>;
    }

    return (
    <div className='vs'>
        <h1 className='vs-header'>Interested? <span>Search Now!</span></h1>
        <div className='vs-search-container'>
            <div className='vs-navbar'>
                <div className={'vs-navbar-item t1 ' + (activeTab === "t1" ? "active" : "")}>Auctions</div>
                <div className={'vs-navbar-item t2 ' + (activeTab === "t2" ? "active" : "")}>Cars</div>
                <div className={'vs-navbar-item t3 ' + (activeTab === "t3" ? "active" : "")}>Trucks {'&'} Machinery</div>
                <div className={'vs-navbar-item t4 ' + (activeTab === "t4" ? "active" : "")}>Damaged {'&'} End of Life</div>
                <div className={'vs-navbar-item t5 ' + (activeTab === "t5" ? "active" : "")}>Boats {'&'} Marine</div>
                <div className={'vs-navbar-item t6 ' + (activeTab === "t6" ? "active" : "")}>Motorcycles</div>
                <div className={'vs-navbar-item t7 ' + (activeTab === "t7" ? "active" : "")}>General Goods</div>
                <div className={'vs-navbar-item t8 ' + (activeTab === "t8" ? "active" : "")}>Buses, Caravans {'&'} Motorhomes</div>
            </div>
            <div className='vs-content'> 
                { activeTabJSX } 
                
            </div>
        </div>
    </div>
  )
}

export default VehicleSearch