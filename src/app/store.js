import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from '../features/homepage/formReducer';
export const store = configureStore({
  reducer: {
    forms: formReducer,
  },
});

