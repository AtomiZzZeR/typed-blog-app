import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActionList, selectAuth } from '../../feature/auth/authSlice';
import Styled from './Profilte.styles';

const Profile = () => {
  const dispatch = useDispatch();

  const authSelector = useSelector(selectAuth);

  const { currentUserId } = authSelector;

  const [input, setInput] = useState({ isOpen: false, value: '' });

  const handleOpenChangeClick = () => {
    setInput({ ...input, isOpen: true });
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, value: e.target.value });
  };

  const handleInputBlur = () => {
    if (Number(input.value) <= 0) {
      alert('Error!');

      return;
    }

    if (isNaN(Number(input.value)) === true) {
      alert('Error!');

      return;
    }
    dispatch(authActionList.changeUserId(input.value));

    setInput({ isOpen: false, value: '' });
  };

  const handleLogoutClick = () => {
    dispatch(authActionList.logout());
  };

  return (
    <Styled.Wrapper>
      <Styled.UserId onClick={handleOpenChangeClick}>
        user id: {currentUserId}
      </Styled.UserId>

      <div>
        {input.isOpen ? (
          <Styled.Input
            type={'text'}
            value={input.value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
          ></Styled.Input>
        ) : null}
      </div>

      <Styled.Button onClick={handleLogoutClick}>
        <Link to={'/login'}>Logout</Link>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Profile;
