<<<<<<< HEAD
import React from "react";
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
  const studentName = "Claudio";
  const patients = ["Lucas Felipak", "Mario"];

  return (
    <ReportContainer>
      <Title>Relatório dos Alunos</Title>
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
      <Title>__________________________________</Title>
      <Section>
        <SectionTitle>Nome do Aluno:</SectionTitle>
        <Text>Cassandra Morais</Text>
      </Section>
      <Section>
        <SectionTitle>Nome dos Pacientes:</SectionTitle>
        <List style={{ color: '#A9A9A9' }}>Sem Paciente</List>
      </Section>

    </ReportContainer>
  );
};

export default Report;
=======
export default function Relatorios(){
    return(
        <h1>Relatorios</h1>
    )
}
>>>>>>> 3925d73bf13beed0a37aad68828dfafbc38fd089
