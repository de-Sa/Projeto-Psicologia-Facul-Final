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
  const [user, setUser] = useState({ name: 'Pedro', ra: '12345', type: 'A' });
  const [newAluno, setNewAluno] = useState({ name: '', ra: '', password: '' });
  const [newProfessor, setNewProfessor] = useState({ name: '', ra: '', password: '' });

  const [alunoMensagem, setAlunoMensagem] = useState(false);
  const [professorMensagem, setProfessorMensagem] = useState(false);

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAluno = () => {
    setAlunoMensagem(true); // Exibe a mensagem de sucesso
    setTimeout(() => setAlunoMensagem(false), 4000); // Oculta a mensagem após 4 segundos
    console.log('Aluno criado:', newAluno);
    setNewAluno({ name: '', ra: '', password: '' }); // Limpa o formulário
  };

  const handleCreateProfessor = () => {
    setProfessorMensagem(true); // Exibe a mensagem de sucesso
    setTimeout(() => setProfessorMensagem(false), 4000); // Oculta a mensagem após 4 segundos
    console.log('Professor criado:', newProfessor);
    setNewProfessor({ name: '', ra: '', password: '' }); // Limpa o formulário
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
              <UserInfo>
                {user.type === 'A' ? 'Admin Geral' : user.type === 'B' ? 'Professor' : 'Aluno'}
              </UserInfo>
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
            {alunoMensagem && <h3>Aluno criado com sucesso!</h3>}
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
            {professorMensagem && <h3>Professor criado com sucesso!</h3>}
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
          {alunoMensagem && <h3>Aluno criado com sucesso!</h3>}
        </Section>
      )}
    </Container>
  );
};

export default Configuracoes;
