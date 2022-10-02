import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "../../static/images/home/background.png";
import cloudBottom from "../../static/images/home/cloudBottom.png";
import cloudTop from "../../static/images/home/cloudTop.png";
import ic1 from "../../static/images/store/store1.png";
import ic2 from "../../static/images/store/store2.png";
import ic3 from "../../static/images/store/store3.png";
import ic4 from "../../static/images/store/store4.png";
import ic5 from "../../static/images/store/store5.png";
import { string } from "../../static/strings/string";
import Chat from "./Chat";

import styled, { keyframes } from "styled-components";
import { saveCookie } from "../../api/kakao.api";
import { getStampList } from "../../api/stamp.api";
import BottomSlider from "../../elements/BottomSlider";
import { getCookie } from "../../services/cookie";

const Home = () => {
  const [next, setNext] = useState(0);

  useEffect(() => {
    /** Kakao 로그인 후 리다이렉트 페이지에서, 받아온 JWT를 쿠키에 저장 함수 */
    saveCookie();
    /** 유저가 찍은 도장 리스트를 받아와서 로컬 스토리지에 저장 */
    if (getCookie("accesstoken")) {
      getStampList().then(() => console.log("stamp update done"));
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#83C4D6",
        position: "relative",
      }}
    >
      <img
        src={background}
        style={{
          position: "absolute",
          width: "100%",
          marginTop: window.innerWidth <= 500 ? "38%" : "27%",
          objectFit: "cover",
        }}
      />
      <AnimationTop src={cloudTop} />
      <AnimationBottom src={cloudBottom} />
      <Link to="/firstSection">
        <div style={{ position: "absolute", width: "45%", height: "30%", top: "25%", right: 0 }} />
        <img src={ic1} style={{ position: "absolute", width: "18%", top: "35%", right: 100 }} />
        <img src={ic2} style={{ position: "absolute", width: "15%", top: "40%", right: 15 }} />
      </Link>
      <Link to="/secondSection">
        <div style={{ position: "absolute", width: "55%", height: "30%", top: "45%", left: 0 }} />
        <img src={ic3} style={{ position: "absolute", width: "20%", top: "57%", left: 25 }} />
        <img src={ic4} style={{ position: "absolute", width: "20%", top: "55%", left: 120 }} />
        <img src={ic5} style={{ position: "absolute", width: "20%", top: "48%", left: 90 }} />
      </Link>
      <Chat
        onDone={() => {
          if (next < string.chatTutorial.length - 1) {
            setNext(next + 1);
          }
        }}
      >
        {string.chatTutorial[next]}
      </Chat>
      <BottomSlider />
    </div>
  );
};

const moveRignt = keyframes`{
  from {
    margin-left: -294%;
  }
  to {
    margin-left: 0%;
  }
}`;

const AnimationTop = styled.img`
  position: absolute;
  animation: ${moveRignt} 18s linear infinite;
  z-index: 5;
  width: 400%;
  top: 15%;
`;

const moveLeft = keyframes`{
  from {
    margin-left: 0%;
  }
  to {
    margin-left: -243%;
  }
}`;

const AnimationBottom = styled.img`
  position: absolute;
  animation: ${moveLeft} 17s linear infinite;
  z-index: 5;
  width: 400%;
  bottom: 10%;
`;

export default Home;
