import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import SignUp from './SignUp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext'; // Ensure this path is correct

const SignIn = ({ closeModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { setUser } = useUserContext(); 


  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/accounts/auth', values);
      if (response.status === 201) {
        setLoading(false);
        message.success('Login successful!');
  
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify({ email: values.email }));
        setUser({ email: values.email });
        setShowSignUp(false);
        navigate('/');
      } else {
        setLoading(false);
        message.error('Unexpected status code: ' + response.status);
      }
    } catch (error) {
      setLoading(false);
      message.error('Error: ' + error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLoginClick = () => {
    // Code to handle login action
    // You can call `onFinish` function here if needed
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleBackToSignIn = () => {
    setShowSignUp(false); 
  };

  return (
    <>
      {!showSignUp ? (
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
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
                <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 10 }}>
                  LogIn
                </Button>
              </Col>
              <Col>
                <Button type="primary" onClick={handleSignUpClick}>
                  SignUp
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      ) : (
        <SignUp closeModal={closeModal} handleBackToSignIn={handleBackToSignIn} />
      )}
    </>
  );
};

export default SignIn;

