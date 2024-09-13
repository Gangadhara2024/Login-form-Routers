import { createSlice } from "@reduxjs/toolkit";

const Postslice = createSlice({
  name: "USER",
  initialState: {
    userInfo: {
      apiStatus: "init",
      UserData: null,
    },
    postInfo: {
      apiStatus: "init",
      PostData: [],
    },
    modalApiStatus: "init",
  },
  reducers: {
    updateuserInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.userInfo.UserData = data;
      }
      state.userInfo.apiStatus = apiStatus;
    },

    updatepostInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.postInfo.PostData = data;
      }
      state.postInfo.apiStatus = apiStatus;
    },
    updateModalInfo: (state, action) => {
      state.modalApiStatus = action.payload;
    },
    Addfront: (state, action) => {
      state.postInfo.PostData.unshift(action.payload);
    },
  },
});
export const { updateuserInfo, updatepostInfo, updateModalInfo, Addfront } =
  Postslice.actions;
export default Postslice;
