import { configureStore } from '@reduxjs/toolkit';
import estadosReducer from '../features/estadosSlice';
import estadoReducer from '../features/estadoSlice';
import cidadeReducer from '../features/cidadeSlice';

export const store = configureStore({
  reducer: {
    estadosReducer,
    estadoReducer,
    cidadeReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
