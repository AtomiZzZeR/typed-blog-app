import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AddPostPage from './pages/AddPostPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { PostActionList } from './feature/post/postSlice';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostActionList.addPosts());
  }, []);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'addPost'} element={<AddPostPage />} />
          <Route path={'profile'} element={<ProfilePage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
