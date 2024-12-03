import styled from 'styled-components';

// Contêiner para os detalhes da consulta
export const DetailsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

// Botão de edição ou ação
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
