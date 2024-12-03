import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const LoginSidebar = styled.div`
  width: 250px;
  background-color: #0a2b59;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const SidebarLogo = styled.div`
  margin-bottom: 20px;

  img {
    width: 180px;
    object-fit: contain;
  }
`;

export const SidebarLoginMenu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  margin: 0;

  li {
    padding: 15px 0;
    margin: 0;
    color: #0a2b59;
    background-color: #ffffff;
    border-radius: 20px 0 0 20px;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    width: calc(100% + 20px);
    transform: translateX(-10px);
  }

  .selected {
    background-color: #ffffff;
    color: #0a2b59;
    width: calc(100% - 1.2rem);
    transform: translateX(20px);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f5f5f5;
  padding: 40px;
`;

export const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  min-height: 600px;

  h2 {
    color: #6a1b9a;
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 4.25rem;
  text-align: left;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    box-sizing: border-box;

    &:focus {
      border-color: #6a1b9a;
      outline: none;
    }

    &::placeholder {
      color: #999;
      font-weight: bold;
      opacity: 1;
      text-align: center;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #6a1b9a;
  color: #ffffff;
  padding: 12px;
  width: 100%;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #5a1382;
  }
`;
