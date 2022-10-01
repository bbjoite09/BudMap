/* eslint-disable */
import { setCookie } from "../services/cookie";

/** Kakao Login 후 token을 추출하여, cookie에 저장 */
export const saveCookie = async () => {
  const params = new URL(window.location.href).searchParams;
  const token = params.get("token");
  setCookie("accesstoken", token);
};
