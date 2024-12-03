import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa'; // Importando o ícone de seta para baixo

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
`;

export const NotificationDot = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

export const UserInfo = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const LogoutSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  padding: 8px 15px;
  background-color: #6a5acd;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5848b1;
  }
`;

// Estilos para as notificações
export const NotificationDropdown = styled.div`
  position: absolute;
  top: 30px; /* Ajuste conforme necessário */
  right: 0;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ArrowDown = styled(FaArrowDown)`
  position: absolute;
  top: -8px;
  right: 15px;
  color: #fff;
  font-size: 16px;
`;

export const NotificationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NotificationItem = styled.li`
  padding: 8px 12px;
  background-color: ${(props) => (props.isRead ? '#f0f0f0' : '#e8f4fd')};
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${(props) => (props.isRead ? '#888' : '#333')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isRead ? '#f5f5f5' : '#d7e9f9')};
  }
`;
