import React from 'react';

import {
  ButtonWrap,
  FormButton,
  FormField,
  FormLabel,
  Input,
  StyledLink,
  StyledTitleForm,
} from 'components/ContactForm/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthentificated);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      loginUserThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  if (authenticated) return <Navigate to="/contacts" />;
  return (
    <FormField onSubmit={handleSubmit}>
      <StyledTitleForm>Log in</StyledTitleForm>
      <FormLabel>* Email</FormLabel>
      <Input 
        type="email" 
        name="email"
        placeholder="Enter your email"
        required 
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The title can only contain letters, apostrophes, hyphens, and spaces."/>
      <FormLabel>* Password</FormLabel>
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <FormButton type="submit">Log In</FormButton>
      <ButtonWrap>
        <p>Don`t have an Account?</p>
        <StyledLink to="/register">Sing up</StyledLink>
      </ButtonWrap>
    </FormField>
  );
};

export default Login;
