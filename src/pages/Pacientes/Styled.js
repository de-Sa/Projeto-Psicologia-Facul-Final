import styled from 'styled-components';

// Contêiner principal
export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
`;

// Título da página
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #343a40;
`;

// Lista de pacientes (flexbox)
export const PatientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// Contêiner da tabela de enrollments
export const TableContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  td {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

// Botão de finalizar com design
export const Button = styled.button`
  background-color: ${(props) => (props.active ? 'green' : 'gray')};
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.active ? '#45a049' : '#888')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
