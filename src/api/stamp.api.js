/* eslint-disable */

import axios from "axios";
import { getCookie } from "../services/cookie";
import { axiosUrl } from "../static/url/axiosSrc";

const stamp = axios.create({
  baseURL: axiosUrl.getStamp,
  //   baseURL: "http://localhost:3002/stamp-user",
  headers: {
    accesstoken: getCookie("accesstoken"),
  },
  withCredentials: true,
});

/** JWT를 이용한 유저의 스탬프 리스트 조회 */
export const getStampList = async () => {
  const { data: stampList } = await stamp.get("/");
  for (const item of stampList.data) {
    localStorage.setItem(changeKeyName(item), item);
  }
  return stampList.data;
};

/** 로컬 저장을 위한 키 값 변경
 * 1 : 중국성, 2 : 장어, 3 : 한라산 도새기, 4 : 고기가 맛있는 집, 5 : 떡볶이
 * @param {number} idx
 */
export const changeKeyName = (item) => {
  switch (item) {
    case 1:
      return "china";
    case 2:
      return "fish";
    case 3:
      return "hanra";
    case 4:
      return "meat";
    case 5:
      return "rice";
  }
};

/**
 * 가게 IDX를 받아서 스탬프 획득 API
 * 1 : 중국성, 2 : 장어, 3 : 한라산 도새기, 4 : 고기가 맛있는 집, 5 : 떡볶이
 * @param {string} idx
 */
export const updateStamp = async (idx) => {
  const { data } = await stamp.post(`/${idx}`);
  return data;
};
