import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  LoginPage, 
  LoginSidebar, 
  SidebarLogo, 
  SidebarLoginMenu, 
  LoginContainer, 
  LoginBox, 
  FormGroup, 
  SubmitButton 
} from './Styles'; // Importação dos estilos
import unicuLogo from '../../Images/unicu.png';

function Login() {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   ra: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('URL_DO_SEU_BACKEND', formData)
  //     .then((response) => {
  //       const { token, user } = response.data;

  //       localStorage.setItem('token', token);
  //       localStorage.setItem('user', JSON.stringify(user));
  //       localStorage.setItem('status', true);

  //       console.log('Login bem-sucedido:', response.data);
  //       navigate('/home'); 
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao realizar login:', error);
  //       alert('Erro ao realizar login. Por favor, tente novamente.');
  //     });
  // };
  const navigate = useNavigate();
  const users = [
    { ra: '1234', password: '1234' }, // admin
    { ra: '12345', password: '1234'}, // professor
    { ra: '123456', password: '1234'}, // aluno
  ];
  const [active, setActive] = useState("")

  const [formData, setFormData] = useState({ ra: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verifica se o usuário e senha correspondem ao predefinido
    const user = users.find(
      (u) => u.ra === formData.ra && u.password === formData.password
    );
  
    if (user) {
      let userType = "";
  
      switch (user.ra) {
        case "1234":
          userType = "A";
          break;
        case "12345":
          userType = "B";
          break;
        case "123456":
          userType = "C";
          break;
        default:
          userType = "";
      }
  
      setActive(userType); // Atualiza o estado corretamente
      localStorage.setItem('saved', JSON.stringify(userType)); // Salva o valor no localStorage
  
      setErrorMessage('');
      navigate('/home'); // Redireciona para a página Home
    } else {
      setErrorMessage('Usuário ou senha inválidos!');
    }
  };
  

  return (
    <LoginPage>
      <LoginSidebar>
        <SidebarLogo>
          <img src={unicuLogo} alt="Logo Unicuritiba" />
        </SidebarLogo>
        <SidebarLoginMenu>
          <li className="selected">
            <span>Login</span>
          </li>
        </SidebarLoginMenu>
      </LoginSidebar>
      <LoginContainer>
        <LoginBox>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <input
                type="text"
                name="ra"
                value={formData.ra}
                onChange={handleInputChange}
                placeholder="RA"
                required
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="SENHA"
                required
              />
            </FormGroup>
            <SubmitButton onClick={handleSubmit} type="submit">Avançar</SubmitButton>
          </form>
        </LoginBox>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;
