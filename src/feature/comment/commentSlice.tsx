import { createSlice } from '@reduxjs/toolkit';
import { IComment, IPost } from '../../components/types/types';

interface IInitialState {
  currentCommentId: string;
  isFormAddComment: boolean;
}

const initialState: IInitialState = {
  currentCommentId: '',
  isFormAddComment: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCurrentCommentId: (state, { payload: commentId }) => {
      state.currentCommentId = commentId;
    },
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
