import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from '../store/slices/counter';
import { yugiohSlice } from './slices/yugioh/yugiohSlice';
export const store = configureStore({
  reducer: {
        counter : counterSlice.reducer,
        yugioh : yugiohSlice.reducer
  },
})