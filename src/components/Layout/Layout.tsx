import { Link, Outlet } from 'react-router-dom';
import Styled from './Layout.styles';

const Layout = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <Styled.Link>
            <Link to={'/'}>
              <Styled.TextLink>Home</Styled.TextLink>
            </Link>
          </Styled.Link>

          <Styled.Link>
            <Link to={'/addPost'}>
              <Styled.TextLink>AddPost</Styled.TextLink>
            </Link>
          </Styled.Link>

          <Styled.Link>
            <Link to={'/profile'}>
              <Styled.TextLink>Profile</Styled.TextLink>
            </Link>
          </Styled.Link>
        </Styled.Header>
      </Styled.Container>
      <Outlet />
    </>
  );
};

export default Layout;
