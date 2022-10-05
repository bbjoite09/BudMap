const baseUrl = `https://pinodev.shop`;

export const url = {
  userUrl: baseUrl + "/auth",
  stampUrl: baseUrl + "/stamp-user",
};

export const axiosUrl = {
  serverCheck: url.userUrl + "/check",
  createUser: url.userUrl + "/kakao",
  getStamp: url.stampUrl,
  setStamp: url.stampUrl + "/",
};
