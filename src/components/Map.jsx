import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({data, setSidebarData, setShowSidebar}) => {
  const center = [41.327953,19.819025]

return (
    <MapContainer center={center} zoom={13} style={{ width: '100%', height: 'calc( 100vh - 60px )',borderRadius:8}}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {data.map((parkings, index) => (
        <Marker key={index} position={[parkings.lat,parkings.lon]} eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
            mouseout: (event) => event.target.closePopup(),
            click: () => {setShowSidebar(true);setSidebarData(parkings)}
          }}>
          <Popup>
            <div>
                {parkings.parking_name}
                <div>Total Spaces: {parkings.total_spaces}</div>
                <div>Free Spaces: {parkings.free_spaces}</div>
            </div>

          </Popup>
        </Marker>
      ))}
    </MapContainer>
  
);
};

export default Map;