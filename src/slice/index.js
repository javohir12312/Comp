import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  korzina: false,
  signin: false,
};

const userData = createSlice({
  name: "korzina",
  name: "signin",
  initialState,
  reducers: {
    openKorzinka: (state) => {
      state.korzina = !state.korzina
      console.log(state.korzina);
    },
    openSignin: (state) => {
      state.signin = !state.signin
      console.log(state.signin);
    },
  }
});

export const { openKorzinka ,openSignin} = userData.actions;
export default userData.reducer;