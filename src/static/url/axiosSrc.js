const baseUrl = `https://budmap-api.devstory.co.kr`;

export const url = {
  userUrl: baseUrl + "/auth",
  stampUrl: baseUrl + "/stamp-user",
  formUrl: baseUrl + "/form",
};

export const axiosUrl = {
  serverCheck: url.userUrl + "/check",
  createUser: url.userUrl + "/kakao",
  setForm: url.formUrl,
  getStamp: url.stampUrl,
  setStamp: url.stampUrl + "/",
};
