import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from './Pages/Home';
import Schedule from './Pages/Schedule';
import Rules from './Pages/Rules';
import Fixture from './Pages/Fixture';
import Teams from './Pages/Teams';
import Score from './Pages/Score';
import PracticeFixture from './Pages/PracticeFixture';
import Admin from './Components/Admin';
import Players from './Pages/Players';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("App!")
  let isAdmin:boolean = false;


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/schedule" element={ <Schedule />} />
        <Route path="/admin" element={ <Admin />}/>
        <Route path="/rules" element={<Rules />} />
        <Route path="/players" element={<Players />} />
        <Route path="/fixture" element={<Fixture />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/score" element={<Score />} />
        <Route path="/practice" element={<PracticeFixture />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
