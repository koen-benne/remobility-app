import logo from './logo.svg';
import './App.css';
import { MemoryRouter, Routes, Route } from 'react-router';
import Startup from './screens/Startup/Component';

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
