import React, { useEffect, useState } from 'react';
import PacienteCard from '../../components/PacientCard/PacientCard';
import { Container, Title, PatientList, TableContainer, Button } from './Styled';

// Simulação de dados dos pacientes e enrollments, incluindo o campo 'is_active'
const mockPacientes = [
  { id: 1, nome: 'Lucas Filipak' },
  { id: 2, nome: 'Mario' },
];

const mockEnrollments = [
  { id: 1, student_id: 3, professor_id: 2, client_id: 1, familiar_historic: '', social_historic: '', obs: '', is_active: true },
  { id: 2, student_id: 3, professor_id: 2, client_id: 1, familiar_historic: '', social_historic: '', obs: '', is_active: true },
  { id: 3, student_id: 3, professor_id: 2, client_id: 2, familiar_historic: '', social_historic: '', obs: '', is_active: true },
  { id: 4, student_id: 3, professor_id: 2, client_id: 2, familiar_historic: '', social_historic: '', obs: '', is_active: true },
];

const PacientesList = () => {
  const [pacientes, setPacientes] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  useEffect(() => {
    setPacientes(mockPacientes);  // Aqui você substituiria pela chamada real ao backend
  }, []);

  const handlePacienteClick = (pacienteId) => {
    // Simulando o carregamento de enrollments baseado no paciente
    const pacienteEnrollments = mockEnrollments.filter(enrollment => enrollment.client_id === pacienteId);
    setEnrollments(pacienteEnrollments);
    setSelectedPaciente(pacienteId);
  };

  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Title>Lista de Pacientes</Title>
      <PatientList>
        {pacientes.map((paciente) => (
          <div key={paciente.id} onClick={() => handlePacienteClick(paciente.id)}>
            <PacienteCard nome={paciente.nome} id={paciente.id} />
          </div>
        ))}
      </PatientList>

      {selectedPaciente && (
        <div>
          <h2>Consultas de {pacientes.find(p => p.id === selectedPaciente).nome}</h2>
          {enrollments.length > 0 ? (
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Aluno</th>
                    <th>Professor</th>
                    <th>Historico Familiar</th>
                    <th>Historico Social</th>
                    <th>Observações</th>
                    <th>Finalizar</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.map((enrollment) => (
                    <tr key={enrollment.id}>
                      <td>{enrollment.id}</td>
                      <td>{enrollment.student_id}</td>
                      <td>{enrollment.professor_id}</td>
                      <td>{enrollment.familiar_historic || 'N/A'}</td>
                      <td>{enrollment.social_historic || 'N/A'}</td>
                      <td>{enrollment.obs || 'N/A'}</td>
                      <td>
                        {enrollment.is_active ? (
                          <Button disabled active>
                            Ativo
                          </Button>
                        ) : (
                          <Button disabled={false}>
                            Finalizar
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          ) : (
            <p>Não há consultas disponíveis para este paciente.</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default PacientesList;
