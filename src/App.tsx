import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postActionList } from './feature/post/postSlice';
import { AppRouter } from './components/AppRouter';
import { authActionList } from './feature/auth/authSlice';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActionList.authorization());
  }, []);

  useEffect(() => {
    dispatch(authActionList.currentUserId());
  }, []);

  useEffect(() => {
    dispatch(postActionList.addPostList());
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
