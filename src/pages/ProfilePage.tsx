import { useDispatch } from 'react-redux';
import { authActionList } from '../feature/auth/authSlice';
import Styled from './Page.styles';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(authActionList.logout());
  };

  return (
    <Styled.Wrapper>
      <button onClick={handleLogoutClick}>Выйти</button>
    </Styled.Wrapper>
  );
};

export default ProfilePage;
