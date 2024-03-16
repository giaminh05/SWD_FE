// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import SignUp from './SignUp';

// const SignIn = ({ closeModal }) => {
//   const [loading, setLoading] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   const onFinish = (values) => {
//     setLoading(true);
//     // Simulate login process (Replace with your actual login logic)
//     setTimeout(() => {
//       setLoading(false);
//       message.success('Login successful!');
//       closeModal();
//     }, 2000);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const handleLoginClick = () => {
//     // Code to handle login action
//     // You can call `onFinish` function here if needed
//   };

//   const handleSignUpClick = () => {
//     setShowSignUp(true); // Hiển thị SignUp component khi nhấp vào nút SignUp
//   };

//   const handleBackToSignIn = () => {
//     setShowSignUp(false); // Hiển thị SignIn component khi nhấp vào nút Back to SignIn
//   };

//   return (
//     <>
//       {!showSignUp ? (
//         <Form
//           name="basic"
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: 'Please input your username!' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" loading={loading}>
//               Login
//             </Button>
//             {/* <Button type="primary" onClick={handleSignUpClick}>SignUp</Button> */}
//           </Form.Item>
//         </Form>
//       ) : (
//         <SignUp closeModal={closeModal} handleBackToSignIn={handleBackToSignIn} />
//       )}
//     </>
//   );
// };

// export default SignIn;

import React, { useState } from 'react';
import { Form, Input, Button, message, Row, Col } from 'antd';
import SignUp from './SignUp';

const SignIn = ({ closeModal }) => {
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

  const handleLoginClick = () => {
    // Code to handle login action
    // You can call `onFinish` function here if needed
  };

  const handleSignUpClick = () => {
    setShowSignUp(true); // Display SignUp component when SignUp button is clicked
  };

  const handleBackToSignIn = () => {
    setShowSignUp(false); // Display SignIn component when Back to SignIn button is clicked
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
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
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
                  Login
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

