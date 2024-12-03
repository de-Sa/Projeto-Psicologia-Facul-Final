// Sidebar.styles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 245px;
  background-color: #1a1a5e;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 100vh;
`;

export const Logo = styled.img`
  width: 175px;
  margin-bottom: 2rem;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  width: 100%;
`;

export const MenuItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: 15px;
  color: #fff;
  text-decoration: none;
  font-weight: normal;
  transition: background-color 0.3s linear, color 0.3s linear;
  border-radius: 8px;
  margin: 5px 0;
  
  &:hover {
    background-color: #343477;
  }

  &.selected {
    background-color: #ffffff;
    color: #1a1a5e;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 30px;
    padding-left: 30px;
  }
`;

export const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: brightness(5);
  
  &.selected {
    filter: brightness(0);
  }
`;
