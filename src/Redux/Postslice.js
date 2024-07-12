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
  },
});
export const { updateuserInfo, updatepostInfo } = Postslice.actions;
export default Postslice;
