import Cookies from 'js-cookie';
let CryptoJS = require("crypto-js");

export const getAccessToken = () => Cookies.get("token");
export const isAuthenticated = () => !!getAccessToken();

export const userDetails = () => {
    try {
      const secretKey = process.env.REACT_APP_CALL_BREAK_TOKEN_KEY;
      const cookieName = 'userDetails';
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const encryptedCookie = cookies.find(cookie => cookie.startsWith(`${cookieName}=`));
  
      if (encryptedCookie) {
        const encryptedValue = decodeURIComponent(encryptedCookie.substring(cookieName.length + 1));
        const decryptedData = CryptoJS.AES.decrypt(encryptedValue, secretKey).toString(CryptoJS.enc.Utf8);
  
        if (decryptedData) {
          return JSON.parse(decryptedData);
        }
      }
    } catch (error) {
      console.error('Error decrypting user details:', error);
    }
  
    // Return default user details in case of decryption failure or invalid cookie
    return { role: '', email: '' };
  };