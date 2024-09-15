# SmartTransit Bus Station Interface - ReadMe

## Overview
The **SmartTransit** bus station interface consists of two main screens that will rotate every 10 seconds. These screens are designed to provide passengers with real-time information about bus arrival times, seat availability, and bus locations on a city-wide map.

The system involves both **front-end** and **back-end** components. This document explains the functioning of these components from a technical and programming perspective.

---

## Front-End

### Screen 1: Bus Arrival and Occupancy Table (Image 1)
- **Purpose**: This screen displays real-time bus information for the next arriving buses, their routes, estimated arrival time, and current occupancy status (e.g., High, Medium, Low).
- **Elements**:
  - **Current Time**: Displays the current time in a prominent position.
  - **Table Data**:
    - **Route Number**: The bus route ID (e.g., T01, T03, C03).
    - **Bus Number**: Identifies the specific bus (e.g., TP-061, TM-021).
    - **Arrival Time**: Estimated arrival time at the station.
    - **Next Stop**: Shows the next stop after the current station.
    - **Occupancy**: Visual indicator (color-coded) showing the number of available seats (High = Green, Medium = Yellow, Low = Red).
    
- **Functionality**:
  - The screen data is refreshed periodically (e.g., every minute) to ensure real-time accuracy.
  - Front-end uses **HTML**, **CSS**, and **JavaScript** to handle page rendering, transitions, and data updates.
  - The data is fetched from the back-end server via **AJAX requests** or using **WebSocket** connections for real-time updates.
  - **Timer/Interval**: A JavaScript timer is used to automatically switch between screens every 10 seconds.

### Screen 2: Real-Time Bus Location Map (Image 2)
- **Purpose**: This screen shows the city-wide route map with real-time bus locations plotted for the **Mi Macro Periférico** line, helping users see how close the buses are to the station.
- **Elements**:
  - **Interactive Map**: Using libraries such as **Leaflet.js** or **Google Maps API**, this screen shows an interactive map of the bus route with markers representing the current location of buses.
  - **Real-Time Bus Markers**: The buses are updated in real-time, with their locations fetched from the back-end server.
  
- **Functionality**:
  - The front-end fetches real-time location data using **AJAX** or **WebSockets**.
  - The map updates at regular intervals (e.g., every few seconds) to keep bus positions accurate.
  - The bus markers move based on their speed and position, calculated using the GPS data provided by the back-end.

### Technologies Used:
- **HTML/CSS/JavaScript**: Core technologies for building and styling the front-end user interface.
- **Leaflet.js / Google Maps API**: Used to create the interactive map and display real-time bus locations.
- **AJAX/WebSockets**: For communicating with the back-end server to get real-time data for bus locations and table updates.
- **Timers (setInterval/setTimeout)**: Control the 10-second screen rotations and automatic data refreshing.

---
