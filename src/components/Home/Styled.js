import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  padding-top: 100px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 6.75em;
  color: #5a1ab7;
  font-weight: bold;
`;

export const Greeting = styled.p`
  font-size: 2.5em;
  margin-top: 20px;
  color: #333;
`;

export const Username = styled.span`
  color: #5a1ab7;
  font-size: 2.5rem;
`;

export const ButtonGroup = styled.div`
  margin-top: 40px;
`;

export const MainButton = styled.button`
  background-color: #5a1ab7;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 1em;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #473092;
  }
`;