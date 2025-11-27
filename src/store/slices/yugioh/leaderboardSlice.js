import { createSlice } from '@reduxjs/toolkit';

export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState: {
     usersleaderboard: [],
     isLoading:false,
     
  },
  reducers: {
    startLoadingLeaderBoard: (state, /* action */ ) => {
       state.isLoading=true
    },
    setUsersLeaderBoard:(state,action) =>{
        state.isLoading=false;
        state.usersleaderboard=action.payload;
    },
    
  }
});
export const { 
    setUsersLeaderBoard,
    startLoadingLeaderBoard,
 } = leaderBoardSlice.actions;