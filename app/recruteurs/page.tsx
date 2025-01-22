'use client';

import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';

const RecruiterList = () => {
  const router = useRouter();
  const candidates = useSelector((state: RootState) => state.candidates.list);

  const columns = [
    { title: 'Nom', dataIndex: 'name', key: 'name' },
    { title: 'E-mail', dataIndex: 'email', key: 'email' },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <a onClick={() => router.push(`/recruteurs/${record.id}`)}>Voir les détails</a>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Liste des candidats</h2>
      <Table dataSource={candidates} columns={columns} rowKey="id" />
    </div>
  );
};

export default RecruiterList;
