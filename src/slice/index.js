import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  korzina: false,
  signin: false,
  katalog: false,
};

const userData = createSlice({
  name: "korzina",
  name: "signin",
  name: "katalog",
  initialState,
  reducers: {
    openKorzinka: (state) => {
      state.korzina = !state.korzina
    },
    openSignin: (state) => {
      state.signin = !state.signin
    },
    openKatalog: (state) => {
      state.katalog = !state.katalog
    },
  }
});

export const { openKorzinka, openSignin, openKatalog } = userData.actions;
export default userData.reducer;