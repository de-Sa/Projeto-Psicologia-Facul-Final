import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';  // Certifique-se de importar Home
import Dashboard from './pages/Dashboard/Dashboard';
import Consultas from './pages/Consultas/Consultas';
import Prontuario from './pages/Prontuario/Prontuario';
import Relatorios from './pages/Relatorios/Relatorios';
import Pacientes from './pages/Pacientes/Pacientes';
import Configuracoes from './pages/Configuracoes/Configuracoes';
import Comunicados from './pages/Comunicados/Comunicados';
import Login from './pages/Login/Login';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Controla a seção ativa

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
              <Header setActiveSection={setActiveSection}/>
                <Routes>
                  <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
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
