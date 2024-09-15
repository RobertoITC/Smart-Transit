import { useEffect, useState } from "react";
import BusRouteMapOPEN from "./Components/BusRouteMapOPEN.jsx";
import BusTable from "./Components/BusTable.jsx";

function Dashboard() {
    // Estado para controlar si se muestra el mapa o una vista en blanco
    const [showMap, setShowMap] = useState(false);

    // useEffect para alternar entre el mapa y la vista en blanco cada 10 segundos
    /*useEffect(() => {
        const interval = setInterval(() => {
            setShowMap((prevShowMap) => !prevShowMap);
        }, 5000);  // Cambia cada 10 segundos
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);*/


    return (
        <div className={'bg-gray-800 w-screen h-screen'}>
            {showMap ? (<div>
                <div className={'flex flex-col items-center justify-center pt-8'}>
                    <h1 className={'text-white text-3xl font-extrabold shadow-lg'}>Mapa de Línea Mi Macro
                        Periférico</h1>
                </div>
                <div className={'pl-[15%] pt-[2%] rounded-l'}>

                    <BusRouteMapOPEN/>

                </div>
            </div>):(<div>

                <div className={'pt-[5%] h-screen w-screen'}>

                    <BusTable />
                </div>

            </div>)}


        </div>
    );
}

export default Dashboard;