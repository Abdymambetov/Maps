import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapEventsComponent = ({onLocationChange}) => {
    useMapEvents({
        click(e){
            onLocationChange(e.latlng.lat, e.latlng.lng);
        }
    });
    return null;
}

const ChangeView = ({center}) => {
    const map = useMap();
    map.setView(center);
    return null;
}

const MapComponents = ({lat, lng, onLocationChange}) => {
    const position = [lat, lng];

    return (
        <MapContainer center={position} zoom={14} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
            <ChangeView center={position} />
            <MapEventsComponent onLocationChange={onLocationChange} />
        </MapContainer>
    );
}

export default MapComponents;
