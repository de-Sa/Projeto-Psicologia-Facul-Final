import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const SidebarContainer = styled.div`
  width: 350px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
  font-weight: bold;
  color: #333;
  width: 48%;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #1a1a5e;
  font-weight: bold;
  background-color: ${(props) => (props.isSelected ? '#f5f5f5' : 'transparent')};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  color: #333;

  &:focus {
    border-color: #6a5acd;
    box-shadow: 0 0 5px rgba(106, 90, 205, 0.5);
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  color: #333;

  &:focus {
    border-color: #6a5acd;
    box-shadow: 0 0 5px rgba(106, 90, 205, 0.5);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 350px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  resize: vertical;

  &:focus {
    border-color: #6a5acd;
    box-shadow: 0 0 5px rgba(106, 90, 205, 0.5);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: #6a5acd;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  /* Espaçamento do botão em relação à subseção */
  margin-top: 15px; /* Adiciona 15px de distância da subseção anterior */
  width: 100%;
  
  &:hover {
    background-color: #5848b1;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

