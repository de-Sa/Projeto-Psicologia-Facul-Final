import React, { useState, useEffect } from "react";
import {
  ReportContainer,
  Title,
  Section,
  SectionTitle,
  Text,
  List,
  ListItem,
} from "./Relatorios.Styles";

const Report = () => {
  const studentName = "Claudio"; // Nome padrão do estudante
  const patients = ["Lucas Felipak", "Mario"]; // Lista de pacientes

  // Recupera o usuário do localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Estado para controlar se o relatório adicional será exibido
  const [value, setValue] = useState(false);

  // Atualiza o estado `value` com base no username do usuário
  useEffect(() => {
    if (user?.username && user.username !== studentName) {
      setValue(true);
    }
  }, [user, studentName]);

  return (
    <ReportContainer>
      <Title>Relatórios Realizados</Title>
      
      <Section>
        <SectionTitle>Nome do Aluno:</SectionTitle>
        <Text>{studentName}</Text>
      </Section>
      
      <Section>
        <SectionTitle>Nome dos Pacientes:</SectionTitle>
        <List>
          {patients.map((patient, index) => (
            <ListItem key={index}>- {patient}</ListItem>
          ))}
        </List>
      </Section>

      {/* Renderiza a segunda parte do relatório se `value` for true */}
      {value && (
        <>
          <Title>__________________________________</Title>
          <Section>
            <SectionTitle>Nome do Aluno:</SectionTitle>
            <Text>Cassandra Morais</Text>
          </Section>
          <Section>
            <SectionTitle>Nome dos Pacientes:</SectionTitle>
            <List style={{ color: '#A9A9A9' }}>
              <ListItem>- Sem Paciente</ListItem>
            </List>
          </Section>
        </>
      )}
    </ReportContainer>
  );
};

export default Report;
