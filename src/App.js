// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Consultas from './components/Consultas/Consultas';
import Prontuario from './components/Prontuario/Prontuario';
import Relatorios from './components/Relatorios/Relatorios';
import Pacientes from './components/Pacientes/Pacientes';
import Configuracoes from './components/Configuracoes/Configuracoes';
import Comunicados from './components/Comunicados/Comunicados';
import Login from './components/Login/Login'; 

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route 
          path="/home/*" 
          element={
            <div className="app-container" style={{ display: 'flex', width: '100%' }}>
              <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
              <div className="content" style={{ flex: 1, padding: '20px' }}>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="consultas" element={<Consultas />} />
                  <Route path="prontuario" element={<Prontuario />} />
                  <Route path="relatorios" element={<Relatorios />} />
                  <Route path="pacientes" element={<Pacientes />} />
                  <Route path="configuracoes" element={<Configuracoes />} />
                  <Route path="comunicados" element={<Comunicados />} />
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
