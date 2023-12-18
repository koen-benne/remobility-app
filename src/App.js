import { Routes, Route, useNavigate } from 'react-router';
import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import Startup from './screens/Startup/Component';
import Login from './screens/Login/Component';
import Steps from './screens/Steps/Component';
import Dashboard from './screens/Dashboard/Dashboard';
import Startup from './screens/Startup/Component'; // Your original import
import LiveLocation from './screens/LiveLocation/LocationPage'; // Adjust the path if necessary
import Drive from './screens/Drive/DrivePage';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="welcome" element={<Steps/>} />
        </Routes>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drive" element={<Drive />} /> {/* Route for the drive page */}
        <Route path="/location" element={<LiveLocation />} /> {/* Route for the location page */}
      </Routes>
    </div>
  );
}

