import { Nav } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Nav to="/">Home</Nav>
      {isLoggedIn && <Nav to="/tasks">Phones</Nav>}
    </nav>
  );
};
