import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../slice/TodoSlice';
export const store = configureStore({
  reducer: {
    todos:TodoReducer,
  },
});
