import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

export const InfoContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const UserInfo = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
