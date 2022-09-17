import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Schedule from './Pages/Schedule';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/schedule" element={<Schedule />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
