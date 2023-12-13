import { Routes, Route, useNavigate } from 'react-router';
import { useEffect } from 'react';
import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Startup from './screens/Startup/Component'; // Your original import

function App() {
  let navigate = useNavigate();

  // This effect would run once after the component mounts
  useEffect(() => {
    // Suppose your splash animation takes 3 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard'); // Redirect to the Dashboard after the timeout
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;