import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface IInitialState {
  isAuth: boolean;
  currentUserId: number;
}

const initialState: IInitialState = {
  isAuth: false,
  currentUserId: 1,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorization: (state) => {
      state.isAuth = Boolean(localStorage.getItem('isAuth'));
    },
    currentUserId: (state) => {
      state.currentUserId = Number(localStorage.getItem('currentUserId')) || 1;
    },
    login: (state) => {
      state.isAuth = true;
      localStorage.setItem('isAuth', 'true');
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem('isAuth');
    },
    changeUserId: (state, { payload: userId }) => {
      state.currentUserId = Number(userId);
      localStorage.setItem('currentUserId', `${state.currentUserId}`);
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const authActionList = authSlice.actions;

export default authSlice.reducer;
