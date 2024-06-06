import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Formulario } from './components/Formulario.jsx';
import { Home } from './components/Home.jsx';
import { Createaccount } from './components/Createaccount.jsx';
import NoFound from './components/NoFound.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={<Formulario setUser={setUser} />} />
          <Route path="/home" element={<Home user={user} setUser={setUser} />} />
          <Route path="*" element={<NoFound />} />
          <Route path="/sign-create" element={<Createaccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
