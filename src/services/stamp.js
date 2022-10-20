export const changeKeyName = (item) => {
  switch (item) {
    case "1":
      return "rice";
    case "2":
      return "fish";
    case "3":
      return "china";
    case "4":
      return "meat";
    case "5":
      return "hanra";
  }
};

export const setStamp = (idx) => {
  localStorage.setItem(changeKeyName(idx), true);
};

export const getStamp = (idx) => {
  localStorage.getItem(changeKeyName(idx));
};

export const getStampList = () => {
  let cnt = 0;
  for (let i = 1; i <= 5; i++) {
    let storeName = changeKeyName(String(i));
    if (localStorage.getItem(storeName)) {
      cnt += 1;
    }
  }
  return cnt;
};
