import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import TodoReducer from '../slice/TodoSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:TodoReducer,
  },
});
