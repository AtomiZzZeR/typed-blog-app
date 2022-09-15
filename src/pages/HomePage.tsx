// import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { PostList } from '../components/PostList';
import { PostActionList } from '../feature/post/postSlice';

const HomePage = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default HomePage;
