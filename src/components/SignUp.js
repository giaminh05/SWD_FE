import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import axios from 'axios';

const SignUp = ({ closeModal, handleBackToSignIn }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/accounts/', values);
      setLoading(false);
      message.success('Sign Up successful!');
      closeModal();
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.message);
    }
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
          rules={[{ required: true, message: 'Please input your Full Name!' }]}
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

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>

        <Form.Item
          name="avatar"
          rules={[{ required: true, message: 'Please input your avatar URL!' }]}
        >
          <Input placeholder="Avatar URL" />
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