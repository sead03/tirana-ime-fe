import './Sidebar.css'; 
import React, { useState } from 'react';
import ParkingInfo from './ParkingInfo';

const Sidebar = ({ data,setShowSidebar,setSidebarData }) => {

  
  const [showParkings, setShowParkings] = useState(false);
  const [showdata, setShowData] = useState(null);
  
  const handleClick = () => {
    setShowSidebar(false)
    setSidebarData(null)
  } 

  const HandleParking = () => {
    setShowParkings(true)
    setShowData(null)
  }

  return (
    <div className="sidebar">
      <h3 className='ParkingSpot'>Parking Spot</h3>
        <img src="/src/assets/parking-spaces.jpg" alt="parking" className='ParkingImage' />
      <h5 className='Parking_name'>{data.parking_name}</h5>
      <h5>{data.street_name}</h5>
        <ul className="list-group pt-2" >
        <li  className="list-group-item">Total spaces: <strong>{data.total_spaces}</strong></li>
        <li className="list-group-item">Free spaces: <strong>{data.free_spaces}</strong></li>
        <li className="list-group-item">Occupied spaces: <strong>{data.occupied_spaces}</strong></li>
        </ul>
        {showParkings && <ParkingInfo data={data} setShowParkings={setShowParkings}/>}
        <div className='ButtonDiv'>
      <button className='Button btn btn-danger'onClick={HandleParking}>More Info</button>
      <button className='Button btn btn-danger' style={{marginLeft: '10px'}} onClick={handleClick}>Close</button>
      </div>
    </div>
  );
};

export default Sidebar;
