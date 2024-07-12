import { Endpoints } from "../network/Endpoints";
import { Request } from "../network/Request";
import { updatepostInfo, updateuserInfo } from "./Postslice";
import axios from "axios";

export const userinfoThunk = async (dispatch) => {
  dispatch(updateuserInfo({ apiStatus: "pending" }));
  const httpData = {
    url: Endpoints.userInfo,
  };
  const { success, data } = await Request(httpData);
  dispatch(updateuserInfo({ apiStatus: success ? "success" : "error", data }));
};

export const postinfoThunk = async (dispatch) => {
  dispatch(updatepostInfo({ apiStatus: "pending" }));
  const httpData = {
    url: Endpoints.postInfo,
  };
  const { success, data } = await Request(httpData);
  dispatch(updatepostInfo({ apiStatus: success ? "success" : "error", data }));
};
