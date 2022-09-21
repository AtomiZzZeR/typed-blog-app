import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectPost } from '../../feature/post/postSlice';
import Styled from './Layout.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { ConfirmDelete } from '../ConfirmDelete';

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
              <Styled.TextAddPost>
                <span>AddPost</span>
                <b>
                  <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                </b>
              </Styled.TextAddPost>
            </Link>
          </Styled.Link>

          <Styled.Link>
            <Link to={'/profile'}>
              <Styled.TextLink>Profile</Styled.TextLink>
            </Link>
          </Styled.Link>

          <Styled.Link>
            <Link to={'/select'}>
              <Styled.TextLink>Select</Styled.TextLink>
            </Link>
          </Styled.Link>
        </Styled.Header>
      </Styled.Container>

      <Outlet />

      {isWindow ? (
        <Styled.GlobalWindow>
          <ConfirmDelete />
        </Styled.GlobalWindow>
      ) : null}
    </Styled.Wrapper>
  );
};

export default Layout;
