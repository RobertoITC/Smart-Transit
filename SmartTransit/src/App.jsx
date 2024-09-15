
import Dashboard from './Dashboard/Dashboard.jsx'
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Dashboard />} />
        </Routes>
    )
}

export default App
