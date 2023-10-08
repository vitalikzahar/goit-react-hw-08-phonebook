import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth-Operations';
import { Form, FormLebel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLebel>
        Email
        <input type="email" name="email" />
      </FormLebel>
      <FormLebel>
        Password
        <input type="password" name="password" />
      </FormLebel>
      <button type="submit">Log In</button>
    </Form>
  );
};
