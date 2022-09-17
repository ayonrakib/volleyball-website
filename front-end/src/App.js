import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Schedule from './Pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/schedule" element={<Schedule />}/>
        <Route path="/" element={<Home />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
