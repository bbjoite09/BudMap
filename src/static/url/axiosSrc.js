const baseUrl = `http://localhost:3001`;

export const url = {
  userUrl: baseUrl + "/auth",
  stampUrl: baseUrl + "/stamp",
};

export const axiosUrl = {
  serverCheck: url.userUrl + "/check",
  createUser: url.userUrl + "/kakao",
  getStamp: url.stampUrl,
  setStamp: url.stampUrl + "/",
};
