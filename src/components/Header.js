import React, { useState } from 'react';
import { Menu, Button, Row, Col, Modal } from 'antd';
import Login from './Login';
import SignUp from './SignUp';
import SignIn from './Login';



const { Item } = Menu;

const Header = () => {
    const [signInModalVisible, setSignInModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);

    const handleSignInClick = () => {
        setSignInModalVisible(true);
    };

    const handleSignUpClick = () => {
        setSignUpModalVisible(true);
    };

    const handleSignInModalCancel = () => {
        setSignInModalVisible(false);
    };

    const handleSignUpModalCancel = () => {
        setSignUpModalVisible(false);
    };

    return (

        <div style={{ backgroundColor: '#FF4949', maxHeight: "auto" }}>
            <Row justify="space-between" align="middle" style={{ margin: '0 auto' }} >
                <Col>
                    <Menu mode="horizontal" style={{ backgroundColor: '#FF4949', color: '#FFFFFF', padding: '10px' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4440/4440467.png" style={{ width: '45px', height: '45px', marginRight: '15px'}}></img>
                        <Item key="home" style={{ color: '#FFFFFF' }}>Home</Item>
                        <Item key="categories" style={{ color: '#FFFFFF' }}>Categories</Item>
                        <Item key="sell" style={{ color: '#FFFFFF' }}>Sell</Item>
                    </Menu>
                </Col>
                <Col style={{marginRight:"10px"}}>
                    <Button type="primary" style={{ backgroundColor: '#FFFFFF', color: '#FF4949' }} onClick={handleSignInClick}>SignIn</Button>
                    <Button type="default" style={{ backgroundColor: '#FF4949', color: '#FFFFFF', marginLeft: '10px' }} onClick={handleSignUpClick}>SignUp</Button>
                </Col>
            </Row>
            <Modal
                title="Hi! Welcome Back"
                visible={signInModalVisible}
                onCancel={handleSignInModalCancel}
                footer={null}
            >
                <Login/>
            </Modal>
            <Modal
                title="Welcome!!!"
                visible={signUpModalVisible}
                onCancel={handleSignUpModalCancel}
                footer={null}
            >
                <SignUp />
            </Modal>
        </div>

    );

};


export default Header;