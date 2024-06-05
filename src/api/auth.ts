import CryptoJS from "crypto-js";
import { ACCESS_TOKEN } from "../common/constants/api.constant";
import { ROUTER_ADMIN, ROUTER_CLIENT } from "../common/constants/router.constant";
import rootRouter from "../routes/rootRouter";
import { RESET_USER } from "../store/slices/user/user.slice";
import { store } from "../store/store";

export const Encrypt = (message: any, privateKey: any) =>
   CryptoJS.AES.encrypt(message, privateKey).toString();

export const Decrypt = (ciphertext: any, privateKey: any) => {
   var bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
   return bytes.toString(CryptoJS.enc.Utf8);
};

export const logout = (type: `admin` | `client`) => {
   localStorage.clear();
   const dispatch = store.dispatch;
   dispatch(RESET_USER());

   if (type === `client`) rootRouter.navigate(ROUTER_CLIENT.LOGIN());
   if (type === `admin`) rootRouter.navigate(ROUTER_ADMIN.LOGIN());
};

// admin
export const setAccessToken = (accessToken: string) => {
   localStorage.setItem(ACCESS_TOKEN, Encrypt(accessToken, ACCESS_TOKEN));
};
export const getAccessToken = () => {
   const accessToken = localStorage.getItem(ACCESS_TOKEN);
   if (!accessToken) return null;
   return Decrypt(accessToken, ACCESS_TOKEN);
};


