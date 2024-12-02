import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';  // Importando o ícone de notificação
import { HeaderContainer, ProfileSection, NotificationIcon, NotificationDot, UserInfo, LogoutSection, LogoutButton, NotificationsList, NotificationItem, NotificationDropdown, ArrowDown } from './Styled';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user ? user.username : "Usuário";

  const notifications = new Array(10).fill(false).map((_, index) => ({
    id: index + 1,
    message: `Notificação #${index + 1}`,
    read: index % 2 === 0, // Marcar as notificações de índice par como lidas
  }));

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleBellClick = () => {
    setDropdownVisible(!isDropdownVisible); // Alterna a visibilidade da caixa de notificações
  };

  return (
    <HeaderContainer>
      <ProfileSection>
        <NotificationIcon onClick={handleBellClick}>
          <FaBell size={25} />
          {notifications.filter(notification => !notification.read).length > 0 && (
            <NotificationDot />
          )}
          {isDropdownVisible && (
            <NotificationDropdown>
              <ArrowDown />
              <NotificationsList>
                {notifications.map((notification) => (
                  <NotificationItem key={notification.id} isRead={notification.read}>
                    {notification.message}
                  </NotificationItem>
                ))}
              </NotificationsList>
            </NotificationDropdown>
          )}
        </NotificationIcon>
      </ProfileSection>

      <UserInfo>
        <span>{username}</span>
      </UserInfo>

      <LogoutSection>
        <LogoutButton>Logout</LogoutButton>
      </LogoutSection>
    </HeaderContainer>
  );
}

export default Header;
