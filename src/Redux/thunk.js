import { Endpoints } from "../network/Endpoints";
import { Request } from "../network/Request";
import {
  Addfront,
  updateModalInfo,
  updatepostInfo,
  updateuserInfo,
} from "./Postslice";

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

export const CreatePost = (modaldata) => {
  return async (dispatch) => {
    dispatch(updateModalInfo("pending"));
    const httpData = {
      url: Endpoints.createpost,
      method: "POST",
      data: modaldata,
    };
    const { success, data } = await Request(httpData);
    if (success) {
      dispatch(Addfront(data.post));
    }
    dispatch(updateModalInfo(success ? "success" : "error", data));
  };
};
