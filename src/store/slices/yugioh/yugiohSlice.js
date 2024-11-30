import { createSlice } from '@reduxjs/toolkit';

export const yugiohSlice = createSlice({
  name: 'yugioh',
  initialState: {
     cartas: [],
     carta: {},
     isLoading:false
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
    }
  }
});
export const { startLoadingCard,setRandomCard,searchByPartialName } = yugiohSlice.actions;