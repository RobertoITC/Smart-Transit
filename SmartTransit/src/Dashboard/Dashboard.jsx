import { useEffect, useState } from "react";
import BusRouteMapOPEN from "./Components/BusRouteMapOPEN.jsx";
import BusTable from "./Components/BusTable.jsx";
import { motion, AnimatePresence } from "framer-motion";


function Dashboard() {
    const [showMap, setShowMap] = useState(false);

    // useEffect para alternar entre el mapa y la vista en blanco cada 10 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setShowMap((prevShowMap) => !prevShowMap);
        }, 30000);  // Cambia cada 10 segundos
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    const animationVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };


    return (
        <div className={'bg-gray-800 w-screen h-screen'}>
            <AnimatePresence wait>
            {showMap ? (<div className={'flex flex-col'}>
                <h1 className="text-white text-3xl font-extrabold flex justify-center pt-10">Mapa de Línea Mi Macro Periférico</h1>
                <div className="pl-[15%] pt-[2%] rounded-l">
                    <BusRouteMapOPEN/>
                </div>
            </div>) : (<motion.div
                key="table"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={animationVariants}
                transition={{duration: 0.8}}
                className="pt-[5%] h-screen w-screen pb-[5%]"
            >
                <BusTable/>
            </motion.div>)}
            </AnimatePresence>

        </div>
    );
}

export default Dashboard;