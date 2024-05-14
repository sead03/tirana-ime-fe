import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import parkingdata from './components/parkingdata';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState(null);

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
      <Map data={parkingdata} setSidebarData={setSidebarData} setShowSidebar={setShowSidebar}/>
      </div>
    </div>
  </div>
);
}

export default App