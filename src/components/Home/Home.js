import React, { useState, useEffect } from "react";
import { HomeContainer, WelcomeTitle, Greeting, ButtonGroup, MainButton, Username } from "./Styled";
import { useNavigate } from "react-router-dom";

function Home({ setActiveSection }) {
  const navigate = useNavigate();

  // Simula usuários do sistema
  const usersFake = [
    { id: 1, ra: 1234, username: "admin", type: "A" },
    { id: 2, ra: 12345, username: "Mario", type: "B" },
    { id: 3, ra: 123456, username: "Claudio", type: "C" },
  ];


  // Obtém o tipo de usuário salvo no localStorage
  const savedType = JSON.parse(localStorage.getItem("saved")); // Certifique-se de que o valor está sendo interpretado corretamente
  const [selectedUser, setSelectedUser] = useState(null);

  // Define o usuário selecionado com base no tipo salvo
  useEffect(() => {
    if (savedType) {
      const matchedUser = usersFake.find((user) => user.type === savedType);
      if (matchedUser) {
        setSelectedUser(matchedUser); // Atualiza o estado com o usuário correspondente
      }
    }
  }, [savedType]);

  // useEffect adicional para verificar mudanças no `selectedUser`
  useEffect(() => {
    if (selectedUser) {
      console.log("Usuário selecionado atualizado:", selectedUser);
    }
  }, [selectedUser]);

  // Nome do usuário para exibição
  const username = selectedUser ? selectedUser.username : "Usuário";

  // Função de navegação para páginas
  const handleNavigate = (path) => {
    setActiveSection(path); // Atualiza a seção ativa
    navigate(`/home/${path}`); // Navega para a rota correspondente
  };

  return (
    <HomeContainer>
      <WelcomeTitle>Bem-Vindo</WelcomeTitle>
      <Greeting>
        Bom Dia, <Username>{username}</Username>
      </Greeting>
      <ButtonGroup>
        <MainButton onClick={() => handleNavigate("pacientes")}>Pacientes</MainButton>
        <MainButton onClick={() => handleNavigate("comunicados")}>Comunicados</MainButton>
      </ButtonGroup>
    </HomeContainer>
  );
}

export default Home;
