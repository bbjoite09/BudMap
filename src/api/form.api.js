/* eslint-disable */
/** 만들어버린 FORM DATA */
import axios from "axios";
import { getCookie } from "../services/cookie";

const form = axios.create({
  baseURL: "http://54.197.28.78:8080/form",
  headers: {
    accessToken: getCookie("accesstoken"),
  },
  withCredentials: true,
});

/**
 * FormData를 받아서 서버에 저장
 * FormData("file")
 * @param {FormData} formData
 */
export const saveForm = async (formData) => {
  const { data } = await form({
    method: "post",
    url: "/",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
