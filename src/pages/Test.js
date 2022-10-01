/* eslint-disable */
import React, { useEffect } from "react";
import { saveCookie } from "../api/kakao.api";
import { getStampList, updateStamp } from "../api/stamp.api";

const Test = () => {
  useEffect(async () => {
    /** Kakao 로그인 후 리다이렉트 페이지에서, 받아온 JWT를 쿠키에 저장 함수 */
    await saveCookie();
    /** 유저가 찍은 도장 리스트를 받아와서 로컬 스토리지에 저장 */
    await getStampList();
  }, []);

  /** 스탬프 저장 테스트 함수 */
  const onClickSaveStamp = async () => {
    /**
     * 1 : 중국성, 2 : 장어, 3 : 한라산 도새기, 4 : 고기가 맛있는 집, 5 : 떡볶이
     * 저장하고 싶은 것 넣기, 중복 저장 안 됨
     */
    await updateStamp(2);
  };

  /** 클릭하면 로컬 스토리지에 저장된(유저가 가지고 있는) 도장 조회 */
  const onClickGetStamp = async () => {
    /*** 중국성 : china, 장어 : fish, 한라산 : hanra, 고기 : meat, 떡볶이 : rice */
    console.log("중국성 : ", localStorage.getItem("china"));
    console.log("장어 : ", localStorage.getItem("fish"));
    console.log("한라산 : ", localStorage.getItem("hanra"));
    console.log("고기 : ", localStorage.getItem("meat"));
    console.log("떡볶이 : ", localStorage.getItem("rice"));
  };

  return (
    <div>
      <button onClick={onClickSaveStamp}>스탬프 저장하기</button>
      <button onClick={onClickGetStamp}>내가 가진 스탬프 확인하기.</button>
      <a href="https://guro-budmap.herokuapp.com/auth/kakao">
        {/* <a href="http://localhost:3002/auth/kakao"> */}
        <button>KAKAO LOGIN</button>
      </a>
    </div>
  );
};

export default Test;
