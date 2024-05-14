import React from 'react';
import './ParkingSpot.css';

const ParkingSpot = ({ status }) => {
    return (
        <div className={`parking-spot ${status}`}></div>
    );
};

export default ParkingSpot;
    