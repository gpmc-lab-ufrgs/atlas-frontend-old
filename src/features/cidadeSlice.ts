import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { Cidades } from 'src/interfaces/Cidades.type';

const initialState: Cidades[] = [];

export const cidadeSlice = createSlice({
  name: 'Cidade',
  initialState,
  reducers: {
    changeCidade: (state: Cidades[], action: PayloadAction<Cidades[]>) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { changeCidade } = cidadeSlice.actions;
export const cidadeSelected = (state: RootState) => state.cidadeReducer;
export default cidadeSlice.reducer;
