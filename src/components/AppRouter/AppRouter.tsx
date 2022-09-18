import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectAuth } from '../../feature/auth/authSlice';
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
            <Route path={'*'} element={<Navigate to={''} replace />} />
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
          <Route path={'*'} element={<Navigate to={'login'} replace />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
