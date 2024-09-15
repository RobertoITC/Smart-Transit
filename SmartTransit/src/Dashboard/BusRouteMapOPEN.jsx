import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function BusRouteMap() {
    useEffect(() => {
        let mapInstance; // Declare map instance

        // Check if the map is already initialized
        if (!mapInstance) {
            mapInstance = L.map('map').setView([20.668390439744453, -103.36561457858814], 14);

            // Add the OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance);

            // Define the coordinates for the route 'C17'
            const MacroPeriferico = [
                [20.713260178951565, -103.30095248895896],  // Start point
                [20.718676502079834, -103.31090508386224],  // Intermediate point
                [20.72156862459968, -103.32628501219462],  // Intermediate point
                [20.723573898289647, -103.33070741779163],
                [20.725820222473065, -103.33754563180524],
                [20.72854077921512, -103.3445061753238],
                [20.730923806294534, -103.35227845553302],
                [20.73268797208574, -103.35593644662481],
                [20.735035598311235, -103.36303900457548],
                [20.737892341457336, -103.37653411405208],
                [20.739465659096442, -103.38220393512269],
                [20.74054045045731, -103.38814490296988],
                [20.739202067075144, -103.40303344529997],
                [20.7339415984675, -103.40959269316409],
                [20.730981220593712, -103.41300453189373],
                [20.725849962266366, -103.42238118918394],
                [20.710665433516073, -103.43946453763101],
                [20.706101629016022, -103.44695489628793],
                [20.703238520574885, -103.45446330043954],
                [20.688360350867093, -103.45532927598106],
                [20.68085139358881, -103.45475379161262],
                [20.675650180970674, -103.45497529265253],
                [20.67550822446272, -103.45491460119699],
                [20.662040830216867, -103.44898973084399],
                [20.65503049054381, -103.44612000481703],
                [20.649070258070754, -103.44365927598226],
                [20.642926141137224, -103.44106239501144],
                [20.633036096942238, -103.43663145543869],
                [20.632423369263368, -103.43675140666231],
                [20.632344492683185, -103.43625435961125],
                [20.614548008569926, -103.42455295622257],
                [20.612973674769336, -103.4236138453038],
                [20.61092347613555, -103.415210247083],
                [20.608680657135636, -103.40730542811953],
                [20.605707795977892, -103.39992405895273],
                [20.590740111271415, -103.38583708947918],
                [20.586899130110506, -103.38262171248894],
                [20.5801091194524, -103.36938239945286],
                [20.57709527529928, -103.36087789316875],
                [20.582751335604044, -103.33627064228854],
                [20.587869228218487, -103.32693077200344],

                [20.591342632251997, -103.32139165763371],  // End point
            ];

            // Draw the polyline on the map
            const polyline = L.polyline(MacroPeriferico, { color: 'purple' }).addTo(mapInstance);

            // Adjust the map view to fit the route
            mapInstance.fitBounds(polyline.getBounds());

            MacroPeriferico.forEach((coord) => {
                L.circleMarker(coord, {
                    radius: 4, // Size of the circle
                    color: 'purple', // Border color
                    fillColor: 'white', // Fill color
                    fillOpacity: 0.8, // Opacity of the fill
                }).addTo(mapInstance);
            });
        }

        // Clean up the map when the component unmounts
        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    return <div id="map" style={{
        height: '600px',
        width: '85%',
        borderRadius: '15px',  // Rounds the corners
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'  // Adds shadow for more presentable look
    }}></div>;
}

export default BusRouteMap;