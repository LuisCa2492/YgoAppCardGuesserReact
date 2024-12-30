import { createSlice } from '@reduxjs/toolkit';

export const yugiohSlice = createSlice({
  name: 'yugioh',
  initialState: {
     cartas: [],
     carta: {},
     isLoading:false,
     totalScore: 0,
     actualScore: 0,
     notGuessedNumber: 4
  },
  reducers: {
    startLoadingCard: (state, /* action */ ) => {
       state.isLoading=true
    },
    setRandomCard:(state,action) =>{
        state.isLoading=false;
        state.carta=action.payload;
    },
    searchByPartialName:(state,action) =>{
        state.isLoading= false;
        state.cartas = action.payload;
    },
    setActualScore:(state,action) => {
       state.actualScore = (state.actualScore + action.payload) > 0 ? state.actualScore + action.payload : 0;
       state.totalScore = (state.totalScore + action.payload) > 0 ? state.totalScore + state.actualScore : 0;
    },
    setTotalScore:(state,action) => {
      state.totalScore = action.payload;
    }
  }
});
export const { 
  searchByPartialName,
  setActualScore,
  setRandomCard,
  setTotalScore,
  startLoadingCard,
 } = yugiohSlice.actions;