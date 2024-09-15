# SmartTransit Bus Station Interface - ReadMe

## Overview
The **SmartTransit** bus station interface consists of two main screens that will rotate every 10 seconds. These screens are designed to provide passengers with real-time information about bus arrival times, seat availability, and bus locations on a city-wide map.

The system involves both **front-end** and **back-end** components. This document explains the functioning of these components from a technical and programming perspective.

---

## Front-End

### Screen 1: Bus Arrival and Occupancy Table ![image](https://github.com/user-attachments/assets/696a11c6-e64b-4f29-8883-2aaf9bd9b26b)

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

### Screen 2: Real-Time Bus Location Map ![image](https://github.com/user-attachments/assets/a1d83087-7772-489f-afca-c9537c717abd)

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
- **Timers (setInterval/setTimeout)**: Control the 10-second screen rotations and automatic data refreshing.

---
## Back-End

The back-end is responsible for providing real-time data on bus locations, arrival times, and seat availability. It manages data storage and provides APIs to the front-end.

### Responsibilities:
1. **Bus Location API**:
   - Provides GPS data for buses in real-time.
   - The data is collected from bus tracking devices and pushed to the server at regular intervals (e.g., every 30 seconds).
   - API Endpoint: `GET /api/bus-locations`

2. **Bus Arrival and Occupancy API**:
   - Provides estimated arrival times and occupancy levels based on data from bus sensors.
   - API Endpoint: `GET /api/bus-status`

3. **Data Management**:
   - The back-end server stores historical and real-time bus data, including location, occupancy, and route information.
   - It uses a **database** (e.g., MongoDB or PostgreSQL) to keep track of real-time bus data and deliver it to the front-end.

### Technologies Used:
- **Node.js**: For building the server-side logic, managing APIs, and handling real-time data.
- **Express.js**: Web framework used to define API routes for fetching bus location and occupancy data.
- **WebSockets**: Provides a real-time connection between the back-end and front-end for continuous updates without the need for constant polling.
- **Database (MongoDB/PostgreSQL)**: Stores bus routes, schedules, and real-time occupancy data.

---

## Interaction between Front-End and Back-End
1. **Data Flow**:
   - The front-end periodically requests real-time bus information from the back-end using **AJAX** or **WebSockets**.
   - The back-end sends updated bus locations and occupancy data based on the latest GPS and sensor readings.
   
2. **Screen Rotation**:
   - The front-end uses a JavaScript interval (`setInterval`) to rotate between the two screens (Table View and Map View) every 10 seconds.
   - Both screens are independently updated based on real-time data fetched from the back-end.

---

## Deployment and Scaling
- **Cloud Hosting**: The application can be hosted on cloud platforms such as **AWS** or **Heroku** to ensure scalability and reliability.
- **Real-Time Data Handling**: Implementing **WebSockets** or **server-sent events (SSE)** ensures low-latency data delivery to the front-end for a smooth real-time experience.

---

## Future Enhancements
- **User Interaction**: Adding touch-screen functionality for users to interact with the map and select specific buses or routes.
- **Analytics**: Integrating analytics to track bus performance, passenger flow, and optimize schedules based on historical data.

---
