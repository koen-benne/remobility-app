import { Routes, Route, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Startup from './screens/Startup/Component';
import Login from './screens/Login/Component';
import Steps from './screens/Steps/Component';
import Dashboard from './screens/Dashboard/Dashboard';
import LiveLocation from './screens/LiveLocation/Component';
import Drive from './screens/Drive/Component';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Startup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="welcome" element={<Steps/>} />
        <Route path="/" element={<Startup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drive" element={<Drive />} /> {/* Route for the drive page */}
        <Route path="/location" element={<LiveLocation />} /> {/* Route for the location page */}
      </Routes>
    </div>
  );
}

export default App;
