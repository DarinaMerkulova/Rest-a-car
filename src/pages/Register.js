import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from 'redux/operations';
import {
  ButtonWrap,
  FormButton,
  FormField,
  FormLabel,
  Input,
  StyledLink,
  StyledTitleForm,
} from 'components/ContactForm/Form.styled';
import { selectAuthentificated } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const isLogining = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (isLogining) return <Navigate to="/contacts" />;

  return (
    <FormField onSubmit={handleSubmit}>
      <StyledTitleForm>Registration</StyledTitleForm>
      <FormLabel>* Username</FormLabel>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The title can only contain letters, apostrophes, hyphens, and spaces."
      />
      <FormLabel>* Email</FormLabel>
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <FormLabel>* Password</FormLabel>
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />

      <FormButton type="submit">Sign Up</FormButton>
      <ButtonWrap>
        <p>Have an Account?</p>
        <StyledLink to="/login">Sing in</StyledLink>
      </ButtonWrap>
    </FormField>
  );
};

export default Register;
