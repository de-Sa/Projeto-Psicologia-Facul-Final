import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import unicuLogo from '../Images/unicu.png'; 
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ra: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lembrar de trocar esse caraio do 'URL_DO_SEU_BACKEND' pela URL que os meninos mandarem
    axios.post('URL_DO_SEU_BACKEND', formData)
      .then(response => {
        console.log('Login bem-sucedido:', response.data);
        navigate('/Home');
      })
      .catch(error => {
        console.error('Erro ao realizar login:', error);
        alert('Erro ao realizar login. Por favor, tente novamente.');
      });
  };

  return (
    <div className="login-page">
      <div className="login-sidebar">
        <div className="sidebar-logo">
          <img src={unicuLogo} alt="Logo Unicuritiba" className="logo" />
        </div>
        <ul className="sidebar-login-menu">
          <li className="selected">
            <span>Login</span>
          </li>
        </ul>
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="ra"
                value={formData.ra}
                onChange={handleInputChange}
                placeholder="RA"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="SENHA" 
                required
              />
            </div>
            <button type="submit" className="submit-button">Avançar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
