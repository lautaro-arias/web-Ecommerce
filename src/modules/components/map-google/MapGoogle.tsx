import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map: React.FC = () => {
    const center = { lat: -34.5453, lng: -58.4498 };
    const markerPosition = { lat: -34.5454, lng: -58.4498 }
    return (
        <LoadScript googleMapsApiKey="AIzaSyCPkcXMkdLMd9tLj_aPaqhctVEsebhR3Es">
            <div className="border border-dark text-center ">
                <GoogleMap center={center} zoom={15} mapContainerStyle={{ height: '400px', width: '100%' }}>
                    <Marker position={markerPosition} />
                </GoogleMap>
            </div>
        </LoadScript>
    );
};
export default Map;