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
  const [counts, setCounts] = useState({ true_count: 0, false_count: 0 });

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

  const endpoint1 = () => {
    // Function to fetch data from Django
    const fetchData = async () => {
      try {
        // Replace 'http://localhost:8000/process_booleans/' with your actual Django server URL
        const response = await axios.post('http://localhost:8000/process_booleans/', {
          item1: true,
          item2: false,
          item3: true,
          item4: false
        });
        setCounts(response.data); // Set the data received from Django to state
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };
    fetchData();
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

export default App