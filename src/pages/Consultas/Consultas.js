import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Caso use React Router para navegação
import { Button, DetailsContainer } from './Styled';

// Simulando uma resposta de busca para uma consulta
const mockEnrollmentDetails = {
  1: {
    id: 1,
    student_id: 101,
    professor_id: 201,
    client_id: 1,
    familiar_historic: 'Histórico familiar relevante.',
    social_historic: 'Histórico social relevante.',
    obs: 'Observações importantes.',
    is_active: true
  },
  2: {
    id: 2,
    student_id: 102,
    professor_id: 202,
    client_id: 2,
    familiar_historic: 'Histórico familiar incompleto.',
    social_historic: 'Histórico social incompleto.',
    obs: 'Nenhuma observação.',
    is_active: false
  },
  // Adicione mais mocks se necessário
};

export default function Consultas() {
  const { id } = useParams();  // Pegando o ID da consulta da URL
  const [enrollment, setEnrollment] = useState(null);

  useEffect(() => {
    // Simulando a busca por uma consulta
    const fetchEnrollment = () => {
      const data = mockEnrollmentDetails[id];
      setEnrollment(data);
    };

    fetchEnrollment();
  }, [id]);

  if (!enrollment) {
    return <p>Carregando...</p>;
  }

  return (
    <DetailsContainer>
      <h2>Detalhes da Consulta #{enrollment.id}</h2>
      <p><strong>Student ID:</strong> {enrollment.student_id}</p>
      <p><strong>Professor ID:</strong> {enrollment.professor_id}</p>
      <p><strong>Histórico Familiar:</strong> {enrollment.familiar_historic || 'N/A'}</p>
      <p><strong>Histórico Social:</strong> {enrollment.social_historic || 'N/A'}</p>
      <p><strong>Observações:</strong> {enrollment.obs || 'N/A'}</p>
      <Button>Editar</Button>
    </DetailsContainer>
  );
};
