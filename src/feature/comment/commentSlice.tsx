import { createSlice } from '@reduxjs/toolkit';
import { IComment, IPost } from '../../components/types/typex';

interface IInitialState {
  commentList: IComment[];
  isFormAddComment: boolean;
  currentPostId: string;
}

const initialState: IInitialState = {
  commentList: [],
  isFormAddComment: false,
  currentPostId: '',
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    openFormAddComment: (state) => {
      state.isFormAddComment = true;
    },
    closeFormAddComment: (state) => {
      state.isFormAddComment = false;
    },
  },
});

export const selectComment = (state: any) => state.comment;

export const commentActionList = commentSlice.actions;

export default commentSlice.reducer;
