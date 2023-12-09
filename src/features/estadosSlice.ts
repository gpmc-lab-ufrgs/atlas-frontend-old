/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Estado } from 'src/interfaces/Estado.type';

const initialState: Estado[] = [];

export const estadosSlice = createSlice({
  name: 'estados',
  initialState,
  reducers: {
    changeEstados: (state: Estado[], action: PayloadAction<Estado[]>) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { changeEstados } = estadosSlice.actions;
export const estadosSelected = (state: RootState) => state.estadosReducer;
export default estadosSlice.reducer;
