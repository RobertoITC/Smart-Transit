import React from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 20.668390439744453,
    lng: -103.36561457858814
};

// Example coordinates for the 'C17' route
const C17RouteCoordinates = [
    { lat: 20.668390439744453, lng: -103.36561457858814 },
    { lat: 20.665, lng: -103.360 },
    { lat: 20.660, lng: -103.355 },
    { lat: 20.655, lng: -103.350 },
    { lat: 20.650, lng: -103.345 },
];

// Example coordinates for another route 'B12'
const B12RouteCoordinates = [
    { lat: 20.668390439744453, lng: -103.36561457858814 },
    { lat: 20.663, lng: -103.370 },
    { lat: 20.658, lng: -103.375 },
    { lat: 20.653, lng: -103.380 },
    { lat: 20.648, lng: -103.385 },
];

function BusRouteMap() {
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                {/* C17 Route */}
                <Polyline
                    path={C17RouteCoordinates}
                    options={{
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 4,
                    }}
                />

                {/* B12 Route */}
                <Polyline
                    path={B12RouteCoordinates}
                    options={{
                        strokeColor: '#0000FF',
                        strokeOpacity: 0.8,
                        strokeWeight: 4,
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
}

export default BusRouteMap;