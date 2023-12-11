import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Startup from './screens/Startup/Component';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
    </div>
  );
}

export default App;
