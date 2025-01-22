'use client';

import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CandidateForm = () => {
  const onFinish = (values: any) => {
    console.log('Candidat soumis :', values);
    message.success('Votre candidature a été soumise avec succès!');
  };

  const uploadProps = {
    beforeUpload: (file: File) => {
      const isPDF = file.type === 'application/pdf';
      if (!isPDF) {
        message.error(`${file.name} n'est pas un fichier PDF valide.`);
      }
      return isPDF || Upload.LIST_IGNORE;
    },
    maxCount: 1,
  };

  return (
    <div className="container">
      <h2>Formulaire de Candidature</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Form.Item
          label="Prénom"
          name="firstName"
          rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
        >
          <Input placeholder="Votre prénom" />
        </Form.Item>

        <Form.Item
          label="Nom"
          name="lastName"
          rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
        >
          <Input placeholder="Votre nom" />
        </Form.Item>

        <Form.Item
          label="Adresse e-mail"
          name="email"
          rules={[
            { required: true, message: 'Veuillez entrer une adresse e-mail' },
            { type: 'email', message: 'Veuillez entrer une adresse e-mail valide' },
          ]}
        >
          <Input placeholder="Votre adresse e-mail" />
        </Form.Item>

        <Form.Item
          label="Téléchargez votre CV"
          name="cv"
          rules={[{ required: true, message: 'Veuillez télécharger votre CV' }]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Cliquez pour télécharger</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Soumettre votre candidature
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CandidateForm;
