import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Startup from './screens/Startup/Component';
import Login from './screens/Login/Component';
import Welcome from './screens/Welcome/Component';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="welcome" element={<Welcome/>} />
        </Routes>
    </div>
  );
}

export default App;
