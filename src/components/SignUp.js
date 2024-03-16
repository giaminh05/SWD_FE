import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';

const SignUp = ({ closeModal, handleBackToSignIn }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate sign up process (Replace with your actual sign up logic)
    setTimeout(() => {
      setLoading(false);
      message.success('Sign Up successful!');
      closeModal();
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome!</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Row justify="center">
            <Col>
              <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: '10px' }}>
                Sign Up
              </Button>
            </Col>
            <Col>
              <Button type="default" onClick={handleBackToSignIn}>
                Back to SignIn
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;





