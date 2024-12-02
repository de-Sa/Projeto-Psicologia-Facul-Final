import styled from "styled-components";

export const PatientCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 200px;
  text-align: center;
  position: relative;  // Adiciona a posição relativa para o ID ficar posicionado no canto superior direito
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Nome do paciente
export const PatientName = styled.h3`
  font-size: 1.2rem;
  color: #495057;
`;

// ID do paciente no canto superior direito
export const PatientID = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8rem;
  color: #6c757d;
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;