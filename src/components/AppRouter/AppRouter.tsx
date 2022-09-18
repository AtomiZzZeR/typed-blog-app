import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectAuth } from '../../feature/auth/authSlice';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import { privateRoutes, publicRoutes } from '../../router';
import { Layout } from '../Layout';

const AppRouter = () => {
  const authSelector = useSelector(selectAuth);

  const { isAuth } = authSelector;

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path={'/'} element={<Layout />}>
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
            ))}
            {/* <Route path={'*'} element={<Navigate to={''} replace />} /> */}
            <Route path={'*'} element={<NotFoundPage />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
