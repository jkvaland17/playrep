import { POINT_TRANSFER } from "../../route";

export const getPointTransferList = (payload) => async (dispatch, getState, api) => {
    return await api
        .get(POINT_TRANSFER, payload)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err.response;
        });
};