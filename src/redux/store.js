import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './slice/taskSlice';
import modalSlice from './slice/modalSlice';

export const store = configureStore({
  reducer: {
    taskSlice,
    modalSlice,
  },
})