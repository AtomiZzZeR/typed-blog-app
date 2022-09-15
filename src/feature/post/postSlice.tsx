import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../components/types/typex';
import { v4 as uuid } from 'uuid';

interface IInitialState {
  posts: IPost[];
}

const initialState: IInitialState = {
  posts: [
    { id: uuid(), title: 'post 1', body: 'description...' },
    { id: uuid(), title: 'post 2', body: 'description...' },
    { id: uuid(), title: 'post 3', body: 'description...' },
  ],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      const { id, title, body } = payload;

      state.posts = [
        ...state.posts,
        {
          id,
          title,
          body,
        },
      ];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const selectPost = (state: any) => state.post;

export const PostActionList = postSlice.actions;

export default postSlice.reducer;
