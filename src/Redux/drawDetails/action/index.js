import { FUN_TARGET } from "../../route";

export const getFunTargetList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(FUN_TARGET, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };
