import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  UserInfo,
  Label,
  InfoContainer,
  FormContainer,
  InfoBlock,
  Input,
  Button,
  Section,
} from './Styled';

const Configuracoes = () => {
  const [user, setUser] = useState({name: 'Pedro', ra: '12345', type: 'A'});
  const [newAluno, setNewAluno] = useState({ name: '', ra: '', password: '' });
  const [newProfessor, setNewProfessor] = useState({ name: '', ra: '', password: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
  }, []);

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAluno = () => {
    console.log('Aluno criado:', newAluno);
    setNewAluno({ name: '', ra: '', password: '' });
  };

  const handleCreateProfessor = () => {
    console.log('Professor criado:', newProfessor);
    setNewProfessor({ name: '', ra: '', password: '' });
  };
  return (
    <Container>
    <Title>Configurações do Usuário</Title>

    <InfoContainer>
  {user && (
    <>
      <InfoBlock>
        <Label>Nome</Label>
        <UserInfo>{user.name}</UserInfo>
      </InfoBlock>
      <InfoBlock>
        <Label>RA</Label>
        <UserInfo>{user.ra}</UserInfo>
      </InfoBlock>
      <InfoBlock>
        <Label>Tipo</Label>
        <UserInfo>{user.type === 'A' ? 'Admin Geral' : user.type === 'B' ? 'Professor' : 'Aluno'}</UserInfo>
      </InfoBlock>
    </>
  )}
</InfoContainer>



      {/* Seção de Alteração de Dados */}
      <Section>
        <h2>Alterar Dados</h2>
        <FormContainer>
          <Label>Nome:</Label>
          <Input type="text" placeholder="Novo nome" />
          <Label>Senha:</Label>
          <Input type="password" placeholder="Nova senha" />
          <Button>Salvar Alterações</Button>
        </FormContainer>
      </Section>

      {/* Funções Extras para Admin Geral */}
      {user?.type === 'A' && (
        <>
          <Section>
            <h2>Criar Aluno</h2>
            <FormContainer>
              <Label>Nome:</Label>
              <Input
                type="text"
                name="name"
                value={newAluno.name}
                onChange={(e) => handleInputChange(e, setNewAluno)}
                placeholder="Nome do aluno"
              />
              <Label>RA:</Label>
              <Input
                type="text"
                name="ra"
                value={newAluno.ra}
                onChange={(e) => handleInputChange(e, setNewAluno)}
                placeholder="RA do aluno"
              />
              <Label>Senha:</Label>
              <Input
                type="password"
                name="password"
                value={newAluno.password}
                onChange={(e) => handleInputChange(e, setNewAluno)}
                placeholder="Senha"
              />
              <Button onClick={handleCreateAluno}>Criar Aluno</Button>
            </FormContainer>
          </Section>

          <Section>
            <h2>Criar Professor</h2>
            <FormContainer>
              <Label>Nome:</Label>
              <Input
                type="text"
                name="name"
                value={newProfessor.name}
                onChange={(e) => handleInputChange(e, setNewProfessor)}
                placeholder="Nome do professor"
              />
              <Label>RA:</Label>
              <Input
                type="text"
                name="ra"
                value={newProfessor.ra}
                onChange={(e) => handleInputChange(e, setNewProfessor)}
                placeholder="RA do professor"
              />
              <Label>Senha:</Label>
              <Input
                type="password"
                name="password"
                value={newProfessor.password}
                onChange={(e) => handleInputChange(e, setNewProfessor)}
                placeholder="Senha"
              />
              <Button onClick={handleCreateProfessor}>Criar Professor</Button>
            </FormContainer>
          </Section>
        </>
      )}

      {/* Funções Extras para Professores */}
      {user?.type === 'B' && (
        <Section>
          <h2>Criar Aluno</h2>
          <FormContainer>
            <Label>Nome:</Label>
            <Input
              type="text"
              name="name"
              value={newAluno.name}
              onChange={(e) => handleInputChange(e, setNewAluno)}
              placeholder="Nome do aluno"
            />
            <Label>RA:</Label>
            <Input
              type="text"
              name="ra"
              value={newAluno.ra}
              onChange={(e) => handleInputChange(e, setNewAluno)}
              placeholder="RA do aluno"
            />
            <Label>Senha:</Label>
            <Input
              type="password"
              name="password"
              value={newAluno.password}
              onChange={(e) => handleInputChange(e, setNewAluno)}
              placeholder="Senha"
            />
            <Button onClick={handleCreateAluno}>Criar Aluno</Button>
          </FormContainer>
        </Section>
      )}
    </Container>
  );
};

export default Configuracoes;
