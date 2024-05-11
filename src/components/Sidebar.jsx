import React from 'react';
import './Sidebar.css';  // Ensure to create this CSS file for styling

const Sidebar = ({ data,setShowSidebar,setSidebarData }) => {

  const handleClick = () => {
    setShowSidebar(false)
    setSidebarData(null)
  } 

  return (
    <div className="sidebar">
      <h3 className='ParkingSpot'>Parking Spot</h3>
        <img src="/src/assets/parking-spaces.jpg" alt="parking" className='ParkingImage' />
      <h5 className='Parking_name'>{data.parking_name}</h5>
      <h5>{data.street_name}</h5>
        <ul className="list-group pt-4" >
        <li  className="list-group-item">Total spaces: <strong>{data.total_spaces}</strong></li>
        <li className="list-group-item">Free spaces: <strong>{data.free_spaces}</strong></li>
        <li className="list-group-item">Occupied spaces: <strong>{data.occupied_spaces}</strong></li>
        </ul>
      <button className='Button btn mb-3 mr-3 btn-danger' onClick={handleClick}>Close</button>
    </div>
  );
};

export default Sidebar;
