import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectPost } from '../../feature/post/postSlice';
import { FormConfirmationDelete } from '../FormConfirmationDelete';
import Styled from './Layout.styles';

const Layout = () => {
  const postSelector = useSelector(selectPost);

  const { isWindow } = postSelector;

  return (
    <Styled.Wrapper>
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

      {isWindow ? (
        <Styled.GlobalWindow>
          <FormConfirmationDelete />
        </Styled.GlobalWindow>
      ) : null}
    </Styled.Wrapper>
  );
};

export default Layout;
