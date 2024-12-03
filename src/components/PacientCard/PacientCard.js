import React from 'react';
import { PatientCard, PatientName, PatientID } from './Styled';

const PacienteCard = ({ nome, id }) => {
  return (
    <PatientCard>
      <PatientID>{id}</PatientID>
      <PatientName>{nome}</PatientName>
    </PatientCard>
  );
};
export default PacienteCard;