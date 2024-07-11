import React, {useState} from 'react'
import MapComponents from '../components/MapComponent'

const LocationPicker = () => {
    const [lat, setLat] = useState(42.869300018222276);
    const [lng, setLng] = useState(74.60364208844456);
    console.log(lat, '\n', lng);

    const handleLocationChange = (newLat, newLng) => {
        setLat(Number(newLat));
        setLng(Number(newLng));
    }
    
    return (
        <div>
            <label>
                Latitude:
                <input 
                type="number" 
                value={lat}
                onChange={({target}) => handleLocationChange(target.value, lng)}
                />
            </label>
            <label>
                Longitude:
                <input type="number" 
                value={lng}
                onChange={({target}) => handleLocationChange(lat, target.value, )}
                />
            </label>
            <MapComponents lat={lat} lng={lng} onLocationChange={handleLocationChange} />
        </div>
    )
}

export default LocationPicker;