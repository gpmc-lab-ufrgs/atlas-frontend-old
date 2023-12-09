import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Estado } from 'src/interfaces/Estado.type';

const initialState: Estado[] = [];

export const estadoSlice = createSlice({
  name: 'Estado',
  initialState,
  reducers: {
    changeEstado: (state: Estado[], action: PayloadAction<Estado[]>) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { changeEstado } = estadoSlice.actions;
export const estadoSelected = (state: RootState) => state.estadoReducer;
export default estadoSlice.reducer;
