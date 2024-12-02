import React, { useState } from 'react';
import axios from 'axios';
import {
  Layout,
  SidebarContainer,
  ButtonsContainer,
  TabButton,
  MenuList,
  MenuItem,
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
} from './Styles';

function Prontuario() {
  const [activeSubSection, setActiveSubSection] = useState('dados');
  const [currentDate] = useState(new Date().toLocaleDateString('pt-BR'));
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    telefone: '',
    contatoEmergencia: '',
    ocupacao: '',
    escolaridade: '',
    necessidadeEspecial: '',
    endereco: '',
    cep: '',
    numero: '',
    complemento: '',
    historicoFamiliar: '',
    historicoSocial: '',
    consideracoesFinais: '',
    observacoes: '',
  });

  const subSections = [
    { id: 'dados', label: 'Dados do Paciente' },
    { id: 'historicoFamiliar', label: 'Histórico Familiar' },
    { id: 'historicoSocial', label: 'Histórico Social' },
    { id: 'consideracoesFinais', label: 'Considerações Finais' },
    { id: 'observacoes', label: 'Observações' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('URL_DO_SEU_BACKEND', formData)
      .then(response => {
        alert('Dados enviados com sucesso!');
      })
      .catch(error => {
        alert('Erro ao enviar os dados. Por favor, tente novamente.');
      });
  };

  const renderSubSection = () => {
    switch (activeSubSection) {
      case 'dados':
        return (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento</Label>
              <Input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Gênero</Label>
              <Input type="text" name="genero" value={formData.genero} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <Input type="text" name="telefone" value={formData.telefone} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label>Necessidade Especial</Label>
              <Select name="necessidadeEspecial" value={formData.necessidadeEspecial} onChange={handleInputChange} required>
                <option value="">Selecione...</option>
                <option value="cognitiva">Cognitiva</option>
                <option value="locomocao">Locomoção</option>
                <option value="visao">Visão</option>
                <option value="audicao">Audição</option>
                <option value="psicossocial">Psicossocial</option>
                <option value="outras">Outras</option>
              </Select>
            </FormGroup>
          </form>
        );
      
      case 'historicoFamiliar':
        return (
          <FormGroup>
            <Label>Histórico Familiar</Label>
            <TextArea
              name="historicoFamiliar"
              value={formData.historicoFamiliar}
              onChange={handleInputChange}
              placeholder="Descreva o histórico familiar do paciente..."
              rows="6"
              required
            />
          </FormGroup>
        );

      case 'historicoSocial':
        return (
          <FormGroup>
            <Label>Histórico Social</Label>
            <TextArea
              name="historicoSocial"
              value={formData.historicoSocial}
              onChange={handleInputChange}
              placeholder="Descreva o histórico social do paciente..."
              rows="6"
              required
            />
          </FormGroup>
        );

      case 'consideracoesFinais':
        return (
          <FormGroup>
            <Label>Considerações Finais</Label>
            <TextArea
              name="consideracoesFinais"
              value={formData.consideracoesFinais}
              onChange={handleInputChange}
              placeholder="Coloque aqui suas considerações finais sobre o paciente..."
              rows="6"
              required
            />
          </FormGroup>
        );

      case 'observacoes':
        return (
          <FormGroup>
            <Label>Observações</Label>
            <TextArea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleInputChange}
              placeholder="Adicione observações importantes sobre o paciente..."
              rows="6"
              required
            />
          </FormGroup>
        );
        
      default:
        return null;
    }
  };

  return (
    <Layout>
      <SidebarContainer>
        <ButtonsContainer>
          <TabButton onClick={() => setActiveSubSection('dados')}>Dados do Paciente</TabButton>
          <TabButton disabled>Data Atual: {currentDate}</TabButton>
        </ButtonsContainer>
        <MenuList>
          {subSections.map(({ id, label }) => (
            <MenuItem
              key={id}
              onClick={() => setActiveSubSection(id)}
              isSelected={activeSubSection === id}
            >
              {label}
            </MenuItem>
          ))}
        </MenuList>
        <SubmitButton type="submit">Confirmar</SubmitButton>
      </SidebarContainer>
      <FormContainer>{renderSubSection()}</FormContainer>

    </Layout>
  );
}

export default Prontuario;
