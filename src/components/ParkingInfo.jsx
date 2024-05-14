import { useEffect , useState} from 'react';
import './ParkingInfo.css'

const ParkingInfo = ({data, setShowParkings}) => {
    
    const [parkingData, setParkingData] = useState([]);

    useEffect(() => {
        if (Array.isArray(data)) {
            setParkingData(data);
        } else {
            setParkingData([]);
        }
    }, [data]);

    const CloseParking = () => {
        setShowParkings(false)
    }

    return(
        <div>
            <h3>{data.parking_name}</h3>
            <div>
            <div className="parking-grid">
            {parkingData.map(spot => (
                <ParkingSpot key={spot.id} status={spot.status} />
            ))}        
            aaaaaaaaaaaaaaaaaaaaaaa
            </div>
            <button onClick={CloseParking}>Close</button>
            </div>
        </div>
    )
}

export default ParkingInfo;