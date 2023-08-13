import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Form, Input } from 'antd';
import { StyledButtonForm, StyledContainerForm, StyledFormLogin} from './LoginForm.styled';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <StyledContainerForm>
       <StyledFormLogin
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Styledheckbox>Remember me</Styledheckbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>
     */}
          <Form.Item>
            <StyledButtonForm type="primary" htmlType="submit" className="login-form-button">
              Log in
            </StyledButtonForm> 
             Or
             <a href="/">register now!</a>
          </Form.Item>
        </StyledFormLogin>
    </StyledContainerForm>
  )
}

export default LoginForm

