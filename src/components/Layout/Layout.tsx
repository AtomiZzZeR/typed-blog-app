import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/addPost'}>AddPost</Link>
        <Link to={'/profile'}>Profile</Link>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
