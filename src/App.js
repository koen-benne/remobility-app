import { Routes, Route, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Startup from './screens/Startup/Component';
import Login from './screens/Login/Component';
import Steps from './screens/Steps/Component';
import Dashboard from './screens/Dashboard/Dashboard';
import LiveLocation from './screens/LiveLocation/Component';
import Drive from './screens/Drive/Component';
import Profile from './screens/Profile/Component';
import ProfileEdit from './screens/ProfileEdit/Component';
import Cars from './screens/Cars/Component';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<ProfileEdit />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
