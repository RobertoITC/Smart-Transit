import React, {useState, useEffect, useRef} from 'react';
import image from '../../assets/Jalisco.jpeg';

function BusTable() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const[buses, setBuses] = useState([]);
    const[bases, setBases] = useState([]);
    const busListRef = useRef(null);



    const fetchBuses = async () => {
        const response = await fetch('http://localhost:3000/bus/');
        const data = await response.json();
        console.log(data)
        setBuses(data);

    };

    const fetchBases = async () => {
        const response = await fetch('http://localhost:3000/base/');
        const data = await response.json();
        console.log(data)
        setBases(data);

    };



    useEffect(() => {
        fetchBuses();
        fetchBases();

        const timeIntervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        const busListContainer = busListRef.current;
        let scrollInterval;

        if (busListContainer) {
            scrollInterval = setInterval(() => {
                if (busListContainer.scrollTop + busListContainer.clientHeight >= busListContainer.scrollHeight) {
                    busListContainer.scrollTop = 0;
                } else {
                    busListContainer.scrollTop += 1;
                }
            }, 100);
        }

        return () => {
            clearInterval(timeIntervalId);
            clearInterval(scrollInterval);
        };
    }, []);

    const formatCentralMexicoTime = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Mexico_City',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).format(date);
    };
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="p-6 ml-14 mb-7 bg-gray-100 w-11/12  rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <img src={image} alt="LogoJalisco" className={'h-20 w-30'}/>
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-800">López Mateos</h1>
                    <h2 className="text-6xl font-extrabold text-gray-800">{formatCentralMexicoTime(currentTime)}</h2>
                </div>
            </div>


            <div className="flex flex-row h-[570px] justify-center pt-8 w-[80%]]">
                {/* Buses */}
                <div className="flex flex-col space-y-4 overflow-y-scroll h-[80%] w-full ml-14" ref={busListRef}>
                    {buses.map((bus, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-md w-[100%]">
                            <h3 className="text-xl font-bold text-gray-700">Bus {bus.id}</h3>
                            {//<p className="text-gray-600">IP Address: {bus.ip_address}</p>}
                            }
                            <p className="text-gray-600">Distancia de la base: {bus.distance_from_base} meters</p>
                            <p className="text-gray-600">Ocupación: {bus.occupancy_percentage}%</p>
                            <p className={`text-lg ${bus.is_full ? 'text-red-600' : 'text-green-600'}`}>
                                {bus.is_full ? 'Bus is Full' : 'Bus has Space'}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Base List */}
                <div className="flex flex-row space-y-4 overflow-auto h-[80%] justify-center w-[70%]">
                    <div className="flex flex-col space-y-4 w-[60%]" >
                        {bases.map((base, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg shadow-md w-[100%]">
                                <h3 className="text-xl font-bold text-gray-700">Base {base.id}</h3>
                                <p className="text-gray-600">Ruta: {base.ruta}</p>
                                <p className="text-gray-600">Siguiente Base: {base.nextbase}</p>
                                <p className="text-gray-600">Disponibilidad: {base.disponibilidad}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BusTable;