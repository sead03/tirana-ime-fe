import './App.css'
import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import parkingdata from './components/parkingdata';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState(null);
  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 const endpoint = () => {
    fetch('http://localhost:8000/api/parkings/')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setParkings(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };  


  

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
      <Map data={parkingdata} setSidebarData={setSidebarData} setShowSidebar={setShowSidebar}/>
      
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