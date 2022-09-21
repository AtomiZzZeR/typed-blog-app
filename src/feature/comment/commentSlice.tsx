import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface IInitialState {
  currentCommentId: string;
  isFormAddComment: boolean;
  isFormEditComment: boolean;
  isEdit: boolean;
}

const initialState: IInitialState = {
  currentCommentId: '',
  isFormAddComment: false,
  isFormEditComment: false,
  isEdit: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCurrentCommentId: (state, { payload: commentId }) => {
      state.currentCommentId = commentId;
    },
    openAddComment: (state) => {
      state.isFormAddComment = true;
    },
    closeAddComment: (state) => {
      state.isFormAddComment = false;
    },
    openFormEditComment: (state) => {
      state.isFormEditComment = true;
    },
    closeFormEditComment: (state) => {
      state.isFormEditComment = false;
    },
    setEditable: (state) => {
      state.isEdit = true;
    },
    removeEditable: (state) => {
      state.isEdit = false;
    },
  },
});

export const selectComment = (state: RootState) => state.comment;

export const commentActionList = commentSlice.actions;

export default commentSlice.reducer;
