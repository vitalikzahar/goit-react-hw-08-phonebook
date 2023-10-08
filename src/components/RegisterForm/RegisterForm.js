import { Form, FormLebel } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth-Operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLebel>
        Username
        <input type="text" name="name" />
      </FormLebel>
      <FormLebel>
        Email
        <input type="email" name="email" />
      </FormLebel>
      <FormLebel>
        Password
        <input type="password" name="password" />
      </FormLebel>
      <button type="submit">Register</button>
    </Form>
  );
};
