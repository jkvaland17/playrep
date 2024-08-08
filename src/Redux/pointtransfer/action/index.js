import {
  POINT_POINT_REJECTED,
  POINT_RECEIVED,
  POINT_TRANSFER,
  POINT_TRANSFER_RECEIVED,
  POINT_YET_TO_RECEIVED,
} from "../../route";

export const getPointTransferList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(POINT_TRANSFER, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };

export const getPointsTransferredReceivedList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(POINT_TRANSFER_RECEIVED, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };

export const getPointReceivedList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(POINT_RECEIVED, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };

export const getPointYetToReceivedList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(POINT_YET_TO_RECEIVED, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };

export const getPointRejectedList =
  (payload) => async (dispatch, getState, api) => {
    return await api
      .post(POINT_POINT_REJECTED, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };
