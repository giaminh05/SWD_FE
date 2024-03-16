import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn'; // Import component SignIn

const Login = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate login process (Replace with your actual login logic)
    setTimeout(() => {
      setLoading(false);
      message.success('Login successful!');
      closeModal();
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true); // Hiển thị SignUp component khi nhấp vào nút SignUp
  };

  const handleBackToSignIn = () => {
    setShowSignUp(false); // Hiển thị SignIn component khi nhấp vào nút Back to SignIn
  };

  return (
    <>
      {!showSignUp ? (
        <SignIn /> // Hiển thị trang SignIn ban đầu
      ) : (
        <SignUp closeModal={closeModal} handleBackToSignIn={handleBackToSignIn} />
      )}
      {!showSignUp && (
        <Button type="primary" onClick={handleSignUpClick}>SignUp</Button>
      )}
    </>
  );
};

export default Login;
