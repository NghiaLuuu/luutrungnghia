import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    jobs: reducer, // Đăng ký reducer
  },
});

export default store;
