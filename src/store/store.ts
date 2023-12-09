import { configureStore } from '@reduxjs/toolkit';
import estadosReducer from '../features/estadosSlice';
import estadoReducer from '../features/estadoSlice';

export const store = configureStore({
  reducer: {
    estadosReducer,
    estadoReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
