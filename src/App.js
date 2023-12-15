import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Startup from './screens/Startup/Component';
import Login from './screens/Login/Component';
import Steps from './screens/Steps/Component';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="welcome" element={<Steps/>} />
        </Routes>
    </div>
  );
}

export default App;
