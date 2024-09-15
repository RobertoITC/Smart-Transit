import React, {useState, useEffect} from 'react';

function BusTable() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const[buses, setBuses] = useState([]);
    const[bases, setBases] = useState([]);


    const fetchBuses = async () => {
        /*Se determina el usuario que ingresó a su perfil, en este caso, con fines de utilizar su información y almacenarla*/
        const response = await fetch('http://localhost:3000/bus/');
        const data = await response.json();
        console.log(data)
        setBuses(data);

    };

    const fetchBases = async () => {
        /*Se determina el usuario que ingresó a su perfil, en este caso, con fines de utilizar su información y almacenarla*/
        const response = await fetch('http://localhost:3000/base/');
        const data = await response.json();
        console.log(data)
        setBases(data);

    };



    // Update the clock every second
    useEffect(() => {

        fetchBuses()
        const intervalId = setInterval(() => {
            setCurrentTime(new Date()); // Update the time every second
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    // Function to format the time in UTC
    const formatCentralMexicoTime = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Mexico_City',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,  // 24-hour format
        }).format(date);
    };
    return (
        <div className=" h-[90%]">
        <div className="p-6 ml-8 mb-7 bg-gray-100 w-11/12  rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <img src="../../assets/Jalisco.jpeg" alt="LogoJalisco"/> {/* Replace with your logo */}
                </div>
                <h1 className="text-4xl font-extrabold text-gray-800">López Mateos</h1>
                <h2 className="text-6xl font-extrabold text-gray-800">{formatCentralMexicoTime(currentTime)}</h2>
            </div>
        </div>



            {/* Table */}
            <div className="flex flex-col space-y-4 justify-center items-center overflow-y-scroll h-[80%] w-full">
                {buses.map((bus, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-md w-[80%]">
                        <h3 className="text-xl font-bold text-gray-700">Bus {bus.id}</h3>
                        <p className="text-gray-600">IP Address: {bus.ip_address}</p>
                        <p className="text-gray-600">Distance from base: {bus.distance_from_base} meters</p>
                        <p className="text-gray-600">Occupancy: {bus.occupancy_percentage}%</p>
                        <p className={`text-lg ${bus.is_full ? 'text-red-600' : 'text-green-600'}`}>
                            {bus.is_full ? 'Bus is Full' : 'Bus has Space'}
                        </p>
                    </div>
                ))}
            </div>


        </div>

    );
}

export default BusTable;