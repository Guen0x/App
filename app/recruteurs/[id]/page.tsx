'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useParams } from 'next/navigation';

const CandidateDetails = () => {
  const { id } = useParams();
  const candidate = useSelector((state: RootState) =>
    state.candidates.list.find((c) => c.id === parseInt(id))
  );

  if (!candidate) {
    return <div>Candidat introuvable.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Détails du candidat</h2>
      <p>
        <strong>Nom :</strong> {candidate.firstName}
      </p>
      <p>
        <strong>Email :</strong> {candidate.email}
      </p>
    </div>
  );
};

export default CandidateDetails;
