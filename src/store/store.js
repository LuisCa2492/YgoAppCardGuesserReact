import { configureStore } from '@reduxjs/toolkit'
import { yugiohSlice } from './slices/yugioh/yugiohSlice';
import { authSlice } from './auth';
import { leaderBoardSlice } from './slices/yugioh';
export const store = configureStore({
  reducer: {
        yugioh : yugiohSlice.reducer,
        auth: authSlice.reducer,
        leaderBoard: leaderBoardSlice.reducer
  },
})