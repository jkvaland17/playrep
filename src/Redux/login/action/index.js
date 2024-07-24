import { AUTH_LOGIN } from "../../route";
import Cookies from 'js-cookie'
let CryptoJS = require("crypto-js");

export const loginUser = (payload) => async (dispatch, getState, api) => {
    return await api
        .post(AUTH_LOGIN, payload)
        .then((res) => {
            console.log("res",res)
            document.cookie = "test=true; expires=1/2;"
            const dataToEncrypt = JSON.stringify(res.data.data?.user);
            const secretKey = process.env.REACT_APP_CALL_BREAK_TOKEN_KEY;
            const encryptedUserData = CryptoJS.AES.encrypt(dataToEncrypt, secretKey).toString();
            document.cookie = `userDetails=${encodeURIComponent(encryptedUserData)}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/`;
            Cookies.set(`token`, res.data.data?.tokenData?.token, { path: "/", expires: 1 / 2 });
            if(Object?.keys(res.data.data?.agentData || {})?.length > 0) {
                const agentDataEncrypt = JSON.stringify(res.data.data?.agentData);
                const encryptedAgentData = CryptoJS.AES.encrypt(agentDataEncrypt, secretKey).toString();
                document.cookie = `agentDetails=${encodeURIComponent(encryptedAgentData)}; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/`;

            }else {
                Cookies.set(`agentDetails`, JSON.stringify(null), { path: "/", expires: 1 / 2 });
                return res;
            }
            return res;
        })
        .catch((err) => {
            return err.response;
        });
};