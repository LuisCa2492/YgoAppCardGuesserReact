import { configureStore } from '@reduxjs/toolkit'
import { yugiohSlice } from './slices/yugioh/yugiohSlice';
import { authSlice } from './auth';
export const store = configureStore({
  reducer: {
        yugioh : yugiohSlice.reducer,
        auth: authSlice.reducer
  },
})