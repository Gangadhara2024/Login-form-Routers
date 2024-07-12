import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Postslice from "./Postslice";

const store = configureStore({
  reducer: {
    AUTH: Authslice.reducer,
    POST: Postslice.reducer,
  },
});
export default store;
