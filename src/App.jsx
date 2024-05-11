import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState(null);

  const data = [
      {
        parking_id: 1,
        parking_name: "Bashkia Parking",
        street_name: "Bajram Curri Boulevard",
        total_spaces: 100,
        free_spaces: 45,
        occupied_spaces: 55,
        lon: 19.819590,
        lat: 41.331049,
        spaces: [
          {space_id: 1, is_free: true},
          {space_id: 2, is_free: true},
          {space_id: 3, is_free: false}
        ]
      },
      {
        parking_id: 2,
        parking_name: "Wilson Parking",
        street_name: "Wilson Square",
        total_spaces: 80,
        free_spaces: 25,
        occupied_spaces: 55,
        lon: 19.815862,
        lat: 41.322780,
        spaces: [
          {space_id: 1, is_free: false},
          {space_id: 2, is_free: true},
          {space_id: 3, is_free: false}
        ]
      },
      {
        parking_id: 3,
        parking_name: "Grand Park Parking",
        street_name: "Rruga e Elbasanit",
        total_spaces: 120,
        free_spaces: 80,
        occupied_spaces: 40,
        lon: 19.816964,
        lat: 41.320478,
        spaces: [
          {space_id: 1, is_free: true},
          {space_id: 2, is_free: true},
          {space_id: 3, is_free: true}
        ]
      }
    ]

    const handleMapClick = (data) => {
      setSidebarData(data);
      setShowSidebar(!showSidebar);  
    };

  return (
    <div className="App">
    <nav className='navbar'>
    <img src="src/assets/bashkiatirone.png" alt="Logo" className='Img21' width={45} />
      <img src="src/assets/tirana.png" alt="Logo" className='Img1' width={45} />
      <img src="src/assets/vod.png" alt="VOD Logo" width={45} />
    </nav>
    <div className="main-container">
        {sidebarData && <Sidebar data={sidebarData} setShowSidebar={setShowSidebar} setSidebarData={setSidebarData} />}
      <div className="map-container">
      <Map data={data} setSidebarData={setSidebarData} setShowSidebar={setShowSidebar}/>
      
      </div>
    </div>
  </div>
);
}

{/* <div>
<nav className='navbar'>
  <img src="src\assets\tirana.png" alt="Img" />
  <div>Tirana Ime 2.0</div>
  <img src="src\assets\vod.png"/>
</nav>
<Map data={data} setSidebarData={setSidebarData} setShowSidebar={setShowSidebar}/>
{showSidebar && <Sidebar data={sidebarData}/>} */}

export default App