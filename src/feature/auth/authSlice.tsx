import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface IInitialState {
  isAuth: boolean;
  currentUserId: number;
}

const initialState: IInitialState = {
  isAuth: false,
  currentUserId: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorization: (state) => {
      state.isAuth = Boolean(localStorage.getItem('isAuth'));
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
      state.currentUserId = userId;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const authActionList = authSlice.actions;

export default authSlice.reducer;
