import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '50%',
    height: '300px',

};

const center = {
    lat: 20.668390439744453,
    lng: -103.36561457858814

//20.668390439744453, -103.36561457858814

};

function MyMapComponent() {
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {/* You can add markers like this */}
                <Marker position={center} />
                {/* Other map components here */}
            </GoogleMap>
        </LoadScript>
    );
}

export default MyMapComponent;