import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
};
const Authslice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const { updateAuth } = Authslice.actions;
export default Authslice;
